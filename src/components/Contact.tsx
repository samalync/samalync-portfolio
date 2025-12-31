import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin, Clock } from "lucide-react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

type ContactProps = {
  initialSubject?: string;
};

const Contact: React.FC<ContactProps> = ({ initialSubject = "" }) => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: initialSubject || "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update subject when a service is selected
  useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Map 'title' back to 'subject' for form state
    const fieldName = name === 'title' ? 'subject' : name;
    setFormData(prev => ({ ...prev, [fieldName]: value }));
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
      // Initialize EmailJS
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      
      // Use sendForm method which is more reliable
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID, 
        EMAILJS_CONFIG.TEMPLATE_ID, 
        formRef.current!,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      toast({
        title: "Message Sent!",
        description: "Your message has been sent successfully. We'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      // Minimal error logging without exposing sensitive details
      console.error('Failed to send message');
      
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
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
    <section id="contact" className="py-20 bg-white relative overflow-hidden">


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/20 backdrop-blur-sm">
            <span className="text-sm font-medium text-blue-600 tracking-wide">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-800 bg-clip-text text-transparent leading-tight">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to start your project? Get in touch with us and let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Card className="backdrop-blur-xl bg-white/70 border-0 shadow-2xl overflow-hidden rounded-3xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 min-h-[600px]">
                {/* Contact Form Section */}
                <div className="p-8 lg:p-12 bg-gradient-to-br from-white/50 to-blue-50/30 relative">
                  {/* Floating particles */}
                  <div className="absolute top-8 right-8 w-3 h-3 bg-blue-400/20 rounded-full animate-ping"></div>
                  <div className="absolute bottom-8 left-8 w-2 h-2 bg-cyan-400/20 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>

                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">Send Message</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Ready to start your project? Let's discuss how we can help bring your ideas to life.
                      </p>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      {/* Hidden inputs for EmailJS template variables */}
                      <input type="hidden" name="name" value={formData.name} />
                      <input type="hidden" name="email" value={formData.email} />
                      <input type="hidden" name="title" value={formData.subject} />
                      <input type="hidden" name="message" value={formData.message} />

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                            className="h-12 bg-white/70 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 rounded-xl"
                          />
                        </div>
                        <div className="space-y-3">
                          <label htmlFor="email" className="text-sm font-semibold text-gray-700">
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
                            className="h-12 bg-white/70 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 rounded-xl"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="title"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Project inquiry, partnership, etc."
                          className="h-12 bg-white/70 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 rounded-xl"
                        />
                      </div>

                      <div className="space-y-3">
                        <label htmlFor="message" className="text-sm font-semibold text-gray-700">
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
                          className="bg-white/70 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 resize-none rounded-xl"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-0.5"
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                          <Send className={`h-5 w-5 transition-transform duration-300 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                        </span>
                      </Button>
                    </form>
                  </div>
                </div>

                {/* Contact Information Section */}
                <div className="p-8 lg:p-12 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 border-l border-gray-200/50 relative">
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5"></div>

                  <div className="space-y-8 relative z-10">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-gray-900">Get in Touch</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We'd love to hear from you. Whether you have a project in mind or need consultation, reach out anytime.
                      </p>
                    </div>

                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="group flex items-center space-x-6 p-6 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-500 hover:shadow-lg hover:scale-[1.02] border border-gray-200/50 hover:border-blue-200/50">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <info.icon className="h-7 w-7 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 text-base mb-1">{info.title}</h4>
                            <p className="text-gray-700 font-semibold text-lg">{info.value}</p>
                            {info.description && (
                              <p className="text-sm text-gray-500 font-medium">{info.description}</p>
                            )}
                          </div>
                          {/* Hover indicator */}
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      ))}
                    </div>

                    {/* Additional visual element */}
                    <div className="pt-8 border-t border-gray-200/50">
                      <p className="text-sm text-gray-500 italic">
                        "We typically respond within 24 hours"
                      </p>
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
