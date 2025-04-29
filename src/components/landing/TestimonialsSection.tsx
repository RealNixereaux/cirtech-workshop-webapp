
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Dummy has completely transformed how our team works together. We've increased our productivity by 40% in just three months.",
    author: "Sarah Johnson",
    role: "Product Manager, TechCorp",
    avatar: "SJ"
  },
  {
    quote: "The analytics capabilities are incredible. We're now making data-driven decisions that have directly improved our bottom line.",
    author: "Michael Chen",
    role: "CTO, GrowthStartup",
    avatar: "MC"
  },
  {
    quote: "After trying countless other platforms, Dummy is the only one that actually delivered on its promises. Worth every penny.",
    author: "Emily Rodriguez",
    role: "Operations Director, ScaleUp Inc",
    avatar: "ER"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Loved by Teams Everywhere</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See what our customers are saying about their experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="bg-white border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <div className="text-3xl text-blue-500 mb-4">"</div>
                  <p className="text-slate-700 flex-grow mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-blue-200 text-blue-800">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-slate-900">{testimonial.author}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-8 md:p-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Join over 10,000+ companies already growing with Dummy</h3>
            <div className="flex flex-wrap justify-center gap-10 items-center opacity-80">
              {["Company A", "Company B", "Company C", "Company D", "Company E"].map((company, i) => (
                <div key={i} className="text-xl font-bold tracking-tight">{company}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
