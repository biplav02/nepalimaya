import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Users, Award, Globe } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Janakpur Origins',
    description: 'Rooted in the sacred city of Janakpur, birthplace of Goddess Sita and center of Mithila civilization.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Empowering local artists, especially women, to preserve and share their ancestral art traditions.',
  },
  {
    icon: Award,
    title: 'UNESCO Recognition',
    description: 'Advocating for Mithila art to receive UNESCO Intangible Cultural Heritage status.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Connecting Mithila heritage with UN Sustainable Development Goals for worldwide change.',
  },
];

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 mithila-pattern opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image Composition */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              {/* Main visual container */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-cultural shadow-elevated">
                {/* Pattern overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-ricepaper via-transparent to-haldi/20" />
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-sindoor flex items-center justify-center shadow-glow-primary">
                      <span className="text-4xl">🪷</span>
                    </div>
                    <h3 className="font-playfair text-3xl font-bold text-foreground">मिथिला</h3>
                    <p className="font-mukta text-xl text-earth">जनकपुर की विरासत</p>
                    <p className="text-muted-foreground font-inter text-sm">The Heritage of Janakpur</p>
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-sindoor/40 rounded-tl-xl" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-haldi/40 rounded-br-xl" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-8 -right-8 px-8 py-6 rounded-2xl bg-card shadow-elevated border border-border/50">
                <div className="text-center">
                  <div className="font-playfair text-4xl font-bold gradient-text-primary">Since</div>
                  <div className="font-playfair text-5xl font-bold text-foreground">2015</div>
                  <div className="text-sm text-muted-foreground mt-1">Preserving Heritage</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-peacock/10 text-peacock text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Bridging Ancient Art with{' '}
                <span className="gradient-text-cultural">Modern Purpose</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mithila Center USA is a 501(c)(3) nonprofit organization dedicated to preserving, 
                promoting, and celebrating the rich cultural heritage of Mithila—a region spanning 
                southern Nepal and northern India, centered around the historic city of Janakpur.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:shadow-card hover:border-primary/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-haldi flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-ink" />
                  </div>
                  <h3 className="font-playfair font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <Button variant="cultural" size="lg" className="group">
              Learn More About Our Mission
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
