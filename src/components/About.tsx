import { Code2, Database, Server, Zap, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { SpotlightCard, Magnetic, StaggerContainer, StaggerItem } from "./animations/AnimatedComponents";
import { MorphingShape } from "./animations/AnimatedBackground";

const skills = [
  {
    icon: Code2,
    title: "Python/Django",
    description: "Building robust backend systems and web applications using Python and Django framework.",
  },
  {
    icon: Server,
    title: "API Development",
    description: "Designing and implementing RESTful APIs using Django REST Framework (DRF) for seamless client-server communication.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "PostgreSQL and MySQL database schema design, optimization, and management.",
  },
  {
    icon: Zap,
    title: "Github Actions",
    description: "Implementing CI/CD pipelines using GitHub Actions for automated testing and deployment.",
  },
];

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  const iconVariants: Variants = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2, 
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
  };

  return (
    <section id="about" className="py-24 bg-gradient-hero">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.p
              variants={headerVariants}
              className="text-primary font-medium tracking-wide uppercase text-sm mb-4"
            >
              About Me
            </motion.p>

            <motion.h2
              variants={headerVariants}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Django <span className="text-gradient">Backend Developer</span>
            </motion.h2>
            <motion.p
              variants={headerVariants}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              I'm a developer experienced in Django/Python, who likes building systems that actually survive real usage. <br/>
              I work mostly on APIs, data models, and backend logic — especially for products where data isn’t perfect and users don’t behave nicely. <br />
             </motion.p>
          </motion.div>

          {/* Check out my resume button */}
          <div className="text-center mb-20 animate-fade-up animation-delay-600">
            <a
              href="./myresume/Peace-Udotong-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
                Check out my Resume
              </button>
            </a>
          </div>


          {/* Skills Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-colors duration-300 cursor-default"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <motion.div
                    variants={iconVariants}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  >
                    <skill.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-display font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Fun fact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <motion.p
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-muted-foreground inline-flex items-center gap-2"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl"
              >
                😄
              </motion.span>
              <span className="italic">Status: Probably Eating Cake</span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
