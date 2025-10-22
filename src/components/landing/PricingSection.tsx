import { Check, Star, Zap, Clock, Shield, Smartphone, Users, Calendar, CreditCard, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pricingTiers = [
  {
    range: "1-10 dive centers",
    price: "50",
    description: "Getting started",
    isActive: true
  },
  {
    range: "11-50 dive centers",
    price: "100",
    description: "Growing",
    isActive: false
  },
  {
    range: "51+ dive centers",
    price: "200",
    description: "Expanding",
    isActive: false
  }
];

const allFeatures = [
  "Complete dive trip and schedule management",
  "Dashboard for divers and instructors",
  "Automatic booking system",
  "Automated WhatsApp notifications",
  "Integrated payments with Stripe",
  "Native mobile apps",
  "Smart waitlist system",
  "Advanced reports and analytics",
  "Technical support included",
  "Free setup and migration",
  "Cloud storage",
  "Unlimited instructors"
];

const includedFeatures = [
  {
    icon: Clock,
    title: "Setup included",
    description: "Complete configuration at no additional cost"
  },
  {
    icon: Smartphone,
    title: "Mobile apps",
    description: "For instructors and divers included"
  },
  {
    icon: Shield,
    title: "Secure data",
    description: "SSL encryption and automatic backups"
  },
  {
    icon: Users,
    title: "Technical support",
    description: "Assistance during implementation process"
  }
];

export const PricingSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="pricing" className="py-2 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
            <CreditCard className="h-4 w-4 mr-2" /> Scaled pricing based on growth
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Pricing that grows with you
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            All features included from day one.
            You only pay more as you grow and we gain more clients.
          </p>

          <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2 border">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              <Zap className="h-3 w-3 mr-1" />
              30 days free
            </Badge>
            <span className="text-sm">No commitment • Cancel anytime</span>
          </div>
        </div>

        {/* Pricing Path */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 transform -translate-y-1/2"></div>
            
            {/* Pricing Tiers */}
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {pricingTiers.map((tier, index) => (
                <Card 
                  key={index} 
                  className={`relative transition-all duration-300 hover:shadow-xl text-center ${tier.isActive ? 'border-2 border-primary shadow-lg bg-primary/5' : 'border border-border bg-background'}`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${tier.isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4 pt-8">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold">{tier.range}</h3>
                      <p className="text-sm text-muted-foreground">{tier.description}</p>
                      
                      <div className="space-y-1">
                        <div className="flex items-baseline justify-center space-x-1">
                          <span className="text-3xl font-bold">€{tier.price}</span>
                          <span className="text-sm text-muted-foreground">/mes total</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <Button
                      className={`w-full ${tier.isActive ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`}
                      onClick={scrollToContact}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* All Features Included */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="text-center pb-6">
              <h3 className="text-2xl font-bold">All features included</h3>
              <p className="text-muted-foreground">No restrictions at any price level</p>
            </CardHeader>
            
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center space-y-6 max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2 p-4 rounded-lg bg-muted/20">
              <div className="font-semibold">💳 No surprises</div>
              <div className="text-sm text-muted-foreground">Transparent pricing with no hidden costs</div>
            </div>
            <div className="space-y-2 p-4 rounded-lg bg-muted/20">
              <div className="font-semibold">🔄 Free migration</div>
              <div className="text-sm text-muted-foreground">We help you import your current data</div>
            </div>
          </div>

          <div className="pt-6 border-t border-border/50">
            <div className="text-sm text-muted-foreground">
              Need a custom plan or have questions?
              <button onClick={scrollToContact} className="text-primary hover:underline font-medium ml-1">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};