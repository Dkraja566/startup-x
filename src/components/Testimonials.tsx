
export const Testimonials = () => {
  const testimonials = [
    {
      quote: "This platform has completely transformed how we handle our data analytics.",
      author: "Sarah Johnson",
      role: "CTO at TechCorp",
    },
    {
      quote: "The insights we've gained have been invaluable for our business growth.",
      author: "Michael Chen",
      role: "Founder at StartupX",
    },
    {
      quote: "Incredible platform with outstanding customer support.",
      author: "Emily Rodriguez",
      role: "Data Analyst at Analytics Co",
    },
  ];

  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
          Trusted by industry leaders
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-muted/30 backdrop-blur-sm rounded-2xl relative group hover:bg-muted/50 transition-colors"
            >
              <div className="mb-4">
                <svg
                  className="h-6 w-6 text-primary/40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg mb-4">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
