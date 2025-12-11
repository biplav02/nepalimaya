import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building2, Cloud, Globe, Users, Sparkles, Target, ArrowRight } from 'lucide-react';
import museumImage from '@/assets/museum-concept.jpg';

const Future = () => {
  const initiatives = [
    {
      icon: Building2,
      title: "Mithila Museum & Cultural Center",
      status: "In Planning",
      target: "$5M",
      description: "A dedicated physical space to house permanent collections, host exhibitions, conduct workshops, and serve as a hub for Maithil cultural activities in the United States.",
      features: [
        "10,000 sq ft gallery and event space",
        "Traditional art workshop studios",
        "Research library and archive",
        "Performance hall for cultural events",
        "Educational facilities for school programs"
      ]
    },
    {
      icon: Cloud,
      title: "Digital Heritage Archive",
      status: "In Development",
      target: "$500K",
      description: "A comprehensive digital repository preserving traditional designs, techniques, oral histories, and cultural knowledge for future generations.",
      features: [
        "High-resolution artwork digitization",
        "Video documentation of techniques",
        "Oral history recordings",
        "Interactive learning modules",
        "Open-access research database"
      ]
    },
    {
      icon: Globe,
      title: "Global Artist Network",
      status: "Pilot Phase",
      target: "$250K",
      description: "An international network connecting Mithila artists across diaspora communities, facilitating collaboration, mentorship, and market access.",
      features: [
        "Online marketplace platform",
        "Virtual mentorship matching",
        "Collaborative project facilitation",
        "Artist residency program",
        "Annual global artist gathering"
      ]
    }
  ];

  const roadmap = [
    { year: "2024", milestone: "Digital Archive Phase 1 Launch", description: "Initial collection of 1,000+ digitized artworks and 50 oral histories" },
    { year: "2025", milestone: "Global Network Platform", description: "Full launch of artist network with 500+ registered artists" },
    { year: "2026", milestone: "Museum Site Selection", description: "Finalize location and begin architectural planning" },
    { year: "2027", milestone: "Groundbreaking", description: "Begin construction of Mithila Museum & Cultural Center" },
    { year: "2028", milestone: "Museum Opening", description: "Grand opening with inaugural exhibition and programming" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Building Tomorrow</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Future <span className="gradient-text-cultural">Initiatives</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Our ambitious vision for preserving and promoting Mithila heritage 
              for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Museum Vision */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-muted rounded-2xl overflow-hidden relative">
              <img 
                src={museumImage} 
                alt="Museum Concept" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-overlay flex items-end p-8">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider mb-2">Coming Soon</p>
                  <p className="text-white font-playfair text-2xl font-semibold">
                    The Mithila Museum & Cultural Center
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Initiatives */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-16">
            Major Initiatives
          </h2>
          
          <div className="space-y-12 max-w-5xl mx-auto">
            {initiatives.map((initiative, index) => (
              <div key={index} className="glass-card rounded-3xl p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-sindoor flex items-center justify-center">
                        <initiative.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-playfair text-2xl font-semibold text-foreground">
                          {initiative.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs rounded-full">
                            {initiative.status}
                          </span>
                          <span className="text-sm text-primary font-medium">
                            Goal: {initiative.target}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {initiative.description}
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {initiative.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-16">
            Our Roadmap
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {roadmap.map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0 border-l-2 border-secondary/30">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-secondary" />
                <div className="glass-card rounded-xl p-6">
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-3">
                    {item.year}
                  </span>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    {item.milestone}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gradient-peacock text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="font-playfair text-4xl font-bold mb-6">
              Help Us Build the Future
            </h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              These ambitious initiatives require significant resources and community support. 
              Your contribution, whether financial, in-kind, or through volunteering, 
              can help make these dreams a reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-background text-secondary hover:bg-background/90 gap-2">
                <Link to="/contact">
                  Donate Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10">
                <Link to="/contact">Become a Founding Partner</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Be the first to know about progress on our initiatives, fundraising campaigns, 
            and milestone achievements.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Subscribe to Updates</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Future;
