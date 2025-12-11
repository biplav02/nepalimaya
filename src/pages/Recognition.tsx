import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, Star, FileText, Building, Trophy, Medal, Scroll, Crown } from 'lucide-react';
import masterArtist from '@/assets/master-artist.jpg';

const Recognition = () => {
  const awards = [
    {
      year: "2023",
      title: "Cultural Heritage Preservation Award",
      organization: "National Endowment for the Arts",
      description: "Recognizing outstanding contribution to preserving and promoting traditional art forms."
    },
    {
      year: "2022",
      title: "Global Cultural Ambassador",
      organization: "UNESCO",
      description: "For innovative programs connecting traditional art to sustainable development goals."
    },
    {
      year: "2021",
      title: "Community Impact Award",
      organization: "Asian American Federation",
      description: "Honoring exemplary service to the Asian American community through cultural programming."
    },
    {
      year: "2020",
      title: "Excellence in Cultural Diplomacy",
      organization: "US Department of State",
      description: "Recognition for fostering international understanding through art and culture."
    },
    {
      year: "2019",
      title: "Non-Profit Excellence Award",
      organization: "Foundation Center",
      description: "For organizational excellence and impactful programming in the cultural sector."
    }
  ];

  const proclamations = [
    { entity: "New York City", type: "Mayoral Proclamation", year: "2023" },
    { entity: "State of New Jersey", type: "Governor's Citation", year: "2022" },
    { entity: "City of Los Angeles", type: "City Council Resolution", year: "2021" },
    { entity: "State of Texas", type: "Senate Resolution", year: "2020" },
    { entity: "US Congress", type: "Congressional Record Entry", year: "2019" },
    { entity: "City of Chicago", type: "Mayoral Proclamation", year: "2018" }
  ];

  const mediaFeatures = [
    { outlet: "The New York Times", topic: "Feature on Mithila Art Revival", year: "2023" },
    { outlet: "NPR", topic: "Radio documentary on diaspora artists", year: "2022" },
    { outlet: "BBC World Service", topic: "Art for SDGs program spotlight", year: "2022" },
    { outlet: "CNN", topic: "Festival coverage and interview", year: "2021" },
    { outlet: "National Geographic", topic: "Photo essay on traditional techniques", year: "2020" },
    { outlet: "The Washington Post", topic: "UN exhibition feature", year: "2019" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
              <Trophy className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">Celebrating Excellence</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Recognition & <span className="gradient-text-primary">Honors</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Awards, proclamations, and recognition from institutions around the world 
              for our work in cultural preservation and community empowerment.
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
                src={masterArtist} 
                alt="Master Artist Recognition" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-overlay flex items-end p-8">
                <p className="text-white font-playfair text-xl">
                  Honoring the master artists who keep Mithila traditions alive
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-16">
            Awards & Honors
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {awards.map((award, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 flex flex-col md:flex-row gap-6 group hover:shadow-elevated transition-all">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-gradient-haldi flex items-center justify-center">
                    <Award className="w-10 h-10 text-accent-foreground" />
                  </div>
                </div>
                <div>
                  <span className="text-sm text-primary font-medium">{award.year}</span>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-1">
                    {award.title}
                  </h3>
                  <p className="text-secondary font-medium text-sm mb-2">
                    {award.organization}
                  </p>
                  <p className="text-muted-foreground">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proclamations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            Government Proclamations
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {proclamations.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center group hover:bg-primary/5 transition-colors">
                <Scroll className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-playfair font-semibold text-foreground mb-1">
                  {item.entity}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {item.type}
                </p>
                <p className="text-xs text-primary">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            Media Coverage
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {mediaFeatures.map((item, index) => (
                <div key={index} className="glass-card rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.outlet}</p>
                    <p className="text-sm text-muted-foreground">{item.topic}</p>
                    <p className="text-xs text-primary mt-1">{item.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-sindoor text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Crown className="w-16 h-16 mx-auto mb-8 opacity-80" />
            <blockquote className="font-playfair text-2xl md:text-3xl italic mb-8 leading-relaxed">
              "The Mithila Center USA has done remarkable work in preserving an ancient art form 
              while making it relevant to contemporary global challenges. Their innovative approach 
              to cultural diplomacy serves as a model for heritage organizations worldwide."
            </blockquote>
            <p className="font-inter text-lg opacity-90">— Cultural Heritage Foundation</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
            Partner With an Award-Winning Organization
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Our track record of excellence makes us an ideal partner for cultural initiatives, 
            educational programs, and community engagement projects.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Explore Partnership</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recognition;
