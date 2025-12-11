import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Music, Palette, Utensils, Users, Star, Camera } from 'lucide-react';
import festivalImage from '@/assets/festival-celebration.jpg';

const Festival = () => {
  const festivalHighlights = [
    {
      icon: Palette,
      title: "Art Exhibitions",
      description: "Curated displays of traditional and contemporary Mithila paintings from master artists."
    },
    {
      icon: Music,
      title: "Cultural Performances",
      description: "Traditional Maithili music, dance, and theatrical performances celebrating our heritage."
    },
    {
      icon: Utensils,
      title: "Authentic Cuisine",
      description: "Experience the distinctive flavors of Maithil cuisine prepared by traditional cooks."
    },
    {
      icon: Users,
      title: "Community Gathering",
      description: "A reunion of the Maithil diaspora and an opportunity for cultural exchange."
    }
  ];

  const pastFestivals = [
    {
      year: "2023",
      theme: "Bridging Generations",
      attendees: "2,500+",
      highlights: "First hybrid virtual-in-person event, youth art competition, documentary screening"
    },
    {
      year: "2022",
      theme: "Resilience & Renewal",
      attendees: "1,800+",
      highlights: "Post-pandemic celebration, artist relief fund launch, master artist retrospective"
    },
    {
      year: "2019",
      theme: "Art for Climate",
      attendees: "3,000+",
      highlights: "SDG-themed art exhibition, UN partnership announcement, cultural parade"
    },
    {
      year: "2018",
      theme: "Women of Mithila",
      attendees: "2,200+",
      highlights: "Female artist showcase, gender equality panel, traditional craft demonstrations"
    }
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
              <Calendar className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">Annual Celebration</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Mithila Festival <span className="gradient-text-primary">USA</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              The largest celebration of Maithil culture, art, and heritage in North America.
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
                src={festivalImage} 
                alt="Mithila Festival Celebration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-overlay flex items-end p-8">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider mb-2">Coming 2024</p>
                  <p className="text-white font-playfair text-2xl font-semibold">
                    Join us for a celebration of heritage, community, and artistic excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
                Experience Mithila Culture
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every year, the Mithila Festival USA brings together thousands of community members, 
                artists, scholars, and culture enthusiasts for a weekend of art, music, food, and 
                celebration. It's the premier event for experiencing the rich heritage of the Mithila region.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Annual Event</p>
                    <p className="text-muted-foreground text-sm">Typically held in late summer/early fall</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground text-sm">Rotating venues across major US cities</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Attendance</p>
                    <p className="text-muted-foreground text-sm">2,000-3,000 participants annually</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {festivalHighlights.map((item, index) => (
                <div key={index} className="glass-card rounded-xl p-6 text-center group hover:shadow-elevated transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-sindoor mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-playfair font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Festivals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-16">
            Festival History
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {pastFestivals.map((festival, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-gradient-sindoor flex items-center justify-center">
                    <span className="font-playfair text-2xl font-bold text-primary-foreground">
                      {festival.year}
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-1">
                    {festival.theme}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {festival.highlights}
                  </p>
                  <div className="flex items-center gap-2 text-primary">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">{festival.attendees} Attendees</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12 max-w-6xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-foreground">
              Festival Moments
            </h2>
            <Button asChild variant="outline" className="gap-2">
              <Link to="/gallery">
                <Camera className="w-4 h-4" />
                View All Photos
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className={`aspect-square bg-muted rounded-xl overflow-hidden relative ${item > 4 ? 'hidden md:block' : ''}`}>
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                  <p className="text-muted-foreground text-sm font-inter">
                    [Festival Photo {item}]
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
            <Star className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">Don't Miss Out</span>
          </div>
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
            Join Us at the Next Festival
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Stay updated on festival dates, volunteer opportunities, and ways to participate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Get Notified</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Become a Sponsor</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Festival;
