import { Clock, TrendingUp, MessageCircle, Shield, Smartphone, Zap, Users, Waves } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Clock,
    title: "Time Savings",
    description: "Complete automation that eliminates repetitive manual tasks",
    metric: "80% less admin time",
    color: "text-ocean-tropical",
    bgColor: "bg-ocean-tropical/10"
  },
  {
    icon: TrendingUp,
    title: "Higher Occupancy",
    description: "Booking system optimizes trip capacity and revenue",
    metric: "25% more bookings",
    color: "text-ocean-marine",
    bgColor: "bg-ocean-marine/10"
  },
  {
    icon: Users,
    title: "Centralized Management",
    description: "Complete control of trips, staff, divers, and equipment in one platform",
    metric: "100% integrated",
    color: "text-ocean-deep",
    bgColor: "bg-ocean-deep/10"
  },
  {
    icon: Shield,
    title: "Guaranteed Security",
    description: "Data protection and transactions with advanced encryption",
    metric: "100% secure data",
    color: "text-ocean-coral",
    bgColor: "bg-ocean-coral/10"
  },
  {
    icon: Smartphone,
    title: "Multi-Device",
    description: "Full access from mobile, tablet and desktop",
    metric: "Available 24/7",
    color: "text-ocean-tropical",
    bgColor: "bg-ocean-tropical/10"
  },
  {
    icon: Zap,
    title: "Quick Setup",
    description: "Complete configuration in less than 24 hours",
    metric: "Running in 1 day",
    color: "text-ocean-marine",
    bgColor: "bg-ocean-marine/10"
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-ocean-tropical/5 w-full">
      <div className="container max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-ocean-tropical/10 px-4 py-2 text-sm font-medium text-ocean-deep mb-6">
            <Waves className="h-4 w-4 mr-2" /> Measurable Benefits
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why choose DiveSaaS?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tangible results that transform your dive center management and improve the experience for everyone
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/90 shadow-md"
            >
              <CardContent className="p-6 space-y-5">
                <div className={`w-16 h-16 mx-auto rounded-2xl ${benefit.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>

                <div className="space-y-3 text-center">
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>

                <div className="pt-3 text-center">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${benefit.color} ${benefit.bgColor} border border-current/20`}>
                    {benefit.metric}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Statistics */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-ocean-tropical/5 to-ocean-deep/5 border-ocean-tropical/20 shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <CardContent className="p-10 relative">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-4">Results that transform dive centers</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Real metrics from dive centers that already use DiveSaaS for their daily management
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-ocean-tropical bg-ocean-tropical/10 p-4 rounded-2xl inline-block">+35%</div>
                  <div className="text-sm text-muted-foreground font-medium">Trip bookings</div>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-ocean-marine bg-ocean-marine/10 p-4 rounded-2xl inline-block">-80%</div>
                  <div className="text-sm text-muted-foreground font-medium">Administrative time</div>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-ocean-deep bg-ocean-deep/10 p-4 rounded-2xl inline-block">95%</div>
                  <div className="text-sm text-muted-foreground font-medium">Customer satisfaction</div>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-ocean-coral bg-ocean-coral/10 p-4 rounded-2xl inline-block">24h</div>
                  <div className="text-sm text-muted-foreground font-medium">Full implementation</div>
                </div>
              </div>

              {/* Additional metrics bar */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">300+</div>
                    <div className="text-sm text-muted-foreground">Dive trips managed weekly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">99.9%</div>
                    <div className="text-sm text-muted-foreground">System uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">2min</div>
                    <div className="text-sm text-muted-foreground">Average booking time</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial snippet */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <blockquote className="text-xl italic text-muted-foreground leading-relaxed">
            "DiveSaaS has completely transformed our dive center management.
            We now spend more time diving and less time on paperwork."
          </blockquote>
          <div className="mt-6">
            <div className="font-semibold">Michael Thompson</div>
            <div className="text-sm text-muted-foreground">Director, Cayman Dive Adventures</div>
          </div>
        </div>
      </div>
    </section>
  );
};
