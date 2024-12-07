export function Testimonials() {
  const testimonials = [
    {
      quote: "I've 4x my investment",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    },
    {
      quote: "Launched in one day and made $170 already",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face",
    },
    {
      quote: "Feels like a super power",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=face",
    },
  ];

  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="flex items-center gap-4">
          <img
            src={testimonial.avatar}
            alt="Avatar"
            className="w-12 h-12 rounded-full"
          />
          <p className="text-sm text-muted-foreground">{testimonial.quote}</p>
        </div>
      ))}
    </div>
  );
}