import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#sdg', label: 'Art for SDGs' },
  { href: '#world-tour', label: 'World Tour' },
  { href: '#festival', label: 'Festival' },
  { href: '#museum', label: 'Museum' },
  { href: '#press', label: 'Press' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full bg-gradient-sindoor flex items-center justify-center shadow-glow-primary group-hover:scale-110 transition-transform duration-300">
            <span className="text-primary-foreground font-playfair font-bold text-lg">M</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-playfair font-bold text-lg leading-tight text-foreground">
              Mithila Center
            </h1>
            <p className="text-xs text-muted-foreground font-inter tracking-widest uppercase">
              USA
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-inter text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-sindoor transition-all duration-300 group-hover:w-4/5 rounded-full" />
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="donate" size="sm" className="gap-2">
            <Heart className="w-4 h-4" />
            Donate
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-elevated transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-inter text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-border mt-2">
            <Button variant="donate" className="w-full gap-2">
              <Heart className="w-4 h-4" />
              Donate Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
