import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Eye, Target, Heart, Lightbulb, Users, Globe } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      icon: Heart,
      title: "Cultural Authenticity",
      description: "Preserving the genuine traditions, techniques, and spiritual essence of Mithila art while respecting its origins."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Adapting ancient wisdom to address contemporary challenges including climate change, gender equality, and sustainable development."
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Supporting Maithil artists, especially women, through fair trade practices, skill development, and economic opportunities."
    },
    {
      icon: Globe,
      title: "Global Connection",
      description: "Building bridges between cultures through art diplomacy, international exhibitions, and collaborative projects."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Mission & <span className="gradient-text-primary">Vision</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Guided by ancient wisdom, driven by modern purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-sindoor rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative glass-card rounded-3xl p-10">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To preserve, promote, and practice the art, culture, and heritage of the Mithila region 
                  by creating platforms for cultural exchange, supporting artist communities, and using 
                  traditional art forms to address contemporary global challenges.
                </p>
                <ul className="space-y-3">
                  {[
                    "Document and digitize endangered art forms",
                    "Provide sustainable livelihoods for traditional artists",
                    "Educate global audiences about Maithil heritage",
                    "Connect art to UN Sustainable Development Goals"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-peacock rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative glass-card rounded-3xl p-10">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A world where Mithila art and culture are recognized as a vital part of global heritage, 
                  where traditional artists thrive economically and socially, and where ancient artistic 
                  wisdom contributes meaningfully to solving humanity's greatest challenges.
                </p>
                <ul className="space-y-3">
                  {[
                    "UNESCO recognition for Mithila art forms",
                    "A living museum dedicated to Maithil heritage",
                    "Self-sustaining artist cooperatives worldwide",
                    "Mithila art as a tool for global change"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30 mithila-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every initiative, partnership, and program we undertake.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 text-center group hover:shadow-elevated transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-haldi mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether through donations, volunteering, or spreading awareness, you can help preserve 
            this ancient heritage for future generations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="donate" size="lg">
              <Link to="/contact">Support Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/programs">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mission;
