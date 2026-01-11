import { ArrowLeft, ArrowRight, Github, FileText, Server, Database, Shield, Zap, CheckCircle, AlertTriangle, TrendingUp, Lightbulb, MapPin, Search, Store } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CampusConnect = () => {
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
          
          {/* 1. Project Header (Hero) */}
          <section className="mb-16">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                MVP
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                In Development
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
                Solo Developer
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              CampusConnect
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A campus super app that reduces time waste, asset loss, and welfare uncertainty for Unilag students.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Role</p>
                <p className="font-semibold">Solo Developer</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Platform</p>
                <p className="font-semibold">Web (SPA)</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Status</p>
                <p className="font-semibold text-yellow-500">In Development</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Stack</p>
                <p className="font-semibold text-xs">HTML, Tailwind, JS, Firebase</p>
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
            </div>
          </section>

          {/* 2. Problem */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-primary" />
              Problem
            </h2>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <p className="text-muted-foreground mb-4">
                Unilag students face daily inefficiencies caused by:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Wasted time navigating campus and searching for available study resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>No centralized system for recovering lost personal items</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Lack of transparent data on vendor hygiene, pricing, and service quality</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4 text-sm">
                These issues increase stress, reduce productivity, and affect student welfare.
              </p>
            </div>
          </section>

          {/* 3. Solution */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-primary" />
              Solution
            </h2>
            <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
              <p className="text-muted-foreground">
                <strong className="text-foreground">What the system does:</strong> A single dashboard that consolidates real-time campus resource visibility, an automated and secure lost-and-found system, and a verified, community-driven vendor directory.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">What it deliberately does NOT do:</strong> Overengineering in the MVP phase. The system is intentionally scoped to core campus needs.
              </p>
            </div>
          </section>

          {/* 4. Core Features (MVP Only) */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary" />
              Core Features (MVP)
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Productivity Hub */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-3">Productivity Hub</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Interactive campus map</li>
                  <li>• Real-time status of libraries and study spaces</li>
                  <li>• Crowdsourced availability updates</li>
                </ul>
              </div>

              {/* Safety Hub (FindIt) */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-semibold mb-3">Safety Hub (FindIt)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Lost & found item submissions</li>
                  <li>• Automated item matching</li>
                  <li>• Anonymous in-app chat</li>
                  <li>• Ownership verification flow</li>
                </ul>
              </div>

              {/* Welfare Hub */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                  <Store className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-semibold mb-3">Welfare Hub</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Verified campus vendors</li>
                  <li>• Community ratings (hygiene, service, pricing)</li>
                  <li>• Crowdsourced price tracking</li>
                  <li>• Hygiene and safety alerts</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. System Architecture */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <Server className="w-6 h-6 text-primary" />
              System Architecture
            </h2>
            <div className="p-6 rounded-2xl bg-card border border-border">
              {/* Architecture Diagram */}
              <div className="mb-8 p-8 rounded-xl bg-secondary/30 border border-border">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl">📱</span>
                    </div>
                    <p className="text-sm font-medium">Client (SPA)</p>
                  </div>
                  
                  <div className="text-primary text-xl">→</div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl">🔐</span>
                    </div>
                    <p className="text-sm font-medium">Firebase Auth</p>
                  </div>
                  
                  <div className="text-primary text-xl">→</div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl">⚡</span>
                    </div>
                    <p className="text-sm font-medium">Hub Services</p>
                  </div>
                  
                  <div className="text-primary text-xl">→</div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl">🗄️</span>
                    </div>
                    <p className="text-sm font-medium">Firestore</p>
                  </div>

                  <div className="text-primary text-xl">→</div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl">📦</span>
                    </div>
                    <p className="text-sm font-medium">Storage</p>
                  </div>
                </div>
              </div>
              
              {/* Architecture Details */}
              <div className="space-y-3">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Authenticated users gate all write operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Firestore real-time listeners sync live updates to clients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Security rules enforce data integrity and ownership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Modular service design aligned to three hubs</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 6. Key Technical Decisions */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <Database className="w-6 h-6 text-primary" />
              Key Technical Decisions
            </h2>
            <div className="space-y-4">
              {[
                {
                  decision: "Firebase chosen for real-time sync",
                  why: "Rapid iteration and built-in real-time capabilities without custom infrastructure"
                },
                {
                  decision: "Auth-gated writes to prevent data pollution",
                  why: "Only verified users can submit data, maintaining system integrity"
                },
                {
                  decision: "Modular service design",
                  why: "Allows independent scaling and development of each hub"
                },
                {
                  decision: "Crowdsourced data with accountability",
                  why: "Not anonymous posting — users are tied to their contributions"
                },
              ].map((item, index) => (
                <div key={index} className="p-5 rounded-xl bg-card border border-border">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-xs font-medium">Decision</span>
                    <p className="font-medium">{item.decision}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-xs font-medium">Why</span>
                    <p className="text-sm text-muted-foreground">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Challenges & Tradeoffs */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-primary" />
              Challenges & Tradeoffs
            </h2>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span>Ensuring data reliability in a crowdsourced system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span>Balancing real-time updates with data trust</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span>Designing features usable while users are physically moving</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 8. What I'd Improve Next */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-primary" />
              What I'd Improve Next
            </h2>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Push Notifications", desc: "Instant alerts for lost-item matches" },
                  { title: "Advanced Matching", desc: "Smarter algorithms for FindIt" },
                  { title: "Vendor Pre-ordering", desc: "Order ahead from campus vendors" },
                  { title: "Usage Analytics", desc: "Resource optimization insights" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 9. Impact / Learning */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary" />
              Key Learnings
            </h2>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <p className="text-muted-foreground">
                This project strengthened my understanding of real-time systems, authentication-driven data integrity, and designing for high-friction, real-world user environments. It taught me to scope aggressively and prioritize features that deliver immediate value.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <section className="flex justify-between items-center pt-8 border-t border-border">
            <Button variant="ghost" asChild>
              <Link to="/#projects" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/projects/clearroute" className="flex items-center gap-2">
                Next Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </section>

        </div>
      </main>
    </div>
  );
};

export default CampusConnect;
