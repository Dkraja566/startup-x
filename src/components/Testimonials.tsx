
import { motion } from "framer-motion";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "This platform has completely transformed how we handle our data analytics. The insights we've gained have been invaluable.",
      author: "Sarah Johnson",
      role: "CTO at TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&q=80",
      rating: 5,
    },
    {
      quote: "The insights we've gained have been invaluable for our business growth. Customer support is outstanding.",
      author: "Michael Chen",
      role: "Founder at StartupX",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=256&h=256&q=80",
      rating: 5,
    },
    {
      quote: "Incredible platform with outstanding customer support. The AI insights have helped us make better decisions.",
      author: "Emily Rodriguez",
      role: "Data Analyst at Analytics Co",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=256&h=256&q=80",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Trusted by industry leaders
          </h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-[600px] mx-auto">
            See what our customers have to say about their experience with our platform
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-background backdrop-blur-sm rounded-2xl relative group hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full border-2 border-primary/20"
                />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg mb-4 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
              <div className="absolute top-0 right-0 p-6">
                <svg
                  className="h-8 w-8 text-primary/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
