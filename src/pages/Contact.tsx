import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Heart, Users, Building, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@mithilacenter.org",
      link: "mailto:info@mithilacenter.org"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Cultural Center Drive, New York, NY 10001",
      link: "#"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 9AM-5PM EST",
      link: "#"
    }
  ];

  const engagementOptions = [
    {
      icon: Heart,
      title: "Donate",
      description: "Support our mission with a tax-deductible donation. Every contribution helps preserve this ancient heritage."
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers for events, workshops, and community outreach programs."
    },
    {
      icon: Building,
      title: "Partner",
      description: "Explore institutional partnerships for exhibitions, educational programs, and cultural exchanges."
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
              Get <span className="gradient-text-primary">Involved</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect with us to learn more, support our mission, or explore collaboration opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="text-muted-foreground">{item.details}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <span className="text-xs font-medium">{platform[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="py-20 bg-muted/30 mithila-pattern">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            Ways to Engage
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {engagementOptions.map((option, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 text-center group hover:shadow-elevated transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-sindoor mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <option.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  {option.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="aspect-[21/9] bg-muted rounded-2xl overflow-hidden relative max-w-6xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/5 to-primary/5">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground font-inter">
                  [Google Maps Integration Placeholder]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-sindoor text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-playfair text-3xl font-bold mb-4">
              Stay Connected
            </h2>
            <p className="opacity-90 mb-8">
              Subscribe to our newsletter for updates on events, exhibitions, and ways to get involved.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
