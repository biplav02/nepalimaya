import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Target, Leaf, Users, GraduationCap, Heart, Droplets, Sun, Building2, Scale, TreePine, Fish, Handshake } from 'lucide-react';
import sdgImage from '@/assets/sdg-mithila-art.jpg';

const ArtForSDGs = () => {
  const sdgConnections = [
    {
      number: 1,
      title: "No Poverty",
      icon: Heart,
      description: "Empowering rural artists with sustainable income through fair trade art sales and cooperative models.",
      color: "bg-red-500"
    },
    {
      number: 4,
      title: "Quality Education",
      icon: GraduationCap,
      description: "Art-based educational programs teaching environmental awareness, cultural heritage, and creative skills.",
      color: "bg-red-600"
    },
    {
      number: 5,
      title: "Gender Equality",
      icon: Users,
      description: "Celebrating and supporting women artists who have been the primary custodians of this tradition for millennia.",
      color: "bg-orange-500"
    },
    {
      number: 6,
      title: "Clean Water",
      icon: Droplets,
      description: "Awareness campaigns using traditional water imagery in Mithila art to promote water conservation.",
      color: "bg-blue-500"
    },
    {
      number: 7,
      title: "Clean Energy",
      icon: Sun,
      description: "Artistic depictions promoting solar and renewable energy adoption in rural communities.",
      color: "bg-yellow-500"
    },
    {
      number: 11,
      title: "Sustainable Cities",
      icon: Building2,
      description: "Public art installations bringing cultural heritage to urban spaces while promoting sustainability.",
      color: "bg-orange-400"
    },
    {
      number: 13,
      title: "Climate Action",
      icon: Leaf,
      description: "Environmental themes in contemporary Mithila art addressing deforestation, pollution, and climate change.",
      color: "bg-green-600"
    },
    {
      number: 14,
      title: "Life Below Water",
      icon: Fish,
      description: "Traditional fish motifs reimagined to raise awareness about aquatic ecosystem preservation.",
      color: "bg-blue-600"
    },
    {
      number: 15,
      title: "Life on Land",
      icon: TreePine,
      description: "Tree of life and nature imagery promoting biodiversity and forest conservation.",
      color: "bg-green-500"
    },
    {
      number: 16,
      title: "Peace & Justice",
      icon: Scale,
      description: "Art as a medium for promoting peace, understanding, and social cohesion across cultures.",
      color: "bg-blue-700"
    },
    {
      number: 17,
      title: "Partnerships",
      icon: Handshake,
      description: "Building global networks of artists, institutions, and communities for collective impact.",
      color: "bg-blue-800"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Flagship Program</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Art for <span className="gradient-text-primary">SDGs</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Harnessing the power of 3,000-year-old artistic traditions to address the 
              United Nations Sustainable Development Goals and create meaningful global change.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-muted rounded-2xl overflow-hidden relative">
              <img 
                src={sdgImage} 
                alt="Mithila Art for SDGs" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-overlay flex items-end p-8">
                <p className="text-white font-inter text-lg max-w-2xl">
                  Traditional Mithila motifs reimagined to communicate contemporary sustainability messages
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Ancient Art, Modern Impact
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Art for SDGs program bridges millennia of artistic wisdom with today's most pressing 
              global challenges. Through workshops, exhibitions, and educational initiatives, we demonstrate 
              how traditional art forms can be powerful tools for communication, education, and social change.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-playfair text-2xl font-bold text-primary">11</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">SDGs Addressed</h3>
              <p className="text-muted-foreground text-sm">
                Direct programmatic connection to eleven of the seventeen UN goals
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-playfair text-2xl font-bold text-secondary">500+</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Artists Engaged</h3>
              <p className="text-muted-foreground text-sm">
                Traditional artists creating SDG-themed works across Nepal and India
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <span className="font-playfair text-2xl font-bold text-accent-foreground">25+</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Countries Reached</h3>
              <p className="text-muted-foreground text-sm">
                Global exhibitions and educational programs spanning five continents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Connections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-16">
            How Mithila Art Connects to the SDGs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sdgConnections.map((sdg, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 group hover:shadow-elevated transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${sdg.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                    {sdg.number}
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Goal {sdg.number}</span>
                    <h3 className="font-playfair font-semibold text-foreground">
                      {sdg.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {sdg.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Placeholder */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            Art for SDGs Gallery
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-muted rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                  <p className="text-muted-foreground text-sm font-inter">
                    [SDG Artwork {item}]
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
            Partner in Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Bring Art for SDGs to your organization, school, or community. Together, we can use 
            ancient wisdom to build a sustainable future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Collaborate With Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/programs">Explore Workshops</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArtForSDGs;
