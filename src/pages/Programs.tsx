import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Palette, GraduationCap, Users, Heart, Building, Video, BookOpen, Handshake } from 'lucide-react';
import kidsImage from '@/assets/kids-workshop-illustration.jpg';

const Programs = () => {
  const programs = [
    {
      icon: Palette,
      title: "Art Workshops",
      description: "Hands-on sessions teaching traditional Mithila painting techniques using natural materials and authentic methods passed down through generations.",
      audience: "All ages",
      duration: "2-4 hours",
      format: "In-person & Virtual"
    },
    {
      icon: GraduationCap,
      title: "Educational Programs",
      description: "Curriculum-aligned programs for schools bringing Mithila art into classrooms, connecting art to history, geography, and sustainability.",
      audience: "K-12 Students",
      duration: "Multi-session",
      format: "School visits"
    },
    {
      icon: Users,
      title: "Community Workshops",
      description: "Regular gatherings for the Maithil diaspora and art enthusiasts to learn, create, and connect over shared cultural heritage.",
      audience: "Community members",
      duration: "Monthly",
      format: "In-person"
    },
    {
      icon: Heart,
      title: "Artist Mentorship",
      description: "Connecting master artists from Mithila with emerging artists in the diaspora to preserve traditional knowledge and techniques.",
      audience: "Aspiring artists",
      duration: "3-6 months",
      format: "Hybrid"
    },
    {
      icon: Building,
      title: "Corporate Programs",
      description: "Team-building workshops and cultural experiences for organizations seeking unique, meaningful employee engagement activities.",
      audience: "Businesses",
      duration: "Half-day to full-day",
      format: "On-site or virtual"
    },
    {
      icon: Video,
      title: "Virtual Learning",
      description: "Online courses and video tutorials making Mithila art education accessible to learners anywhere in the world.",
      audience: "Global learners",
      duration: "Self-paced",
      format: "Online platform"
    }
  ];

  const communityInitiatives = [
    {
      title: "Artist Cooperative",
      description: "Fair trade marketplace connecting rural artists directly with global buyers, ensuring sustainable livelihoods."
    },
    {
      title: "Cultural Archive",
      description: "Digital preservation of traditional designs, techniques, and oral histories from master artists."
    },
    {
      title: "Youth Ambassador Program",
      description: "Training young Maithils to become cultural ambassadors in their schools and communities."
    },
    {
      title: "Artist Relief Fund",
      description: "Emergency support for traditional artists facing financial hardship or natural disasters."
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
              Programs & <span className="gradient-text-primary">Community</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Educational workshops, community initiatives, and programs connecting people 
              with the living tradition of Mithila art.
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
                src={kidsImage} 
                alt="Kids Workshop" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-overlay flex items-end p-8">
                <p className="text-white font-playfair text-2xl font-semibold">
                  Inspiring the next generation of Mithila artists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-16">
            Our Programs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 group hover:shadow-elevated transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-sindoor flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <program.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Audience:</span>
                    <span className="text-foreground font-medium">{program.audience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="text-foreground font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Format:</span>
                    <span className="text-foreground font-medium">{program.format}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="py-20 bg-muted/30 mithila-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
                Community Initiatives
              </h2>
              <p className="text-lg text-muted-foreground">
                Beyond workshops, we're building sustainable systems to support artists and preserve heritage.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {communityInitiatives.map((initiative, index) => (
                <div key={index} className="glass-card rounded-xl p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                      {initiative.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {initiative.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            What Participants Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((item) => (
              <div key={item} className="glass-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4" />
                <p className="text-muted-foreground italic mb-4">
                  "[Testimonial placeholder - Participant quote about their experience with our programs]"
                </p>
                <p className="font-semibold text-foreground">Participant Name</p>
                <p className="text-sm text-muted-foreground">Program attended</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-peacock text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="font-playfair text-3xl font-bold mb-6">
            Start Your Journey
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Whether you're looking to learn Mithila painting, bring a program to your school, 
            or engage your organization, we'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-background text-secondary hover:bg-background/90">
              <Link to="/contact">Request a Program</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10">
              <Link to="/contact">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
