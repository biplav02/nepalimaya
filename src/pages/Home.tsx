import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Globe, Users, Palette, Award, Calendar } from 'lucide-react';
import heroImage from '@/assets/hero-mithila-artwork.jpg';

const Home = () => {
  const highlights = [
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Represented at the United Nations and diplomatic missions worldwide",
      link: "/un-engagement"
    },
    {
      icon: Palette,
      title: "Art for SDGs",
      description: "Flagship program connecting ancient art to sustainable development",
      link: "/art-for-sdgs"
    },
    {
      icon: Calendar,
      title: "Mithila Festival USA",
      description: "Annual celebration of Maithil culture, art, and heritage",
      link: "/festival"
    },
    {
      icon: Users,
      title: "Community Programs",
      description: "Workshops, education, and cultural preservation initiatives",
      link: "/programs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-inter text-primary font-medium">
                Preserving 3,000+ Years of Heritage
              </span>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Mithila Center
              <span className="block gradient-text-primary">USA</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-inter leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Bridging ancient Maithil wisdom with modern global challenges through art, culture, and sustainable development.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button asChild size="lg" className="gap-2">
                <Link to="/about">
                  Discover Our Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="donate" size="lg" className="gap-2">
                <Link to="/contact">
                  <Heart className="w-4 h-4" />
                  Support Our Mission
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Quick Highlights */}
      <section className="py-24 bg-muted/30 mithila-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From village traditions to global platforms, we're transforming how the world experiences Mithila culture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-sindoor flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-sindoor">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "3,000+", label: "Years of Heritage" },
              { value: "50+", label: "Countries Reached" },
              { value: "10,000+", label: "Artists Empowered" },
              { value: "17", label: "SDGs Addressed" }
            ].map((stat, index) => (
              <div key={index} className="text-primary-foreground">
                <div className="font-playfair text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="font-inter text-sm opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 rice-paper-texture">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Be part of preserving and promoting one of the world's oldest living art traditions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/programs">Explore Programs</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
