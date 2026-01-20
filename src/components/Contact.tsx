import { CheckCircle, Github, Linkedin, Loader2, Mail, MapPin, Send, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { set } from "date-fns";
// import { motion, Variants } from "framer-motion";

const Contact = () => {
  // email logic
  const [isOpen, setIsOpen] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "" }); 

    // form validation and submission logic here
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    // Simple email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    if (!formData.email.trim()){
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // The actual Submission Logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      // Connect to your Render backend 'https://portfolio-contact-api-8iln.onrender.com/api/contact/' or local host 'http://127.0.0.1:8000/api/contact/'
      const response = await fetch(`${"https://portfolio-contact-api-8iln.onrender.com/api/contact/"}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle Success
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        
        // Close modal after showing success for 3 seconds
        setTimeout(() => {
          setIsOpen(false);
          setShowSuccess(false);
        }, 3000);
      } else {
        // Handle Django Validation Errors (e.g. invalid email)
        const serverErrors: Record<string, string> = {};
        Object.keys(data).forEach(key => {
          serverErrors[key] = Array.isArray(data[key]) ? data[key][0] : data[key];
        });
        setErrors(serverErrors);
      }
    } catch (error) {
      // Handle Network/CORS errors
      setErrors({ submit: "The server is currently unreachable. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };

    const openModal = () => {
      setIsOpen(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setShowSuccess(false);
    };

    // close modal
    const closeModal = () => {
      setIsOpen(false);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setShowSuccess(false);
    };


  return (
    <section id="contact" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" /> */}
      
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '700ms'}} />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full" style={{animation: 'float 3s ease-in-out infinite'}} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/30 rounded-full" style={{animation: 'float 3s ease-in-out infinite', animationDelay: '300ms'}} />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full" style={{animation: 'float 3s ease-in-out infinite', animationDelay: '500ms'}} />
      </div>

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to new opportunities, collaborations, or just a friendly chat about backend development!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:Udotongpeace@gmail.com"
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-1">Email</h3>
              <p className="text-muted-foreground text-sm">Udotongpeace@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/peaceudotong/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-1">LinkedIn</h3>
              <p className="text-muted-foreground text-sm">in/peaceudotong</p>
            </a>

            <div className="p-6 rounded-2xl bg-gradient-card border border-border text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-1">Location</h3>
              <p className="text-muted-foreground text-sm">Lagos, Nigeria 🇳🇬</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              onClick={openModal}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 font-medium">

                <Send className="w-5 h-5" />
                Send Me a Message
            </Button>      
          </div>
        </div> 
      </div>

      {/* popup contact form */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
        <div className="bg-gradient-card p-8 rounded-2xl w-full max-w-md relative">
          
          {/* close button */}
          <button
            className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
            onClick={closeModal}
            disabled={isLoading}
          >
            <X className="w-6 h-6" />
          </button>
          
          {showSuccess ? (
            // Success State
              <div className="text-center py-8" style={{animation: 'fadeIn 0.3s ease-out'}}>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center" style={{animation: 'scaleIn 0.3s ease-out'}}>
                  <CheckCircle className="w-12 h-12 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-300">Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (

            // Form State
        <div>
          <h3 className="text-2xl font-display font-bold mb-6">Contact Me</h3>
          <div className="space-y-4">
            
            {/* Name field */}
                <div>
                    <label className="block text-sm font-medium mb-2 text-slate-200">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isLoading}
                      className={`w-full px-4 py-3 border rounded-lg bg-slate-900 text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.name 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-slate-600 focus:border-blue-500 focus:ring-blue-500'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400" style={{animation: 'fadeIn 0.3s ease-out'}}>{errors.name}</p>
                    )}
                </div>

            {/* Email field */}
                <div>
                <label className="block text-sm font-medium mb-2 text-slate-200">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  className={`w-full px-4 py-3 border rounded-lg bg-slate-900 text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-slate-600 focus:border-blue-500 focus:ring-blue-500'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400" style={{animation: 'fadeIn 0.3s ease-out'}}>{errors.email}</p>
                )}
                </div>

            {/* Message field */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-200">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    className={`w-full px-4 py-3 border rounded-lg bg-slate-900 text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-slate-600 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                    placeholder="Tell me about your project or idea..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400" style={{animation: 'fadeIn 0.3s ease-out'}}>{errors.message}</p>
                  )}
                </div>

            {/* Submit error */}
                {errors.submit && (
                  <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg">
                    <p className="text-sm text-red-400">{errors.submit}</p>
                  </div>
                )}

            {/* Submit button */}
                  <Button 
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>

                </div>
                </div>
              )}
            </div>

        </div>
         )}
      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
