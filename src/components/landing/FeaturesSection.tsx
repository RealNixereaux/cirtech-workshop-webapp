
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "AI-Powered Analytics",
    description: "Get insights into your data with our advanced AI algorithms that identify patterns and make recommendations.",
    icon: "layout-dashboard",
  },
  {
    title: "Real-time Collaboration",
    description: "Work together with your team in real-time, with changes syncing instantly across all devices.",
    icon: "layout-grid",
  },
  {
    title: "Advanced Security",
    description: "Enterprise-grade security to keep your data safe with end-to-end encryption and regular security audits.",
    icon: "layout-list",
  },
  {
    title: "Customizable Dashboards",
    description: "Create personalized dashboards that show the metrics most important to you and your team.",
    icon: "layout-panel-left",
  },
  {
    title: "Seamless Integrations",
    description: "Connect with over 100+ tools you already use to create a centralized workflow.",
    icon: "layout-panel-top",
  },
  {
    title: "Mobile Friendly",
    description: "Access your work from anywhere with our responsive mobile apps for iOS and Android.",
    icon: "layout-template",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to manage your workflow in one intuitive platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card key={i} className="border border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Everything you need in one place
              </h3>
              <p className="text-slate-600 mb-6">
                Our platform brings all your work together, eliminating the need for multiple disconnected tools.
              </p>
              <ul className="space-y-3">
                {["Unified workspace", "Streamlined communication", "Automated workflows", "Custom reporting"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=600&h=400"
                alt="Feature highlight"
                className="rounded-md w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
