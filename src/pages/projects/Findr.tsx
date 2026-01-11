import { ArrowLeft, ArrowRight, Github, Shield, Users, Key, Database, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Findr = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="border-primary/50 text-primary">Backend</Badge>
            <Badge variant="outline" className="border-green-500/50 text-green-400">MVP</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Findr
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            A role-based authentication system supporting vendors and customers with email/password and Google OAuth, built for a multi-vendor local commerce platform.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {["Django", "DRF", "PostgreSQL", "JWT", "Google OAuth"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="https://github.com/Shecodes-py" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-red-500/20 text-red-400 rounded-lg flex items-center justify-center text-sm">1</span>
            Problem
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Most local-commerce platforms fail at critical authentication challenges:
          </p>
          
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
              Separating business owners vs customers cleanly
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
              Scaling permissions without creating chaos
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
              Supporting multiple auth methods (email, OAuth) without code duplication
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
              Working well on low bandwidth (critical for target market)
            </li>
          </ul>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center text-sm">2</span>
            Solution
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">What the system does:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></span>
                  Custom User model with email as unique identifier
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></span>
                  Role-based access control (vendor, customer)
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></span>
                  JWT-based stateless authentication
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></span>
                  Google OAuth integration sharing the same user table
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Scope control (what it doesn't do):</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 shrink-0"></span>
                  No session storage — optimized for mobile/web scalability
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 shrink-0"></span>
                  Business logic separated from auth (VendorProfile is distinct)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center text-sm">3</span>
            Core Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card/50 rounded-xl border border-border/50">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Key className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email & Password Auth</h3>
              <p className="text-sm text-muted-foreground">
                User submits credentials → Backend validates → JWT tokens issued → Role embedded in payload
              </p>
            </div>
            
            <div className="p-6 bg-card/50 rounded-xl border border-border/50">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Google OAuth</h3>
              <p className="text-sm text-muted-foreground">
                Frontend sends id_token → Backend verifies → User retrieved or created → Same JWT flow
              </p>
            </div>
            
            <div className="p-6 bg-card/50 rounded-xl border border-border/50">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">Role-Based Access</h3>
              <p className="text-sm text-muted-foreground">
                Custom DRF permissions (IsVendor, IsAuthenticated). Vendors can create products, add locations, view inquiries.
              </p>
            </div>
            
            <div className="p-6 bg-card/50 rounded-xl border border-border/50">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Vendor Profile System</h3>
              <p className="text-sm text-muted-foreground">
                Auth data on User, business data on VendorProfile. Prevents bloated tables and leaking business logic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center text-sm">4</span>
            Authentication Architecture
          </h2>
          
          <div className="bg-card/30 rounded-xl border border-border/50 p-6 mb-8">
            <pre className="text-sm text-muted-foreground overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────┐
│                     AUTHENTICATION FLOW                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────┐    ┌──────────────┐    ┌──────────────┐     │
│   │  Client  │───▶│ Email/Pass   │───▶│   Validate   │     │
│   │ (Mobile/ │    │    OR        │    │  Credentials │     │
│   │   Web)   │    │ Google Token │    │              │     │
│   └──────────┘    └──────────────┘    └──────┬───────┘     │
│                                              │              │
│                                              ▼              │
│   ┌──────────────────────────────────────────────────┐     │
│   │              JWT Token Generation                 │     │
│   │  • Access token (short-lived)                    │     │
│   │  • Refresh token (long-lived)                    │     │
│   │  • User role embedded in payload                 │     │
│   └──────────────────────────────────────────────────┘     │
│                          │                                  │
│                          ▼                                  │
│   ┌──────────────────────────────────────────────────┐     │
│   │           Role-Based Access Control               │     │
│   │  • IsVendor permission                           │     │
│   │  • IsAuthenticated permission                    │     │
│   │  • Protected API endpoints                       │     │
│   └──────────────────────────────────────────────────┘     │
│                                                             │
└─────────────────────────────────────────────────────────────┘`}
            </pre>
          </div>
          
          <div className="space-y-4 text-muted-foreground">
            <p><strong className="text-foreground">Key architectural decisions:</strong></p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                OAuth users and email users share the same user table — no duplicated auth logic
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                Stateless JWT means no session storage — scales horizontally
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                Easy to add Apple/Facebook OAuth later with same pattern
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Decisions Section */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-yellow-500/20 text-yellow-400 rounded-lg flex items-center justify-center text-sm">5</span>
            Key Technical Decisions
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-card/30 rounded-xl border border-border/50">
              <h3 className="font-semibold text-primary mb-2">Why Django + DRF?</h3>
              <p className="text-muted-foreground mb-3">
                This was a deliberate tradeoff, not laziness.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Mature, battle-tested auth system</li>
                <li>• Batteries-included security features</li>
                <li>• Easy role-based access control with DRF permissions</li>
                <li>• Faster MVP delivery without sacrificing structure</li>
              </ul>
            </div>
            
            <div className="p-6 bg-card/30 rounded-xl border border-border/50">
              <h3 className="font-semibold text-primary mb-2">Why email as unique identifier?</h3>
              <p className="text-muted-foreground">
                Email login avoids username collisions and simplifies OAuth onboarding. Users don't need to remember a separate username.
              </p>
            </div>
            
            <div className="p-6 bg-card/30 rounded-xl border border-border/50">
              <h3 className="font-semibold text-primary mb-2">Why separate VendorProfile from User?</h3>
              <p className="text-muted-foreground">
                Separation of concerns prevents bloated user tables, avoids leaking business logic into auth, and makes migrations painless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-red-500/20 text-red-400 rounded-lg flex items-center justify-center text-sm">6</span>
            Security & Reliability
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-card/30 rounded-lg border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="font-medium">Password Hashing</span>
              </div>
              <p className="text-sm text-muted-foreground">Django's built-in password hasher (PBKDF2)</p>
            </div>
            
            <div className="p-4 bg-card/30 rounded-lg border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="font-medium">Token Expiration</span>
              </div>
              <p className="text-sm text-muted-foreground">Access tokens expire, refresh tokens required</p>
            </div>
            
            <div className="p-4 bg-card/30 rounded-lg border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="font-medium">OAuth Verification</span>
              </div>
              <p className="text-sm text-muted-foreground">Google id_token verified server-side</p>
            </div>
            
            <div className="p-4 bg-card/30 rounded-lg border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="font-medium">No Session Storage</span>
              </div>
              <p className="text-sm text-muted-foreground">Stateless architecture → horizontally scalable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scalability Section */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-cyan-500/20 text-cyan-400 rounded-lg flex items-center justify-center text-sm">7</span>
            Scalability & Future-Proofing
          </h2>
          
          <p className="text-muted-foreground mb-6">
            This design allows easy addition of:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Payments", "Orders", "Reviews", "Search Analytics", "Multi-vendor Dashboards", "Apple OAuth", "Facebook OAuth", "Admin Panels"].map((feature) => (
              <div key={feature} className="p-3 bg-card/30 rounded-lg border border-border/50 text-center">
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
          
          <p className="text-primary mt-6 font-medium">No refactor required.</p>
        </div>
      </section>

      {/* What This Shows Section */}
      <section className="py-16 px-6 border-t border-border/50 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-primary/20 text-primary rounded-lg flex items-center justify-center text-sm">8</span>
            What This Shows About Me
          </h2>
          
          <div className="p-6 bg-card/50 rounded-xl border border-primary/30">
            <p className="text-lg text-foreground italic">
              "I designed a role-based authentication system using Django and JWT that supports both email/password and Google OAuth, separates business and auth concerns, and scales cleanly for multi-vendor platforms."
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              That's a real backend sentence, not student fluff.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link to="/#projects" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </Button>
          
          <Button asChild>
            <Link to="/projects/roacleaning" className="flex items-center gap-2">
              Next Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Findr;
