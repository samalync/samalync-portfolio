import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error", 
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Success!",
        description: "Your message has been sent successfully. We'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "support@samalync.com",
    },
    {
      icon: Phone, 
      title: "Call",
      value: "+250796110934",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kigali, Rwanda",
    },
    {
      icon: Clock,
      title: "Working Hours", 
      value: "8:00 AM - 5:00 PM",
      description: "Monday - Friday"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Get in touch with us and let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="card-shadow overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 min-h-[500px]">
                {/* Contact Form Section */}
                <div className="p-8 lg:p-12 bg-gradient-to-br from-background to-muted/30">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Send Message</h3>
                      <p className="text-muted-foreground">
                        Ready to start your project? Let's discuss how we can help bring your ideas to life.
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-foreground">
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                            className="border-border focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-foreground">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            required
                            className="border-border focus:ring-primary"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-foreground">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Project inquiry, partnership, etc."
                          className="border-border focus:ring-primary"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-foreground">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project or how we can help you..."
                          rows={5}
                          required
                          className="border-border focus:ring-primary resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                </div>

                {/* Contact Information Section */}
                <div className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-l border-border">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Get in Touch</h3>
                      <p className="text-muted-foreground">
                        We'd love to hear from you. Whether you have a project in mind or need consultation, reach out anytime.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-background/60 hover:bg-background/90 transition-all duration-300 hover:shadow-lg border border-border/50">
                          <div className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground text-sm">{info.title}</h4>
                            <p className="text-foreground font-medium text-base">{info.value}</p>
                            {info.description && (
                              <p className="text-xs text-muted-foreground">{info.description}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;