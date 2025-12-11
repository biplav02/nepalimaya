import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Camera, Video, Filter, X, Play, Image, Calendar, MapPin } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'traditional', label: 'Traditional Art' },
    { id: 'sdg', label: 'Art for SDGs' },
    { id: 'festival', label: 'Festival' },
    { id: 'un', label: 'UN Exhibitions' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'worldtour', label: 'World Tour' }
  ];

  const galleryItems = [
    // Traditional Art
    { id: 1, category: 'traditional', title: 'Kohbar - Traditional Wedding Art', description: 'Sacred wedding chamber art depicting fertility and prosperity symbols', type: 'image' },
    { id: 2, category: 'traditional', title: 'Fish & Lotus Motif', description: 'Classic Mithila symbols representing fertility and purity', type: 'image' },
    { id: 3, category: 'traditional', title: 'Peacock Design', description: 'Traditional peacock motifs symbolizing beauty and grace', type: 'image' },
    { id: 4, category: 'traditional', title: 'Tree of Life', description: 'Sacred tree representing cosmic connection and life cycles', type: 'image' },
    { id: 5, category: 'traditional', title: 'Sun & Moon Symbolism', description: 'Celestial motifs representing cosmic harmony', type: 'image' },
    
    // Art for SDGs
    { id: 6, category: 'sdg', title: 'Climate Action Art', description: 'SDG 13 themed artwork depicting environmental awareness', type: 'image' },
    { id: 7, category: 'sdg', title: 'Gender Equality Theme', description: 'SDG 5 artwork celebrating women artists and empowerment', type: 'image' },
    { id: 8, category: 'sdg', title: 'Quality Education', description: 'SDG 4 themed piece promoting learning through art', type: 'image' },
    { id: 9, category: 'sdg', title: 'Life on Land', description: 'SDG 15 artwork featuring biodiversity and conservation', type: 'image' },
    { id: 10, category: 'sdg', title: 'Clean Water Theme', description: 'SDG 6 artwork highlighting water conservation', type: 'image' },
    
    // Festival
    { id: 11, category: 'festival', title: 'Mithila Festival USA 2024', description: 'Highlights from the 5th Annual Festival', type: 'image' },
    { id: 12, category: 'festival', title: 'Cultural Performance', description: 'Traditional Maithili music and dance', type: 'image' },
    { id: 13, category: 'festival', title: 'Taste of Mithila', description: 'Culinary showcase featuring authentic cuisine', type: 'image' },
    { id: 14, category: 'festival', title: 'Community Gathering', description: 'Diaspora celebration at Diversity Plaza', type: 'image' },
    { id: 15, category: 'festival', title: 'Festival 2023 Highlights', description: 'Gender Equality themed celebration', type: 'video' },
    
    // UN Exhibitions
    { id: 16, category: 'un', title: 'UN HQ Exhibition 2024', description: 'High-Level Political Forum exhibition', type: 'image' },
    { id: 17, category: 'un', title: 'Inaugural UN Exhibition 2019', description: 'First Art for SDGs exhibition at UN', type: 'image' },
    { id: 18, category: 'un', title: 'CB-01 Curved Wall Display', description: 'Climate Action themed exhibition', type: 'image' },
    { id: 19, category: 'un', title: 'Diplomatic Reception', description: 'VIP gathering at UN Headquarters', type: 'image' },
    
    // Workshops
    { id: 20, category: 'workshops', title: 'Kids Art Workshop', description: 'Children learning Mithila painting techniques', type: 'image' },
    { id: 21, category: 'workshops', title: 'Master Artist Demonstration', description: 'Traditional technique showcase', type: 'video' },
    { id: 22, category: 'workshops', title: 'School Program', description: 'Educational outreach in NYC schools', type: 'image' },
    { id: 23, category: 'workshops', title: 'Community Workshop', description: 'Adult learning session', type: 'image' },
    
    // World Tour
    { id: 24, category: 'worldtour', title: 'Master Artist S.C. Suman', description: 'Featured artist for World Tour 2025', type: 'image' },
    { id: 25, category: 'worldtour', title: 'Exhibition Setup', description: 'Preparing for international tour', type: 'image' },
    { id: 26, category: 'worldtour', title: 'Global Audience', description: 'Visitors engaging with Mithila art', type: 'image' }
  ];

  const featuredVideos = [
    { 
      title: "The Art of Mithila Painting", 
      description: "Documentary exploring the history and techniques of traditional Mithila painting",
      duration: "15:30",
      category: "Documentary"
    },
    { 
      title: "Mithila Festival USA Highlights 2024", 
      description: "Compilation of moments from the 5th Annual Festival celebration",
      duration: "8:45",
      category: "Festival"
    },
    { 
      title: "Master Artist Interview: S.C. Suman", 
      description: "Conversation with renowned artist about tradition and innovation",
      duration: "12:20",
      category: "Interview"
    },
    { 
      title: "Art for SDGs at the United Nations", 
      description: "Coverage of the 2024 exhibition at UN Headquarters",
      duration: "10:15",
      category: "Exhibition"
    },
    { 
      title: "Kids Workshop: Learning Mithila Art", 
      description: "Children discovering traditional painting techniques",
      duration: "6:30",
      category: "Workshop"
    },
    { 
      title: "Congressional Recognition Ceremony", 
      description: "Congresswoman Grace Meng honors Mithila Festival USA",
      duration: "5:45",
      category: "Recognition"
    }
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
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our collection of traditional Mithila artwork, SDG-themed pieces, 
              festival moments, UN exhibitions, and program highlights documenting our 
              journey of cultural preservation and global impact.
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

      {/* Photo Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-playfair text-2xl font-bold text-foreground">
              {activeFilter === 'all' ? 'All Media' : filters.find(f => f.id === activeFilter)?.label}
              <span className="text-muted-foreground text-lg ml-2">({filteredItems.length} items)</span>
            </h2>
          </div>
          
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
                    <Image className="w-12 h-12 text-muted-foreground/50" />
                  )}
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="font-playfair text-sm font-semibold text-background mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-background/70 mb-2 line-clamp-2">
                    {item.description}
                  </p>
                  <span className="text-xs text-background/60 uppercase tracking-wider">
                    {filters.find(f => f.id === item.category)?.label}
                  </span>
                  {item.type === 'video' && (
                    <div className="mt-2 px-3 py-1 bg-background/20 rounded-full flex items-center gap-1">
                      <Play className="w-3 h-3 text-background" />
                      <span className="text-xs text-background">Video</span>
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

      {/* Featured Videos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-6">
            Featured Videos
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Documentaries, event coverage, and educational content showcasing 
            Mithila art and our programs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredVideos.map((video, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-foreground/80 rounded text-xs text-background">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {video.category}
                  </span>
                  <h3 className="font-playfair font-semibold text-foreground mt-1 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Collections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            Photo Collections
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "UN Headquarters Exhibitions", count: "45+ photos", year: "2019-2024" },
              { title: "Mithila Festival USA", count: "200+ photos", year: "2019-2024" },
              { title: "Kids Workshops", count: "80+ photos", year: "Various" },
              { title: "Traditional Artworks", count: "150+ pieces", year: "Collection" },
              { title: "World Tour 2025", count: "Coming Soon", year: "2025" },
              { title: "Recognition & Awards", count: "30+ photos", year: "Various" }
            ].map((collection, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden group cursor-pointer">
                <div className="aspect-[4/3] bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                    <Camera className="w-12 h-12 text-muted-foreground/30" />
                  </div>
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-background font-medium">View Collection</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-playfair font-semibold text-foreground mb-1">
                    {collection.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Image className="w-4 h-4" />
                      {collection.count}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {collection.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Your Art */}
      <section className="py-20 bg-gradient-sindoor text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Camera className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="font-playfair text-3xl font-bold mb-6">
            Share Your Mithila Art
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Are you a Mithila artist? Submit your work to be featured in our gallery 
            and connect with our global community. We welcome traditional and contemporary 
            pieces, especially those aligned with SDG themes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
              <Link to="/contact">Submit Your Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/programs">Join Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;