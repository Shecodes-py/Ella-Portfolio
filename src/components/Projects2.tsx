import { ExternalLink, Github, Code, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Afrivate",
    description: "Backend systems powering a real startup product. Built with Django, PostgreSQL, and deployed in production.",
    tech: ["Django", "PostgreSQL", "REST API", "JWT Auth"],
    github: "https://github.com/Shecodes-py",
    color: "from-primary/20 to-orange-500/20",
    hasDetailPage: true,
    slug: "afrivate",
    featured: true,
  },
  {
    title: "Student GPA Predictor",
    description: "A machine learning project that predicts student GPA based on various academic factors.",
    tech: ["Python", "Machine Learning", "Data Science"],
    github: "https://github.com/Shecodes-py/Student-GPA-Predictors",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "URL Shortener",
    description: "A service that takes a long URL and returns a much shorter, unique one with redirect functionality.",
    tech: ["JavaScript", "Express.js", "Node.js"],
    github: "https://github.com/Shecodes-py/Url-Shortener",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Spotify Playlist Web App",
    description: "A simple and fun music playlist project for managing and displaying playlists.",
    tech: ["Python", "HTML", "Web Development"],
    github: "https://github.com/Shecodes-py/Spotify-Playlist-Web-App",
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    title: "String Reverser",
    description: "A CustomTkinter app that reverses any string entered by the user with a clean GUI.",
    tech: ["Python", "CustomTkinter", "GUI"],
    github: "https://github.com/Shecodes-py/String-Reverser",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Tkinter Calculator",
    description: "My first GUI calculator made with Tkinter. Small, simple, and it actually works!",
    tech: ["Python", "Tkinter", "GUI"],
    github: "https://github.com/Shecodes-py/Tkinter-Calc",
    color: "from-pink-500/20 to-rose-500/20",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              My Work
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my journey in backend development and Python programming.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative rounded-2xl bg-gradient-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-6 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Code className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.hasDetailPage ? (
                      <Button size="sm" asChild>
                        <Link
                          to={`/projects/${project.slug}`}
                          className="flex items-center gap-2"
                        >
                          View Project
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    ) : (
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
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button variant="ghost" size="lg" asChild>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
