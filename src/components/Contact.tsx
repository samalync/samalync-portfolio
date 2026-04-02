import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin, Clock, type LucideIcon } from "lucide-react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

type ContactProps = {
  initialSubject?: string;
};

type ContactInfoItem = {
  icon: LucideIcon;
  title: string;
  value: string;
  description?: string;
};

const contactInfo: ContactInfoItem[] = [
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
    description: "Monday - Friday",
  },
];

const ContactInfoPanel = memo(() => (
  <div className="relative border-l border-slate-200 bg-slate-50 p-8 lg:p-12">
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-gray-900">Get in Touch</h3>
        <p className="text-gray-600 leading-relaxed">
          We'd love to hear from you. Whether you have a project in mind or need consultation, reach out anytime.
        </p>
      </div>

      <div className="space-y-5">
        {contactInfo.map((info) => (
          <div
            key={info.title}
            className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-200 hover:border-blue-200"
          >
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15">
              <info.icon className="h-7 w-7 text-blue-600" />
            </div>
            <div className="flex-1">
              <h4 className="mb-1 text-base font-bold text-gray-900">{info.title}</h4>
              <p className="text-lg font-semibold text-gray-700">{info.value}</p>
              {info.description && (
                <p className="text-sm font-medium text-gray-500">{info.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200 pt-8">
        <p className="text-sm italic text-gray-500">
          "We typically respond within 24 hours"
        </p>
      </div>
    </div>
  </div>
));

ContactInfoPanel.displayName = "ContactInfoPanel";

const Contact: React.FC<ContactProps> = memo(({ initialSubject = "" }) => {
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

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Map 'title' back to 'subject' for form state
    const fieldName = name === 'title' ? 'subject' : name;
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
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
  }, [formData.email, formData.message, formData.name, toast]);

  return (
    <section id="contact" className="performance-section py-20 bg-white relative overflow-hidden">


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
          <Card className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 min-h-[600px]">
                {/* Contact Form Section */}
                <div className="relative bg-white p-8 lg:p-12">
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
                            className="h-12 rounded-xl border-slate-200 bg-slate-50 transition-colors duration-200 focus:border-blue-500 focus:ring-blue-500/20"
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
                            className="h-12 rounded-xl border-slate-200 bg-slate-50 transition-colors duration-200 focus:border-blue-500 focus:ring-blue-500/20"
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
                          className="h-12 rounded-xl border-slate-200 bg-slate-50 transition-colors duration-200 focus:border-blue-500 focus:ring-blue-500/20"
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
                          className="resize-none rounded-xl border-slate-200 bg-slate-50 transition-colors duration-200 focus:border-blue-500 focus:ring-blue-500/20"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-14 w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold shadow-md transition-colors duration-200 hover:from-blue-500 hover:to-cyan-500 hover:shadow-lg"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                          <Send className={`h-5 w-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                        </span>
                      </Button>
                    </form>
                  </div>
                </div>

                {/* Contact Information Section */}
                <ContactInfoPanel />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
