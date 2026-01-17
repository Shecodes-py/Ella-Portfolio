import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Glowing orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container relative z-10 px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Avatar */}
          <div className="mb-8 animate-fade-up">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30 glow-subtle">
                <img
                  src="https://avatars.githubusercontent.com/u/94646178?v=4"
                  alt="Ella Udotong"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center text-lg animate-float">
                👋
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-4 mb-8">
            <p className="text-primary font-medium tracking-wide uppercase text-sm animate-fade-up">
              PEACE UDOTONG
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight animate-fade-up animation-delay-200">
              {" "}
              {/* Hi, I'm    */}
              <span className="text-gradient">BACKEND DEVELOPER</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-400">
              Python enthusiast & Django developer building scalable backend systems.
              Based in Lagos, Nigeria 🇳🇬
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-up animation-delay-600">
            {["Python", "Django", "Postgres", "SQL", "AWS","GIT", "GitHub", "REST APIs", "OAuth", "JWT"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up animation-delay-800">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View My Work
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 animate-fade-up animation-delay-800">
            <a
              href="https://github.com/Shecodes-py"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/peaceudotong/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:Udotongpeace@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
