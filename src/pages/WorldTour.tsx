import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe, MapPin, Calendar, Users, ExternalLink } from 'lucide-react';

const WorldTour = () => {
  const tourLocations = [
    {
      region: "North America",
      locations: [
        { city: "New York, USA", venue: "United Nations Headquarters", year: "2023" },
        { city: "Washington DC, USA", venue: "Smithsonian Institution", year: "2022" },
        { city: "Los Angeles, USA", venue: "LACMA", year: "2021" },
        { city: "Toronto, Canada", venue: "Royal Ontario Museum", year: "2020" }
      ]
    },
    {
      region: "Europe",
      locations: [
        { city: "London, UK", venue: "British Museum", year: "2023" },
        { city: "Paris, France", venue: "UNESCO Headquarters", year: "2022" },
        { city: "Geneva, Switzerland", venue: "UN Geneva", year: "2021" },
        { city: "Berlin, Germany", venue: "Ethnological Museum", year: "2019" }
      ]
    },
    {
      region: "Asia",
      locations: [
        { city: "Kathmandu, Nepal", venue: "National Art Gallery", year: "2023" },
        { city: "New Delhi, India", venue: "National Gallery of Modern Art", year: "2022" },
        { city: "Tokyo, Japan", venue: "Tokyo National Museum", year: "2019" },
        { city: "Singapore", venue: "Asian Civilisations Museum", year: "2018" }
      ]
    },
    {
      region: "Australia & Oceania",
      locations: [
        { city: "Sydney, Australia", venue: "Art Gallery of NSW", year: "2022" },
        { city: "Melbourne, Australia", venue: "National Gallery of Victoria", year: "2020" }
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: "Mithila Art: Voices of Women",
      location: "Vienna, Austria",
      venue: "UN Vienna",
      date: "March 2024",
      description: "Exhibition highlighting female Mithila artists and gender themes"
    },
    {
      title: "SDG Art Exhibition",
      location: "Nairobi, Kenya",
      venue: "UN Habitat",
      date: "June 2024",
      description: "Connecting Mithila art to African sustainable development initiatives"
    },
    {
      title: "Cultural Heritage Festival",
      location: "Dubai, UAE",
      venue: "Expo City Dubai",
      date: "October 2024",
      description: "Part of global cultural heritage celebration"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <Globe className="w-4 h-4 text-secondary animate-spin" style={{ animationDuration: '10s' }} />
              <span className="text-sm font-medium text-secondary">Global Reach</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              World <span className="gradient-text-cultural">Tour</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Bringing Mithila art and culture to museums, galleries, and cultural institutions 
              around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            {[
              { value: "50+", label: "Countries Visited" },
              { value: "100+", label: "Exhibitions" },
              { value: "500K+", label: "Visitors Reached" },
              { value: "6", label: "Continents" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World Map Placeholder */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            Our Global Footprint
          </h2>
          
          <div className="aspect-[2/1] bg-muted rounded-2xl overflow-hidden relative max-w-5xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/5 to-primary/5">
              <div className="text-center p-8">
                <Globe className="w-24 h-24 text-secondary/30 mx-auto mb-4" />
                <p className="text-muted-foreground font-inter">
                  [Interactive World Map Placeholder]
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Showing exhibition locations across 50+ countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Locations by Region */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-16">
            Exhibition History
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {tourLocations.map((region, index) => (
              <div key={index} className="glass-card rounded-2xl p-8">
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" />
                  {region.region}
                </h3>
                <div className="space-y-4">
                  {region.locations.map((loc, locIndex) => (
                    <div key={locIndex} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{loc.city}</p>
                        <p className="text-sm text-muted-foreground">{loc.venue}</p>
                        <p className="text-xs text-primary">{loc.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-sindoor text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">
            Upcoming Events
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 opacity-80" />
                  <span className="text-sm opacity-80">{event.date}</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  {event.title}
                </h3>
                <p className="text-sm opacity-80 mb-1">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  {event.location}
                </p>
                <p className="text-sm opacity-70 mb-4">{event.venue}</p>
                <p className="text-sm opacity-90">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            Tour Highlights
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-[4/3] bg-muted rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/5 to-primary/5">
                  <p className="text-muted-foreground text-sm font-inter">
                    [Exhibition Photo {item}]
                  </p>
                </div>
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-background" />
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
            Host an Exhibition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Interested in bringing Mithila art to your museum, gallery, or cultural institution? 
            We'd love to discuss collaboration opportunities.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorldTour;
