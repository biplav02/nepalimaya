import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/about', label: 'About Us', children: [
    { href: '/about', label: 'Our Story' },
    { href: '/mission', label: 'Mission & Vision' },
    { href: '/recognition', label: 'Recognition & Honors' },
  ]},
  { href: '/art-for-sdgs', label: 'Art for SDGs' },
  { href: '/un-engagement', label: 'UN Engagement' },
  { href: '/programs', label: 'Programs' },
  { href: '/festival', label: 'Festival' },
  { href: '/world-tour', label: 'World Tour' },
  { href: '/future', label: 'Future' },
  { href: '/gallery', label: 'Gallery' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-background/80 backdrop-blur-sm py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-sindoor flex items-center justify-center shadow-glow-primary group-hover:scale-110 transition-transform duration-300">
            <span className="text-primary-foreground font-playfair font-bold text-base">M</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-playfair font-bold text-base leading-tight text-foreground">
              Mithila Center
            </h1>
            <p className="text-xs text-muted-foreground font-inter tracking-widest uppercase">
              USA
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <Link
                to={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-inter transition-colors relative flex items-center gap-1",
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
                onMouseEnter={() => link.children && setOpenDropdown(link.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.label}
                {link.children && <ChevronDown className="w-3 h-3" />}
              </Link>
              {link.children && (
                <div 
                  className={cn(
                    "absolute top-full left-0 bg-background border border-border rounded-lg shadow-elevated py-2 min-w-[180px] transition-all",
                    openDropdown === link.href ? "opacity-100 visible" : "opacity-0 invisible"
                  )}
                  onMouseEnter={() => setOpenDropdown(link.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <Link to="/contact">Contact</Link>
          </Button>
          <Button asChild variant="donate" size="sm" className="gap-2">
            <Link to="/contact">
              <Heart className="w-4 h-4" />
              Donate
            </Link>
          </Button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-elevated transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-[80vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                to={link.href}
                className={cn(
                  "block px-4 py-3 text-base font-inter rounded-lg transition-colors",
                  location.pathname === link.href ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-6">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-border mt-2 space-y-2">
            <Button asChild variant="outline" className="w-full">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="donate" className="w-full gap-2">
              <Link to="/contact">
                <Heart className="w-4 h-4" />
                Donate Now
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
