import { ArrowRight, Ship, Bell, CreditCard, CheckCircle, Users, Waves } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const workflowSteps = [
  {
    icon: Ship,
    title: "Create Dive Trip",
    description: "Instructor schedules a new dive trip from their mobile app or dashboard",
    color: "bg-ocean-deep",
  },
  {
    icon: Users,
    title: "System Manages Bookings",
    description: "Platform automatically controls available spots and waitlist",
    color: "bg-ocean-tropical",
  },
  {
    icon: Bell,
    title: "Auto Notifications",
    description: "When a spot opens, customers receive instant email/SMS notifications",
    color: "bg-ocean-marine",
  },
  {
    icon: CheckCircle,
    title: "Customer Books",
    description: "Divers click the link and book their spot directly",
    color: "bg-ocean-coral",
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Customers complete payment through integrated payment system",
    color: "bg-ocean-tropical",
  },
  {
    icon: Waves,
    title: "Confirmation Sent",
    description: "Automatic booking confirmation with trip details sent via email",
    color: "bg-ocean-deep",
  },
];

export const WorkflowDiagram = () => {
  return (
    <section id="workflow" className="py-20 bg-gradient-to-b from-background to-ocean-tropical/5">
      <div className="container max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How does DiveSaaS work?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete automation from trip creation to payment confirmation
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {workflowSteps.map((step, index) => (
              <div key={index}>
                <Card className="border-l-4 border-l-ocean-tropical/30 hover:border-l-ocean-tropical transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${step.color} text-white flex-shrink-0`}>
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="bg-ocean-tropical text-white text-sm font-bold px-2 py-1 rounded">
                            {index + 1}
                          </span>
                          <h3 className="font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {index < workflowSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight className="h-6 w-6 text-ocean-tropical rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-8">
              {/* First Row */}
              {workflowSteps.slice(0, 3).map((step, index) => (
                <div key={index} className="relative">
                  <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-ocean-tropical/10">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg`}>
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="space-y-2">
                        <div className="bg-ocean-tropical text-white text-sm font-bold px-3 py-1 rounded-full inline-block">
                          Step {index + 1}
                        </div>
                        <h3 className="font-semibold text-lg">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                  {index < 2 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-ocean-tropical" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Arrow to second row */}
            <div className="flex justify-end my-4 pr-[40%]">
              <ArrowRight className="h-6 w-6 text-ocean-tropical rotate-90" />
            </div>

            {/* Second Row (reversed) */}
            <div className="grid grid-cols-3 gap-8">
              {workflowSteps.slice(3).reverse().map((step, index) => {
                const actualIndex = workflowSteps.length - 1 - index;
                return (
                  <div key={actualIndex} className="relative">
                    <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-ocean-tropical/10">
                      <CardContent className="p-6 text-center space-y-4">
                        <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg`}>
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="space-y-2">
                          <div className="bg-ocean-tropical text-white text-sm font-bold px-3 py-1 rounded-full inline-block">
                            Step {actualIndex + 1}
                          </div>
                          <h3 className="font-semibold text-lg">{step.title}</h3>
                          <p className="text-muted-foreground text-sm">{step.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                    {index < 2 && (
                      <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
                        <ArrowRight className="h-6 w-6 text-ocean-tropical rotate-180" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-ocean-deep/5 to-ocean-tropical/5 border-ocean-tropical/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-ocean-deep">90%</div>
                  <div className="text-sm text-muted-foreground">Time saved</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-ocean-tropical">100%</div>
                  <div className="text-sm text-muted-foreground">Automated</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-ocean-marine">24/7</div>
                  <div className="text-sm text-muted-foreground">Available</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
