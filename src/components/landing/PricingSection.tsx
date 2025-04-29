
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for small teams or individuals",
    price: "$12",
    billing: "per user / month",
    features: [
      "Up to 5 projects",
      "Basic analytics",
      "24-hour support response time",
      "5GB storage",
      "Basic integrations"
    ],
    cta: "Start Basic",
    highlighted: false
  },
  {
    name: "Pro",
    description: "For growing teams with advanced needs",
    price: "$29",
    billing: "per user / month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "4-hour support response time",
      "25GB storage",
      "Advanced integrations",
      "Custom reporting",
      "Team collaboration tools"
    ],
    cta: "Start Pro",
    highlighted: true
  },
  {
    name: "Enterprise",
    description: "For organizations with complex requirements",
    price: "Contact us",
    billing: "custom pricing",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "1-hour support response time",
      "Unlimited storage",
      "Custom integrations",
      "Advanced security features",
      "API access",
      "On-premise option"
    ],
    cta: "Contact Sales",
    highlighted: false
  }
];

export function PricingSection() {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the plan that works best for your team. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <Card 
              key={i} 
              className={`flex flex-col border ${
                plan.highlighted 
                  ? 'border-blue-500 shadow-lg shadow-blue-100' 
                  : 'border-slate-200'
              }`}
            >
              <CardHeader className="pb-0">
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-slate-500 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="py-6">
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    {plan.price !== "Contact us" && (
                      <span className="text-slate-500 ml-2">{plan.billing}</span>
                    )}
                  </div>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-6">
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-600">
            All plans come with a 14-day money-back guarantee. No credit card required to start your trial.
          </p>
        </div>
      </div>
    </section>
  );
}
