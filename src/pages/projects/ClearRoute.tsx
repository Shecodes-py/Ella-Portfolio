import { ArrowLeft, ArrowRight, Github, Server, Database, Zap, CheckCircle, AlertTriangle, TrendingUp, Lightbulb, Navigation, Clock, Users, Route } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ClearRoute = () => {
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
                MVP / Prototype
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                Solo Developer
              </span>
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium">
                Web Platform
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              ClearRoute
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A decision-support platform that helps commuters determine if buses are running, estimate waiting times, and find alternative routes.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Role</p>
                <p className="font-semibold">Solo Developer</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Platform</p>
                <p className="font-semibold">Web</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Status</p>
                <p className="font-semibold text-yellow-500">Prototype</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Stack</p>
                <p className="font-semibold text-xs">Web, API, Maps</p>
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
                Commuters often wait 30–60 minutes at bus stops without knowing:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>If buses are still operating</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>When the next bus will arrive</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Whether an alternative route would be faster</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4 text-sm">
                This leads to missed commitments and unnecessary stress.
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
                <strong className="text-foreground">What the system does:</strong> Aggregates driver signals, commuter reports, and historical patterns to provide route availability status, confidence-based ETA estimates, and actionable alternatives when routes are inactive.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Design philosophy:</strong> The system prioritizes usefulness over perfect accuracy. It's designed to remain functional even with partial participation.
              </p>
            </div>
          </section>

          {/* 4. Core Features (MVP) */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary" />
              Core Features (MVP)
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <Navigation className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-3">Route Search</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Search by origin and destination</li>
                  <li>• Route availability status (Active / Delayed / Inactive)</li>
                  <li>• Alternative route suggestions</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-semibold mb-3">ETA Estimation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Confidence-based estimates</li>
                  <li>• Explicit uncertainty indicators</li>
                  <li>• Historical pattern analysis</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-semibold mb-3">Driver Updates</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Driver status controls</li>
                  <li>• High-trust signal weighting</li>
                  <li>• Low adoption barrier design</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                  <Route className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold mb-3">Commuter Reporting</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Crowd-sourced status updates</li>
                  <li>• Time-decaying report influence</li>
                  <li>• Supplements low driver adoption</li>
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
                    <p className="text-sm font-medium">Client</p>
                  </div>
                  
                  <div className="text-primary text-xl">→</div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl">⚡</span>
                    </div>
                    <p className="text-sm font-medium">API Layer</p>
                  </div>
                  
                  <div className="text-primary text-xl">→</div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl">🧠</span>
                    </div>
                    <p className="text-sm font-medium">Confidence Engine</p>
                  </div>
                  
                  <div className="text-primary text-xl">→</div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl">🗄️</span>
                    </div>
                    <p className="text-sm font-medium">Data Store</p>
                  </div>
                </div>
              </div>
              
              {/* Architecture Details */}
              <div className="space-y-3">
                <h3 className="font-semibold mb-3">Signal Weighting</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Driver signals carry the highest trust weight</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Commuter reports supplement low driver adoption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Historical data fills gaps when live signals are missing</span>
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
                  decision: "Weighted confidence model instead of exact tracking",
                  why: "Realistic for environments with imperfect data; avoids false precision"
                },
                {
                  decision: "Manual driver status controls",
                  why: "Lower adoption barriers; doesn't require GPS tracking or app installation"
                },
                {
                  decision: "Explicit uncertainty indicators shown to users",
                  why: "Builds trust; users know when data is fresh vs stale"
                },
                {
                  decision: "Time-decaying reports",
                  why: "Prevents stale data from influencing current decisions"
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
                  <span>Low initial driver participation requires reliance on commuter reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span>Risk of false or outdated commuter reports affecting reliability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <span>Avoiding overpromising ETA accuracy with limited data</span>
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
                  { title: "SMS / USSD Access", desc: "For low-internet users" },
                  { title: "Driver Incentives", desc: "Mechanisms to encourage participation" },
                  { title: "Route Analytics", desc: "Performance metrics and insights" },
                  { title: "Government Integration", desc: "Partner with transport unions" },
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
                ClearRoute reinforced the importance of designing systems that remain useful under imperfect data conditions and real-world adoption constraints. It taught me to embrace uncertainty explicitly rather than hide it, and to build for graceful degradation.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <section className="flex justify-between items-center pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <Link to="/projects/campusconnect" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Previous Project
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/#projects" className="flex items-center gap-2">
                Back to Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </section>

        </div>
      </main>
    </div>
  );
};

export default ClearRoute;
