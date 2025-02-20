
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { stripe } from "../_shared/stripe.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return new Response("No signature", { status: 400 });
  }

  try {
    const body = await req.text();
    const endpointSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
    
    if (!endpointSecret) {
      throw new Error("Missing STRIPE_WEBHOOK_SECRET");
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      endpointSecret
    );

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Handle subscription events
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        if (session.metadata?.userId && session.metadata?.planId) {
          await supabase.from("subscriptions").insert({
            user_id: session.metadata.userId,
            plan_id: session.metadata.planId,
            status: "active",
            current_period_end: new Date(
              (session.subscription as any)?.current_period_end * 1000
            ),
          });
        }
        break;
      }
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        const status = subscription.status;
        const userId = subscription.metadata?.userId;

        if (userId) {
          await supabase
            .from("subscriptions")
            .update({
              status,
              current_period_end: new Date(subscription.current_period_end * 1000),
            })
            .eq("user_id", userId);
        }
        break;
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error processing webhook:", err);
    return new Response(
      JSON.stringify({ error: "Webhook error: " + err.message }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
