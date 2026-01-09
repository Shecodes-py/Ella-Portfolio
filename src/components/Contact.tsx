import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />

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
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:Udotongpeace@gmail.com" className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                Send Me a Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
