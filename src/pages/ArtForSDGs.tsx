import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Target, Leaf, Users, GraduationCap, Heart, Sun, TreePine, Calendar, MapPin, Award } from 'lucide-react';
import sdgImage from '@/assets/sdg-mithila-art.jpg';

const ArtForSDGs = () => {
  const sdgEditions = [
    {
      year: "2022",
      sdg: "SDG 4 – Quality Education",
      theme: "Education Through Art",
      description: "The 2022 festival edition highlighted education through themed artworks and exhibitions, emphasizing access to learning and empowerment via art. Workshops and programs demonstrated how traditional art can be a powerful educational tool.",
      color: "bg-red-600"
    },
    {
      year: "2023",
      sdg: "SDG 5 – Gender Equality",
      theme: "Women's Voices in Art",
      description: "The fourth Mithila Festival USA 2023 focused on Gender Equality, with most participating artists being women. Artworks depicted women's voices, social justice, and the central role women have played as custodians of Mithila art for millennia.",
      color: "bg-orange-500"
    },
    {
      year: "2024",
      sdg: "SDG 13 – Climate Action",
      theme: "Art for Climate Awareness",
      description: "At the UN Headquarters and associated events in New York, artworks depicted drought, extreme weather, and community struggles, offering a powerful climate narrative through folk painting during the High-Level Political Forum.",
      color: "bg-green-600"
    },
    {
      year: "2025",
      sdg: "SDG 15 – Life on Land",
      theme: "Biodiversity & Environmental Stewardship",
      description: "The 6th Annual Mithila Festival USA and the 2025 Workshop, Exhibition & Award program are dedicated to Life on Land, linking children's workshops and community education with themes of biodiversity and environmental stewardship.",
      color: "bg-green-500"
    }
  ];

  const programComponents = [
    {
      icon: Target,
      title: "SDG-Themed Exhibitions",
      description: "Curated art exhibitions at UN Headquarters and partner venues featuring works that visually communicate specific SDG themes through traditional Mithila motifs."
    },
    {
      icon: GraduationCap,
      title: "Educational Workshops",
      description: "Hands-on art workshops for children and adults connecting traditional painting techniques with contemporary sustainability messages and SDG education."
    },
    {
      icon: Users,
      title: "Community Programming",
      description: "Panel discussions, expert talks, and cultural events that bring together artists, scholars, policymakers, and community members around SDG themes."
    },
    {
      icon: Award,
      title: "Artist Recognition",
      description: "Awards and recognition programs celebrating artists whose work addresses SDG themes, with special focus on women and youth artists."
    },
    {
      icon: Heart,
      title: "Art Auctions",
      description: "Fundraising auctions featuring SDG-themed artworks, with proceeds supporting artist communities and program expansion."
    },
    {
      icon: Leaf,
      title: "Environmental Awareness",
      description: "Programs specifically designed to raise awareness about climate action, life on land, and environmental sustainability through artistic expression."
    }
  ];

  const impactStats = [
    { value: "4+", label: "SDGs Addressed Annually" },
    { value: "100+", label: "Artists Engaged" },
    { value: "1,000+", label: "Workshop Participants" },
    { value: "5+", label: "Countries Reached" }
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
              <span className="text-sm font-medium text-primary">Flagship Initiative</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Art for <span className="gradient-text-primary">SDGs</span>
            </h1>
            <h2 className="font-playfair text-2xl text-muted-foreground mb-6">
              The Mithila Heritage
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A long-running art and culture program that uses the visual language of Mithila/Madhubani 
              painting to explore and communicate different United Nations Sustainable Development Goals 
              each year, positioning culture as a driver for global awareness and change.
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
                  at the United Nations and beyond
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
              "Art for SDGs: The Mithila Heritage" is the flagship initiative of Mithila Center USA. 
              It bridges millennia of artistic wisdom with today's most pressing global challenges. 
              Through workshops, exhibitions, and educational initiatives, we demonstrate how traditional 
              art forms can be powerful tools for communication, education, and social change.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {impactStats.map((stat, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 text-center">
                <div className="font-playfair text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Editions Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-6">
            SDG-Focused Editions
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Each year, we focus on specific Sustainable Development Goals, creating themed exhibitions, 
            workshops, and cultural programming that tie local community engagement to global SDG themes.
          </p>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {sdgEditions.map((edition, index) => (
              <div key={index} className="glass-card rounded-3xl p-8 md:p-10">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 ${edition.color} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                        {edition.year.slice(-2)}
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">{edition.year}</span>
                        <h3 className="font-playfair text-xl font-semibold text-foreground">
                          {edition.sdg}
                        </h3>
                      </div>
                    </div>
                    <h4 className="text-primary font-medium mb-3">{edition.theme}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {edition.description}
                    </p>
                  </div>
                  
                  {/* Edition Image Placeholder */}
                  <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                      <p className="text-muted-foreground text-sm font-inter text-center px-4">
                        [{edition.year} Exhibition Image]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-6">
            Program Components
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Each Art for SDGs edition includes comprehensive programming that connects 
            traditional art with contemporary sustainability education.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {programComponents.map((component, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 group hover:shadow-elevated transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-sindoor flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <component.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                  {component.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {component.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UN Partnership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                  UN Partnership & Global Reach
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Art for SDGs exhibitions have been presented at UN Headquarters in New York in 
                  collaboration with the Permanent Mission of Nepal and Consulate General of Nepal. 
                  These presentations during high-profile events like the High-Level Political Forum 
                  have positioned Mithila art as a unique vehicle for cultural diplomacy.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>Exhibited at UN Headquarters since 2019</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Featured at High-Level Political Forum 2024</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="w-5 h-5 text-primary" />
                    <span>Reaching global delegates and visitors</span>
                  </div>
                </div>
                <Button asChild className="mt-6">
                  <Link to="/un-engagement">Learn More About UN Engagement</Link>
                </Button>
              </div>
              
              {/* Image Placeholder */}
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="text-center p-8">
                    <Target className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                    <p className="text-muted-foreground font-inter">
                      [UN Exhibition Photo Placeholder]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            Art for SDGs Gallery
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              "Climate Action Artwork",
              "Gender Equality Theme",
              "Education Through Art",
              "Life on Land Motif",
              "Workshop Session",
              "Exhibition Opening",
              "Artist Demonstration",
              "Community Event"
            ].map((item, index) => (
              <div key={index} className="aspect-square bg-muted rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                  <p className="text-muted-foreground text-xs font-inter text-center px-2">
                    [{item}]
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
      <section className="py-20 bg-gradient-sindoor text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Sun className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="font-playfair text-3xl font-bold mb-6">
            Partner in Our Mission
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Bring Art for SDGs to your organization, school, or community. Together, we can use 
            ancient wisdom to build a sustainable future and communicate the UN's global goals 
            through the universal language of art.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
              <Link to="/contact">Collaborate With Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
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