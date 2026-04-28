import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-[60]">
        {/* <div
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div> */}
      </div>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-gray-950/80 backdrop-blur-2xl border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src="/zod_dark.png"
                  alt="Zod Logo"
                  className="h-8 w-8 invert transition-transform group-hover:scale-110 duration-300"
                />
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight">Zod</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/features"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/showcase"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                Showcase
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/solar"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                Solar
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <button className="relative group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-medium overflow-hidden">
                <span className="relative z-10">Download App</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      {mobileMenuOpen && (
  <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              <Link
                to="/features"
                className="block text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                to="/showcase"
                className="block text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Showcase
              </Link>
              <Link
                to="/solar"
                className="block text-sm font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solar
              </Link>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-medium">
                Download App
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="relative border-t border-white/10 bg-gray-950/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-4 gap-4 md:gap-8 mb-12 text-left text-[0.8rem] md:text-sm">
          <div className="hidden md:block">
  <div className="flex items-center gap-3 mb-4">
    <img src="/zod_dark.png" alt="Zod Logo" className="h-6 w-6 invert" />
    <span className="text-xl font-bold">Zod</span>
  </div>
  <p className="text-gray-400 text-[0.75rem] md:text-sm leading-relaxed">
    The future of social commerce. Connect, share, and shop in one powerful platform.
  </p>
</div>


            <div>
              <h4 className="font-bold mb-4 text-white">Product</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link to="/#features" className="hover:text-cyan-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/#showcase" className="hover:text-cyan-400 transition-colors">
                    Showcase
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-cyan-400 transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link to="/about" className="hover:text-cyan-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-cyan-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-cyan-400 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link to="/privacy" className="hover:text-cyan-400 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-cyan-400 transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-cyan-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© {currentYear} Zod. All rights reserved.</p>
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5 text-cyan-400" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-cyan-400" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-cyan-400" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
