import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar, Users, Target } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "Ancient Origins",
      title: "Birth of Mithila Art",
      description: "Mithila painting tradition begins in the ancient kingdom of Mithila, spanning present-day Nepal and Bihar, India. Legend traces it to King Janaka's court during the wedding of Sita and Rama."
    },
    {
      year: "1934",
      title: "Global Discovery",
      description: "Following a major earthquake, British colonial officer William G. Archer discovers Mithila paintings on exposed walls, bringing international attention to this art form."
    },
    {
      year: "2003",
      title: "Foundation Established",
      description: "Mithila Center USA is founded to preserve, promote, and practice Maithil arts and culture in America, creating a bridge between diaspora communities and their heritage."
    },
    {
      year: "Present",
      title: "Global Impact",
      description: "Today, the center works with UN agencies, diplomatic missions, and educational institutions worldwide, using Mithila art as a tool for sustainable development and cultural diplomacy."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 rice-paper-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="gradient-text-primary">Mithila Center USA</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A non-profit organization dedicated to preserving the rich cultural heritage of the Mithila region 
              while making it relevant for contemporary global challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Image Placeholder + Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-inter">
                    [Team/Community Image Placeholder]
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Mithila Center USA was established by a passionate group of Maithil diaspora members 
                  who recognized the urgent need to preserve their ancestral art and culture in a rapidly 
                  globalizing world.
                </p>
                <p>
                  Mithila art, also known as Madhubani painting, is one of the oldest art forms in the world, 
                  with a history spanning over three millennia. Traditionally created by women on the mud walls 
                  of their homes, these paintings depict mythology, nature, and daily life using natural dyes 
                  and distinctive geometric patterns.
                </p>
                <p>
                  Today, we work to ensure this living heritage not only survives but thrives, adapting to 
                  contemporary contexts while maintaining its authentic roots.
                </p>
              </div>
              <Button asChild className="mt-6 gap-2">
                <Link to="/mission">
                  Our Mission & Vision
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30 mithila-pattern">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-16">
            Our Journey Through Time
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0 border-l-2 border-primary/30">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
                <div className="glass-card rounded-xl p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                    {item.year}
                  </span>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    {item.title}
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

      {/* Key Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">
                Based in the United States with cultural connections spanning Nepal, India, and the global Maithil diaspora.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center">
              <Calendar className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold mb-2">Established</h3>
              <p className="text-muted-foreground">
                Founded in 2003 as a 501(c)(3) non-profit organization dedicated to cultural preservation.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center">
              <Target className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold mb-2">Focus</h3>
              <p className="text-muted-foreground">
                Art preservation, cultural education, sustainable development, and community empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
