import { Code2, Database, Server, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Python Expert",
    description: "Proficient in Python with experience building robust applications and scripts.",
  },
  {
    icon: Server,
    title: "Django & Flask",
    description: "Building scalable web applications and RESTful APIs with Django and Flask frameworks.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Designing efficient database schemas and optimizing queries for performance.",
  },
  {
    icon: Zap,
    title: "FastAPI",
    description: "Creating high-performance async APIs with FastAPI for modern applications.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-hero">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4 animate-fade-up">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-up animation-delay-200">
              Engineering Student & <span className="text-gradient">Backend Developer</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-400">
              I'm passionate about building scalable systems and solving complex problems through code.
              Currently focusing on Django & APIs while pursuing my engineering degree.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            ))}
          </div>

          {/* Fun fact */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground inline-flex items-center gap-2">
              <span className="text-2xl">😄</span>
              <span className="italic">Status: Probably Eating Cake</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
