
export function FooterSection() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Dummy</h2>
              <p className="text-slate-400">
                Simplifying teamwork for businesses of all sizes.
              </p>
            </div>
            <div className="flex space-x-4">
              {["Twitter", "LinkedIn", "Facebook", "GitHub"].map((social, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 text-white">{/* Icon would go here */}</div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Integrations", "Changelog", "Docs"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Customers", "Brand"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {["Community", "Contact", "Support", "FAQ", "Privacy"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 text-slate-400 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Dummy, Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
