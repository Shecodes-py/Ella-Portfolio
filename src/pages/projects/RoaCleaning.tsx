import { ArrowLeft, ArrowRight, Github, Calendar, DollarSign, Database, Layers, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RoaCleaning = () => {
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
            Roa Cleaning
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            A backend system that handles service discovery, dynamic pricing, scheduling, and bookings for a multi-service cleaning company.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {["Django", "PostgreSQL", "Django ORM", "REST API"].map((tech) => (
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
            Most cleaning businesses handle bookings manually via WhatsApp or calls, which leads to:
          </p>
          
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0"></span>
              Double bookings and scheduling conflicts
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0"></span>
              Inconsistent pricing across similar jobs
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0"></span>
              Poor scheduling visibility for staff and customers
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0"></span>
              No structured service options or add-ons
            </li>
          </ul>
          
          <p className="text-foreground mt-6 font-medium">
            This system automates the entire flow.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center text-sm">2</span>
            Solution
          </h2>
          
          <p className="text-muted-foreground mb-6">
            A normalized, relational backend that supports:
          </p>
          
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></span>
              Multiple service categories (Cleaning, Fumigation, Laundry)
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></span>
              Property-based service variations
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></span>
              Add-on services with dynamic pricing
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></span>
              Time-slot based scheduling
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></span>
              One-time and recurring bookings
            </li>
          </ul>
          
          <p className="text-primary mt-6 font-medium">
            No frontend dependency. Clean backend architecture.
          </p>
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
                <Layers className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Service Management</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Central Service model for all categories with extensible options.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• CleaningServiceOption</li>
                <li>• FumigationServiceOption</li>
                <li>• LaundryServiceOption</li>
                <li>• Enforced unique constraints</li>
              </ul>
              <p className="text-xs text-primary mt-3">Shows: normalization and constraints</p>
            </div>
            
            <div className="p-6 bg-card/50 rounded-xl border border-border/50">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">Pricing Logic</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Fixed pricing matrix with centralized calculation.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Based on service type</li>
                <li>• Based on property type</li>
                <li>• Based on property size</li>
                <li>• Independent add-on pricing</li>
              </ul>
              <p className="text-xs text-primary mt-3">Shows: business logic separation</p>
            </div>
            
            <div className="p-6 bg-card/50 rounded-xl border border-border/50">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Scheduling System</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Real-world scheduling logic, not toy CRUD.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Reusable TimeSlot model</li>
                <li>• Schedule = date + slot</li>
                <li>• unique_together prevents double booking</li>
              </ul>
            </div>
            
            <div className="p-6 bg-card/50 rounded-xl border border-border/50">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Booking System</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Single entity tying everything together.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• User + Service + Add-ons</li>
                <li>• Schedule + Location</li>
                <li>• Price aggregation</li>
                <li>• Ready for payment integration</li>
              </ul>
            </div>
            
            <div className="p-6 bg-card/50 rounded-xl border border-border/50">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="font-semibold mb-2">Location Management</h3>
              <p className="text-sm text-muted-foreground">
                Users can save multiple service locations, reusable across bookings.
              </p>
            </div>
            
            <div className="p-6 bg-card/50 rounded-xl border border-border/50">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-semibold mb-2">Extensibility</h3>
              <p className="text-sm text-muted-foreground">
                Recurring booking model scaffolded. Easy to plug in payments, staff assignment, admin dashboards.
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
            Architecture Highlights
          </h2>
          
          <div className="bg-card/30 rounded-xl border border-border/50 p-6 mb-8">
            <pre className="text-sm text-muted-foreground overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────┐
│                    DATABASE SCHEMA                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────────┐      ┌──────────────┐                   │
│   │   Service    │      │   TimeSlot   │                   │
│   │ (categories) │      │  (reusable)  │                   │
│   └──────┬───────┘      └──────┬───────┘                   │
│          │                     │                            │
│          ▼                     ▼                            │
│   ┌──────────────┐      ┌──────────────┐                   │
│   │ ServiceOption│      │   Schedule   │                   │
│   │ (Cleaning/   │      │ (date+slot)  │                   │
│   │  Fumigation/ │      │ unique_together                  │
│   │  Laundry)    │      └──────┬───────┘                   │
│   └──────┬───────┘             │                            │
│          │                     │                            │
│          └──────────┬──────────┘                            │
│                     ▼                                       │
│   ┌─────────────────────────────────────┐                  │
│   │              BOOKING                 │                  │
│   │  • User (FK)                        │                  │
│   │  • Service (FK)                     │                  │
│   │  • Add-ons (M2M)                    │                  │
│   │  • Schedule (FK)                    │                  │
│   │  • Location (FK)                    │                  │
│   │  • Computed price                   │                  │
│   └─────────────────────────────────────┘                  │
│                                                             │
│   Strong use of:                                            │
│   • ForeignKey relationships                               │
│   • ManyToManyField for add-ons                           │
│   • TextChoices for enums                                  │
│   • Database-level constraints                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘`}
            </pre>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-card/30 rounded-lg border border-border/50 text-center">
              <p className="text-2xl font-bold text-primary">ForeignKey</p>
              <p className="text-sm text-muted-foreground">Relational integrity</p>
            </div>
            <div className="p-4 bg-card/30 rounded-lg border border-border/50 text-center">
              <p className="text-2xl font-bold text-primary">ManyToMany</p>
              <p className="text-sm text-muted-foreground">Flexible add-ons</p>
            </div>
            <div className="p-4 bg-card/30 rounded-lg border border-border/50 text-center">
              <p className="text-2xl font-bold text-primary">Constraints</p>
              <p className="text-sm text-muted-foreground">Data integrity</p>
            </div>
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
              <h3 className="font-semibold text-primary mb-2">Centralized price calculation</h3>
              <p className="text-muted-foreground">
                No hardcoding in views. Price logic lives in one place, making updates safe and testable.
              </p>
            </div>
            
            <div className="p-6 bg-card/30 rounded-xl border border-border/50">
              <h3 className="font-semibold text-primary mb-2">unique_together on Schedule</h3>
              <p className="text-muted-foreground">
                Database-level constraint prevents double bookings. Can't be bypassed by buggy application code.
              </p>
            </div>
            
            <div className="p-6 bg-card/30 rounded-xl border border-border/50">
              <h3 className="font-semibold text-primary mb-2">Seed methods for default data</h3>
              <p className="text-muted-foreground">
                TimeSlots and Add-Ons have seed methods for consistent development and deployment.
              </p>
            </div>
            
            <div className="p-6 bg-card/30 rounded-xl border border-border/50">
              <h3 className="font-semibold text-primary mb-2">Service definitions vs booking transactions</h3>
              <p className="text-muted-foreground">
                Clear separation between what services exist (static) and what bookings happen (dynamic).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Improvements Section */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-cyan-500/20 text-cyan-400 rounded-lg flex items-center justify-center text-sm">6</span>
            What I'd Improve Next
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Payment integration",
              "Staff assignment system",
              "Admin dashboard for operations",
              "Recurring booking automation",
              "SMS notifications",
              "Usage analytics"
            ].map((improvement) => (
              <div key={improvement} className="p-4 bg-card/30 rounded-lg border border-border/50 flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span className="text-muted-foreground">{improvement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Proves Section */}
      <section className="py-16 px-6 border-t border-border/50 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-primary/20 text-primary rounded-lg flex items-center justify-center text-sm">7</span>
            What This Proves About Me
          </h2>
          
          <p className="text-muted-foreground mb-6">
            You're not "learning Django". You can:
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-foreground">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Model real businesses
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Design scalable schemas
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Think in systems, not pages
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Translate messy real-world rules into clean data models
            </li>
          </ul>
          
          <div className="p-6 bg-card/50 rounded-xl border border-primary/30">
            <p className="text-lg text-foreground italic">
              "Designed and implemented a Django-based backend for a multi-service cleaning company, supporting dynamic pricing, service variations, add-ons, time-slot scheduling, and structured bookings. Focused on clean database design, business-logic separation, and extensibility for payments and recurring services."
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              That already puts you ahead of 80% of "backend interns".
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link to="/projects/findr" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Previous Project
            </Link>
          </Button>
          
          <Button asChild>
            <Link to="/#projects" className="flex items-center gap-2">
              All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default RoaCleaning;
