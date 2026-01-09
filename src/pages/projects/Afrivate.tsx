import { ArrowLeft, ArrowRight, Github, FileText, Server, Database, Shield, Zap, CheckCircle, AlertTriangle, TrendingUp, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Afrivate = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container px-6 py-4">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <div className="container px-6 max-w-4xl mx-auto">
          
          {/* 1. Hero / Summary */}
          <section className="mb-16">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Startup
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                Backend / Production
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Afrivate
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Backend systems powering a real startup product.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Role</p>
                <p className="font-semibold">Backend Developer</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Stack</p>
                <p className="font-semibold">Django, PostgreSQL</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Status</p>
                <p className="font-semibold text-green-500">In Production</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Type</p>
                <p className="font-semibold">Internal System</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="https://github.com/Shecodes-py" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  View GitHub
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                API Documentation
              </Button>
            </div>
          </section>

          {/* 2. Problem Statement */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-primary" />
              Problem Statement
            </h2>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground">Target Users:</strong> Internal team members and end-users interacting with the startup's core product.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground">The Problem:</strong> Manual processes were slowing down operations. The team needed a robust, scalable backend to automate workflows and handle growing user demands.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground">Business Impact:</strong> Without a reliable backend, the product couldn't scale, and the team spent valuable time on repetitive tasks instead of growth.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Solution Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-primary" />
              Solution Overview
            </h2>
            <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
              <p className="text-muted-foreground">
                <strong className="text-foreground">What the system does:</strong> A Django-powered REST API that handles user management, data processing, and integrates with third-party services to automate core business operations.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">How it solves the problem:</strong> Replaced manual workflows with automated endpoints. Centralized data management with PostgreSQL. Implemented role-based access to secure sensitive operations.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">My ownership:</strong> Designed and built the entire backend architecture. Implemented all API endpoints, database schemas, authentication, and deployment configurations.
              </p>
            </div>
          </section>

          {/* 4. System Architecture */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <Server className="w-6 h-6 text-primary" />
              System Architecture
            </h2>
            <div className="p-6 rounded-2xl bg-card border border-border">
              {/* Architecture Diagram */}
              <div className="mb-8 p-8 rounded-xl bg-secondary/30 border border-border">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  {/* Client */}
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">📱</span>
                    </div>
                    <p className="text-sm font-medium">Client Apps</p>
                    <p className="text-xs text-muted-foreground">Web / Mobile</p>
                  </div>
                  
                  <div className="text-primary text-2xl">→</div>
                  
                  {/* API Layer */}
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <p className="text-sm font-medium">Django REST API</p>
                    <p className="text-xs text-muted-foreground">Auth + Business Logic</p>
                  </div>
                  
                  <div className="text-primary text-2xl">→</div>
                  
                  {/* Database */}
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🗄️</span>
                    </div>
                    <p className="text-sm font-medium">PostgreSQL</p>
                    <p className="text-xs text-muted-foreground">Data Storage</p>
                  </div>
                </div>
              </div>
              
              {/* Flow Explanation */}
              <div className="space-y-3">
                <h3 className="font-semibold mb-3">Request Flow</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center shrink-0">1</span>
                    <p className="text-sm text-muted-foreground">Client sends authenticated request to API endpoint</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center shrink-0">2</span>
                    <p className="text-sm text-muted-foreground">JWT middleware validates token and permissions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center shrink-0">3</span>
                    <p className="text-sm text-muted-foreground">View processes request, applies business logic</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center shrink-0">4</span>
                    <p className="text-sm text-muted-foreground">Database operations via Django ORM, response returned</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Core Backend Responsibilities */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <Database className="w-6 h-6 text-primary" />
              Core Backend Responsibilities
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "API Design & Implementation", desc: "RESTful endpoints with proper HTTP methods and status codes" },
                { title: "Database Schema & Migrations", desc: "Normalized PostgreSQL schema with Django migrations" },
                { title: "Authentication & RBAC", desc: "JWT-based auth with role-based access control" },
                { title: "Business Logic & Validations", desc: "Serializers with custom validation rules" },
                { title: "Error Handling & Logging", desc: "Structured error responses and detailed logging" },
                { title: "API Documentation", desc: "Auto-generated docs with drf-spectacular" },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Key Challenges & Decisions */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary" />
              Key Challenges & Decisions
            </h2>
            <div className="space-y-4">
              {[
                {
                  challenge: "Role-based data access across multiple user types",
                  decision: "Custom permission classes with object-level permissions",
                  why: "Provided granular control without duplicating view logic"
                },
                {
                  challenge: "Handling file uploads with size constraints",
                  decision: "Chunked upload with validation at middleware level",
                  why: "Prevented server overload while providing user feedback"
                },
                {
                  challenge: "Maintaining data consistency during concurrent updates",
                  decision: "Database transactions with select_for_update()",
                  why: "Ensured data integrity without sacrificing performance"
                },
                {
                  challenge: "API versioning for future compatibility",
                  decision: "URL-based versioning with v1/ prefix",
                  why: "Simple to implement, clear for consumers, easy to deprecate"
                },
              ].map((item, index) => (
                <div key={index} className="p-5 rounded-xl bg-card border border-border">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 text-xs font-medium">Challenge</span>
                    <p className="font-medium">{item.challenge}</p>
                  </div>
                  <div className="flex items-start gap-3 mb-2">
                    <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-xs font-medium">Decision</span>
                    <p className="text-muted-foreground">{item.decision}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-xs font-medium">Why</span>
                    <p className="text-sm text-muted-foreground">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Security & Reliability */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              Security & Reliability
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Authentication</p>
                <p className="font-medium">JWT with refresh token rotation</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Permissions</p>
                <p className="font-medium">Object-level with custom permission classes</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Input Validation</p>
                <p className="font-medium">Serializer validation + database constraints</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Error Handling</p>
                <p className="font-medium">Custom exception handler with structured responses</p>
              </div>
            </div>
          </section>

          {/* 8. Impact & Outcome */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-primary" />
              Impact & Outcome
            </h2>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Successfully deployed and used internally by the startup team</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Eliminated manual data entry processes, saving hours weekly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Enabled the frontend team to build features independently with clear API contracts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Supported product growth without backend rewrites</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 9. What I'd Improve Next */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-primary" />
              What I'd Improve Next
            </h2>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Redis Caching", desc: "Add caching layer for frequently accessed data" },
                  { title: "Better Observability", desc: "Integrate APM tools like Sentry for monitoring" },
                  { title: "Async Task Queue", desc: "Celery for background jobs and email sending" },
                  { title: "Rate Limiting", desc: "Throttling per user/endpoint to prevent abuse" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                    <span className="text-primary">→</span>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 11. Navigation */}
          <section className="pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link 
                to="/#projects" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
              <Link 
                to="/projects/gpa-predictor" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                Next Project: GPA Predictor
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Afrivate;