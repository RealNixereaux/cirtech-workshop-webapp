
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactSection() {
  return (
    <section className="py-20 bg-slate-50" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to get started?</h2>
            <p className="text-xl text-slate-600">
              Sign up for our free trial today or contact our team with any questions
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Us</h3>
                <p className="text-slate-600 mb-6">
                  Have questions about our platform? Our team is here to help you find the right solution.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="text-slate-700">support@dummyapp.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="text-slate-700">(555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Get Started</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                    <Input id="company" placeholder="Your company" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Start Free Trial
                  </Button>
                  <p className="text-xs text-center text-slate-500">
                    No credit card required. 14-day free trial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
