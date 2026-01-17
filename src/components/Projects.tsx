import { ExternalLink, Github, Code, ArrowRight, Sparkles} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion, Variants } from "framer-motion";
import { SpotlightCard, Magnetic, CountUp, StaggerContainer, StaggerItem } from "./animations/AnimatedComponents";
import { GlowingBorder } from "./animations/AnimatedBackground";

const projects = [
  {
    title: "Afrivate",
    description: "Backend systems powering a real startup product. Built with Django, PostgreSQL, and deployed in production.",
    tech: ["Django", "PostgreSQL", "REST API", "JWT Auth"],
    github: "https://github.com/Shecodes-py/Afrivate-Backend",
    color: "from-primary/20 to-orange-500/20",
    hasDetailPage: true,
    slug: "afrivate",
    featured: true,
  },
  {
    title: "CampusConnect",
    description: "A campus super app that reduces time waste, asset loss, and welfare uncertainty for Unilag students.",
    tech: ["Firebase", "Tailwind CSS", "JavaScript", "Real-time"],
    github: "https://github.com/Shecodes-py",
    color: "from-blue-500/20 to-cyan-500/20",
    hasDetailPage: true,
    slug: "campusconnect",
    featured: true,
  },
  {
    title: "ClearRoute",
    description: "A decision-support platform that helps commuters determine if buses are running and find alternative routes.",
    tech: ["Web", "API", "Maps", "Real-time"],
    github: "https://github.com/Shecodes-py",
    color: "from-green-500/20 to-emerald-500/20",
    hasDetailPage: true,
    slug: "clearroute",
    featured: true,
  },
  {
    title: "Ai-Blog-Gen",
    description: "Backend service that generates structured blog content using controlled AI prompts.",
    tech: ["Django", "AI APIs: Gemini / AssemblyAI", "REST API", "Downloader: yt-dlp + ffmpeg"],
    github: "https://github.com/Shecodes-py/Ai-Powered-Blog-Generator",
    color: "from-blue-500/20 to-purple-500/20",
    hasDetailPage: true,
    slug: "ai-blog-gen",
    featured: true,
  },
  {
    title: "Findr",
    description: "A role-based authentication system supporting vendors and customers with email/password and Google OAuth for a multi-vendor platform.",
    tech: ["Django", "DRF", "JWT", "PostgreSQL", "OAuth"],
    github: "https://github.com/Shecodes-py/Findr",
    color: "from-green-500/20 to-emerald-500/20",
    hasDetailPage: true,
    slug: "findr",
    featured: true,
  },
  {
    title: "Roa Cleaning",
    description: "Backend system handling service discovery, dynamic pricing, scheduling, and bookings for a multi-service cleaning company.",
    tech: ["Django", "PostgreSQL", "REST API", "ORM"],
    github: "https://github.com/Shecodes-py/ROA-Backend",
    color: "from-yellow-500/20 to-amber-500/20",
    hasDetailPage: true,
    slug: "roacleaning",
    featured: true,
  },
];

const stats = [
  { value: 8, suffix: "+", label: "Projects Built" },
  { value: 5, suffix: "+", label: "Production Apps" },
  { value: 1, suffix: "+", label: "Years Learning" },
  ];

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px]"
        style={{ background: "radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <StaggerContainer className="text-center mb-20">
            <StaggerItem>
              <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm tracking-wide uppercase">
                  My Work
                </span>
              </motion.div>
            </StaggerItem>
            
            <StaggerItem>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Featured{" "}
                <span className="text-gradient">Projects</span>
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                A collection of projects showcasing my journey in backend development and Python programming.
              </p>
            </StaggerItem>

            {/* Stats */}
            <StaggerItem>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl md:text-5xl font-display font-bold text-gradient">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Magnetic strength={0.05}>
                  <SpotlightCard className="h-full rounded-2xl border border-border bg-gradient-card hover:border-primary/30 transition-colors duration-500">
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="relative p-6 flex flex-col h-full"
                    >
                      {/* Gradient overlay on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl`}
                      />
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 400 }}
                          className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5"
                        >
                          <Code className="w-7 h-7 text-primary" />
                        </motion.div>

                        {/* Featured badge */}
                        {project.featured && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-0 right-0 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium"
                          >
                            Featured
                          </motion.span>
                        )}

                        {/* Content */}
                        <h3 className="text-xl font-display font-semibold mb-3">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-5 flex-grow leading-relaxed">{project.description}</p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {project.tech.map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.05 * i }}
                              viewport={{ once: true }}
                              className="px-3 py-1.5 rounded-lg bg-secondary/80 text-secondary-foreground text-xs font-medium"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-3 mt-auto">
                          {project.hasDetailPage ? (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button size="sm" asChild className="group">
                                <Link
                                  to={`/projects/${project.slug}`}
                                  className="flex items-center gap-2"
                                >
                                  View Project
                                  <motion.span
                                    className="group-hover:translate-x-1 transition-transform"
                                  >
                                    <ArrowRight className="w-4 h-4" />
                                  </motion.span>
                                </Link>
                              </Button>
                            </motion.div>
                          ) : (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button variant="outline" size="sm" asChild>
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2"
                                >
                                  <Github className="w-4 h-4" />
                                  View Code
                                </a>
                              </Button>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </SpotlightCard>
                </Magnetic>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          ></motion.div>
            <Magnetic strength={0.1}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" asChild className="px-8 border-2">
                  <a
                    href="https://github.com/Shecodes-py?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    View All Projects
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            </Magnetic>
            
        </div>
      </div>
    </section>
  );
};

export default Projects;
