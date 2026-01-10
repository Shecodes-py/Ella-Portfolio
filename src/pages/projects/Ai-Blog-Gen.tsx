import {ArrowLeft, ArrowDown, ArrowRight, Github, FileText, Server, Database, Shield, Zap, CheckCircle, AlertTriangle, Lightbulb,} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AIBlogGenerator = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container px-6 py-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <div className="container px-6 max-w-4xl mx-auto">

          {/* Hero */}
          <section className="mb-16">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                Personal Project
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                AI / Backend Tool
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              AI-Powered Blog Generator
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Backend service that generates structured blog drafts using controlled AI prompts.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Role</p>
                <p className="font-semibold">Backend Developer</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Stack</p>
                <p className="font-semibold">Python, Django, Gemini API, Postgresql</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Status</p>
                <p className="font-semibold text-yellow-500">Prototype</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Type</p>
                <p className="font-semibold">Backend Service</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a
                  href="https://github.com/Shecodes-py/Ai-Powered-Blog-Generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View GitHub
                </a>
              </Button>
              <Button>
                <a 
                href="https://ai-powered-blog-generator-6g2w.onrender.com/"
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <FileText className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
              {/* <Button variant="outline" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                API Overview
              </Button> */}
            </div>
          </section>

          {/* Problem */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-primary" />
              Problem Statement
            </h2>
            <div className="p-6 rounded-2xl bg-card border border-border space-y-3 text-muted-foreground">
              <p>
                Writing blog content is time-consuming and requires consistent structure.
                Most AI tools return generic output with little control over formatting,
                tone, or length.
              </p>
              <p>
                This makes them unsuitable for workflows that need repeatable,
                semi-structured content.
              </p>
            </div>
          </section>

          {/* Solution */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-primary" />
              Solution Overview
            </h2>
            <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
              <p className="text-muted-foreground">
                Built a backend API that accepts structured input, constructs controlled
                prompts, sends them to an AI model, and returns formatted blog drafts.
              </p>
              <p className="text-muted-foreground">
                The focus is not raw generation, but predictable structure and output
                handling.
              </p>
            </div>
          </section>

          {/* Architecture */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <Server className="w-6 h-6 text-primary" />
              System Architecture
            </h2>
            
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                
                {/* Step 1: Client */}
                <div className="flex flex-col items-center gap-2">
                  <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 font-medium">Client</div>
                </div>

                <ArrowRight className="hidden md:block w-5 h-5 text-muted-foreground" />
                <ArrowDown className="md:hidden w-5 h-5 text-muted-foreground" />

                {/* Step 2: API */}
                <div className="flex flex-col items-center gap-2">
                  <div className="px-4 py-2 rounded-lg bg-secondary border border-border font-medium">API Gateway</div>
                </div>

                <ArrowRight className="hidden md:block w-5 h-5 text-muted-foreground" />
                <ArrowDown className="md:hidden w-5 h-5 text-muted-foreground" />

                {/* Step 3: Prompt Builder */}
                <div className="flex flex-col items-center gap-2">
                  <div className="px-4 py-2 rounded-lg bg-secondary border border-border font-medium text-center">
                    Prompt <br/> Builder
                  </div>
                </div>

                <ArrowRight className="hidden md:block w-5 h-5 text-muted-foreground" />
                <ArrowDown className="md:hidden w-5 h-5 text-muted-foreground" />

                {/* Step 4: LLM */}
                <div className="flex flex-col items-center gap-2">
                  <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 font-medium">AI Engine</div>
                </div>

                <ArrowRight className="hidden md:block w-5 h-5 text-muted-foreground" />
                <ArrowDown className="md:hidden w-5 h-5 text-muted-foreground" />

                {/* Step 5: Parser */}
                <div className="flex flex-col items-center gap-2">
                  <div className="px-4 py-2 rounded-lg bg-secondary border border-border font-medium text-center">
                    Response <br/> Parser
                  </div>
                </div>

              </div>
              
              <p className="mt-8 text-center text-sm text-muted-foreground italic">
                The system handles request validation, prompt engineering, and structured output parsing in a single end-to-end pipeline.
              </p>
            </div>
          </section>

          {/* Core Features */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <Database className="w-6 h-6 text-primary" />
              Core Backend Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Prompt construction logic",
                "AI request orchestration",
                "Response parsing & formatting",
                "Input validation",
                "Error handling for failed generations",
              ].map((text) => (
                <div
                  key={text}
                  className="p-4 rounded-xl bg-card border border-border flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <p className="text-sm">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary" />
              Key Challenges & Decisions
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Ensuring consistent output required structured prompts instead of
                free-form text. API latency and failures were handled defensively
                to prevent broken responses.
              </p>
            </div>
          </section>

          {/* Safety */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              AI & Safety Considerations
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="font-medium">Input Validation</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="font-medium">Output sanity checks</p>
              </div>
            </div>
          </section>

          {/* Improvements */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-primary" />
              What I’d Improve Next
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Saved drafts and user accounts</li>
              <li>• Caching repeated prompts</li>
              <li>• Cost monitoring per request</li>
            </ul>
          </section>

          {/* Impact & Learnings */}
          <section>
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary" />
              Impact & Key Learnings
            </h2>
            <ul className="space-y-2 text-muted-foreground">
                <li>• Reduced draft generation time from 30 mins to less than 1 min</li>
                <li>• Achieved consistent blog structure across 50+ test cases</li>
                <li>• Developed a deeper understanding of prompt engineering for structured outputs. </li>
                <li>• Gained experience building robust backend services that integrate with AI APIs.</li>
            </ul>
          </section>

        </div>
      </main>
    </div>
  );
};

export default AIBlogGenerator;
