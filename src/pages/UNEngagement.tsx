import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe, Building, Award, Users, FileText, Calendar } from 'lucide-react';

const UNEngagement = () => {
  const engagements = [
    {
      title: "United Nations Headquarters",
      location: "New York, USA",
      description: "Regular exhibitions and presentations at UN headquarters, showcasing Mithila art's connection to sustainable development goals.",
      year: "2015-Present"
    },
    {
      title: "UNESCO Intangible Heritage",
      location: "Paris, France",
      description: "Advocacy for recognition of Mithila art as intangible cultural heritage of humanity.",
      year: "Ongoing"
    },
    {
      title: "UN Women Partnerships",
      location: "Global",
      description: "Collaboration highlighting women artists and traditional art as a tool for gender equality and economic empowerment.",
      year: "2018-Present"
    },
    {
      title: "ECOSOC Special Consultative Status",
      location: "International",
      description: "Official recognition enabling participation in UN deliberations on cultural and development matters.",
      year: "2020"
    }
  ];

  const diplomaticMissions = [
    { country: "Nepal", type: "Embassy Exhibitions" },
    { country: "India", type: "Cultural Exchange Programs" },
    { country: "United States", type: "State Department Events" },
    { country: "Switzerland", type: "UN Geneva Presentations" },
    { country: "Austria", type: "UN Vienna Collaborations" },
    { country: "France", type: "UNESCO Advocacy" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <Globe className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">International Recognition</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              UN & Diplomatic <span className="gradient-text-cultural">Engagement</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Bringing Mithila art to the world's most important platforms for cultural diplomacy 
              and sustainable development dialogue.
            </p>
          </div>
        </div>
      </section>

      {/* Image Placeholder */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="aspect-[21/9] bg-muted rounded-2xl overflow-hidden relative max-w-6xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/10 to-primary/10">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Building className="w-12 h-12 text-secondary" />
                </div>
                <p className="text-muted-foreground font-inter">
                  [UN Headquarters Exhibition Image Placeholder]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Engagements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-16">
            Key International Engagements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {engagements.map((item, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 group hover:shadow-elevated transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                    {item.year}
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {item.location}
                </p>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diplomatic Reach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
                Diplomatic Reach
              </h2>
              <p className="text-lg text-muted-foreground">
                Our partnerships span embassies, consulates, and international organizations worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {diplomaticMissions.map((mission, index) => (
                <div key={index} className="glass-card rounded-xl p-6 text-center group hover:bg-primary/5 transition-colors">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-playfair font-semibold text-foreground">
                    {mission.country}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {mission.type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-peacock text-secondary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">
            International Achievements
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            {[
              { icon: Building, value: "6", label: "UN Agency Partnerships" },
              { icon: FileText, value: "15+", label: "Official Presentations" },
              { icon: Award, value: "3", label: "International Awards" },
              { icon: Users, value: "50+", label: "Countries Represented" }
            ].map((stat, index) => (
              <div key={index}>
                <stat.icon className="w-10 h-10 mx-auto mb-3 opacity-80" />
                <div className="font-playfair text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
            Partner With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Interested in bringing Mithila art to your institution or diplomatic event? 
            Let's discuss collaboration opportunities.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UNEngagement;
