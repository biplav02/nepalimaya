import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Camera, Video, Filter, X } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'traditional', label: 'Traditional Art' },
    { id: 'contemporary', label: 'Contemporary' },
    { id: 'sdg', label: 'Art for SDGs' },
    { id: 'events', label: 'Events' },
    { id: 'workshops', label: 'Workshops' }
  ];

  const galleryItems = [
    { id: 1, category: 'traditional', title: 'Kohbar - Wedding Art', type: 'image' },
    { id: 2, category: 'traditional', title: 'Fish & Lotus Motif', type: 'image' },
    { id: 3, category: 'sdg', title: 'Climate Action Art', type: 'image' },
    { id: 4, category: 'events', title: 'UN Exhibition 2023', type: 'image' },
    { id: 5, category: 'contemporary', title: 'Urban Mithila', type: 'image' },
    { id: 6, category: 'workshops', title: 'Kids Workshop', type: 'image' },
    { id: 7, category: 'traditional', title: 'Tree of Life', type: 'image' },
    { id: 8, category: 'sdg', title: 'Gender Equality', type: 'image' },
    { id: 9, category: 'events', title: 'Festival 2023', type: 'video' },
    { id: 10, category: 'traditional', title: 'Peacock Design', type: 'image' },
    { id: 11, category: 'contemporary', title: 'Digital Mithila', type: 'image' },
    { id: 12, category: 'workshops', title: 'Artist Demonstration', type: 'video' },
    { id: 13, category: 'sdg', title: 'Clean Water Theme', type: 'image' },
    { id: 14, category: 'events', title: 'World Tour London', type: 'image' },
    { id: 15, category: 'traditional', title: 'Sun & Moon', type: 'image' },
    { id: 16, category: 'events', title: 'UNESCO Presentation', type: 'image' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-12 rice-paper-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              <span className="gradient-text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our collection of traditional Mithila artwork, contemporary pieces, 
              and moments from our events and programs.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border sticky top-16 bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {filter.label}
              </button>
            ))}
            {activeFilter !== 'all' && (
              <button
                onClick={() => setActiveFilter('all')}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="aspect-square bg-muted rounded-xl overflow-hidden relative group cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                  {item.type === 'video' ? (
                    <Video className="w-12 h-12 text-muted-foreground/50" />
                  ) : (
                    <Camera className="w-12 h-12 text-muted-foreground/50" />
                  )}
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="font-playfair text-lg font-semibold text-background mb-2">
                    {item.title}
                  </h3>
                  <span className="text-xs text-background/80 uppercase tracking-wider">
                    {filters.find(f => f.id === item.category)?.label}
                  </span>
                  {item.type === 'video' && (
                    <div className="mt-3 px-3 py-1 bg-background/20 rounded-full text-xs text-background">
                      Video
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">No items found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            Featured Videos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "The Art of Mithila Painting", duration: "12:34" },
              { title: "Festival Highlights 2023", duration: "8:45" },
              { title: "Artist Interview: Master Painter", duration: "15:20" }
            ].map((video, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-playfair font-semibold text-foreground">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Your Art */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
            Share Your Mithila Art
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Are you a Mithila artist? Submit your work to be featured in our gallery 
            and connect with our global community.
          </p>
          <Button asChild size="lg">
            <a href="/contact">Submit Your Work</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
