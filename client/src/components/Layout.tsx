import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { labInfo } from "@/data/content";
import brandeisLogo from "@/assets/images/brandeis-logo-stacked.png";
import { ChatWidget } from "./ChatWidget";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/research", label: "Research" },
    { href: "/people", label: "Team" },
    { href: "/publications", label: "Publications" },
    { href: "/news", label: "News" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/30">
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
          scrolled ? "bg-background/80 backdrop-blur-md border-white/5 py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" asChild>
            <a className="flex items-center gap-2 group" data-testid="link-nav-home">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-background font-bold shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                K
              </div>
              <span className="font-display font-bold text-xl tracking-tight group-hover:text-primary transition-colors">
                {labInfo.name}
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-1 items-center">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} asChild>
                <a
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:text-primary",
                    location === item.href
                      ? "bg-white/5 text-primary shadow-inner border border-white/5"
                      : "text-muted-foreground hover:bg-white/5"
                  )}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-16 z-40 lg:hidden flex flex-col p-8 gap-4 border-t border-black/10 bg-white/95 text-slate-900 backdrop-blur-xl"
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} asChild>
                <a
                  className={cn(
                    "text-2xl font-display font-medium py-2 border-b border-black/10",
                    location === item.href ? "text-slate-900 pl-4 border-l-2 border-primary" : "text-slate-700"
                  )}
                  onClick={() => setIsOpen(false)}
                  data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <ChatWidget />

      <footer className="border-t border-white/5 bg-black/20 py-12 mt-20">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="font-display font-bold text-xl mb-4 text-white">Kadener Lab</h3>
            <img 
              src={brandeisLogo} 
              alt="Brandeis University Logo" 
              className="h-24 w-auto -ml-6 opacity-90 hover:opacity-100 transition-opacity rounded" 
            />
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="mailto:kadenerlab@brandeis.edu" className="block hover:text-primary transition-colors">kadenerlab@brandeis.edu</a>
              <a href="mailto:skadener@brandeis.edu" className="block hover:text-primary transition-colors">skadener@brandeis.edu</a>
              <p>781-736-2445</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Location</h4>
            <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
              Brandeis University
              <br />
              Rosenstiel Basic Medical Sciences Research Center
              <br />
              Floor 3, #333
              <br />
              415 South St
              <br />
              Waltham, MA 02453
              <br />
              United States of America
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kadener Lab. Built with Replit.
        </div>
      </footer>
    </div>
  );
}
