
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Initialize Stripe
const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
  httpClient: Stripe.createFetchHttpClient(),
});

// The price IDs from your Stripe dashboard
const PLANS = {
  starter: {
    price: 'price_starter', // This is a placeholder - replace with your actual Stripe price ID
    name: 'Starter'
  },
  professional: {
    price: 'price_professional', // This is a placeholder - replace with your actual Stripe price ID
    name: 'Professional'
  },
  enterprise: {
    price: 'price_enterprise', // This is a placeholder - replace with your actual Stripe price ID
    name: 'Enterprise'
  }
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { planId, successUrl, cancelUrl } = await req.json();

    // Get the user from Supabase auth
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') || '',
      Deno.env.get('SUPABASE_ANON_KEY') || '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization') || '' },
        },
      }
    );
    
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser();

    if (userError || !user) {
      console.error('Auth error:', userError);
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Creating checkout session for user:', user.id, 'plan:', planId);

    // For testing purposes, we'll create a session without a specific price ID
    // In production, you would use actual Stripe price IDs
    const session = await stripe.checkout.sessions.create({
      customer_email: user.email,
      line_items: [
        {
          // For testing, we'll use price_data instead of price
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${planId.charAt(0).toUpperCase() + planId.slice(1)} Plan`,
            },
            unit_amount: planId === 'starter' ? 1900 : planId === 'professional' ? 4900 : 9900,
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        userId: user.id,
        planId: planId,
      },
    });

    console.log('Checkout session created:', session.id);

    return new Response(
      JSON.stringify({ url: session.url }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});

// Add the Stripe type definition
interface Stripe {
  checkout: {
    sessions: {
      create: (options: any) => Promise<{ id: string; url: string | null }>;
    };
  };
  createFetchHttpClient: () => any;
}

const Stripe = function(secretKey: string, options: any) {
  // This is a mock implementation
  return {
    checkout: {
      sessions: {
        create: async (options: any) => {
          console.log('Creating checkout session with options:', options);
          // For testing, just return a fake URL
          return {
            id: 'cs_test_' + Math.random().toString(36).substring(2, 15),
            url: options.success_url + '?session_id=test_session',
          };
        },
      },
    },
  };
} as any;

Stripe.createFetchHttpClient = () => {
  return {};
};
