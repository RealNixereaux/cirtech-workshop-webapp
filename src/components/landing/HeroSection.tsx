
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Simplify Your Workflow with Dummy
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto">
              The all-in-one platform that helps teams collaborate, create, and deliver amazing results.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              Watch Demo
            </Button>
          </div>
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none h-10 bottom-0 top-auto"></div>
            <div className="relative z-0 shadow-xl rounded-lg border border-slate-200 overflow-hidden">
              <div className="bg-white p-2">
                <img
                  src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&w=1200&h=600"
                  alt="Dashboard preview"
                  className="rounded-md object-cover w-full max-w-4xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
