import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Waves, LogIn, Ship, Users, Anchor } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const LandingHero = () => {
  const navigate = useNavigate();

  const scrollToContact = (event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log('Button clicked: Scrolling to contact section...');

    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      console.log('Contact section found:', !!contactSection);

      if (contactSection) {
        try {
          contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          console.log('ScrollIntoView executed successfully');
        } catch (error) {
          console.warn('ScrollIntoView failed, using fallback:', error);
          const rect = contactSection.getBoundingClientRect();
          const scrollTop = window.pageYOffset + rect.top - 100;
          window.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
          });
        }
      } else {
        console.error('Contact section not found in DOM');
      }
    }, 500);
  };

  const scrollToDemo = (event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log('Button clicked: Scrolling to workflow section...');

    setTimeout(() => {
      const workflowSection = document.getElementById('workflow');
      console.log('Workflow section found:', !!workflowSection);

      if (workflowSection) {
        try {
          workflowSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          console.log('ScrollIntoView executed successfully');
        } catch (error) {
          console.warn('ScrollIntoView failed, using fallback:', error);
          const rect = workflowSection.getBoundingClientRect();
          const scrollTop = window.pageYOffset + rect.top - 100;
          window.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
          });
        }
      } else {
        console.error('Workflow section not found in DOM');
      }
    }, 500);
  };

  const goToAuth = (event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log('Button clicked: Navigating to auth...');

    try {
      navigate('/auth');
      console.log('Navigation executed successfully');
    } catch (error) {
      console.warn('Navigate failed, using fallback:', error);
      window.location.href = '/auth';
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-ocean-deep/5 via-background to-ocean-tropical/5 py-8 lg:py-12">
      <div className="container max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full min-h-[600px]">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Logo */}
            <div className="mb-0">
              <div className="flex items-center gap-4">
                <Waves className="h-16 lg:h-20 w-16 lg:w-20 text-ocean-tropical drop-shadow-lg" />
                <div>
                  <h2 className="text-5xl lg:text-6xl font-bold text-foreground">
                    Dive<span className="text-ocean-tropical">SaaS</span>
                  </h2>
                  <p className="text-ocean-tropical-light text-sm lg:text-base">Professional Dive Center Management</p>
                </div>
              </div>
            </div>

            {/* Title and Description */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                Manage your dive center like a pro
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Complete software designed for dive centers, instructors, and customers. Save time and money managing trips, staff, training programs, and equipment.
              </p>
            </div>

            {/* Key Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-ocean-tropical/5 border border-ocean-tropical/10">
                <div className="w-3 h-3 bg-ocean-tropical rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium">Advanced trip scheduling</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-ocean-tropical/5 border border-ocean-tropical/10">
                <div className="w-3 h-3 bg-ocean-tropical rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium">Instructor dashboard</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-ocean-tropical/5 border border-ocean-tropical/10">
                <div className="w-3 h-3 bg-ocean-tropical rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium">Customer CRM system</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-ocean-tropical/5 border border-ocean-tropical/10">
                <div className="w-3 h-3 bg-ocean-tropical rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium">Equipment tracking</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <Button
                size="lg"
                className="bg-gradient-to-r from-ocean-deep to-ocean-tropical hover:from-ocean-deep/90 hover:to-ocean-tropical/90 text-white shadow-lg shadow-ocean-tropical/25 relative z-10 pointer-events-auto"
                onClick={(e) => scrollToContact(e)}
              >
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={(e) => scrollToDemo(e)}
                className="border-2 border-ocean-deep hover:bg-ocean-deep/5 relative z-10 pointer-events-auto"
              >
                <Play className="mr-2 h-4 w-4" />
                See Features
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-ocean-marine rounded-full"></div>
                <span>Secure & encrypted data</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-ocean-marine rounded-full"></div>
                <span>24h implementation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-ocean-marine rounded-full"></div>
                <span>Priority support</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative w-full max-w-full">
            <div className="relative mx-auto max-w-md lg:max-w-lg w-full">
              {/* Main Dashboard Card */}
              <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-card rounded-2xl p-5 shadow-2xl border border-ocean-tropical/20">
                  <div className="bg-gradient-to-br from-ocean-tropical/15 to-ocean-deep/15 rounded-xl p-6 space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-ocean-tropical/20 rounded-lg">
                          <Ship className="h-5 w-5 text-ocean-deep" />
                        </div>
                        <span className="font-semibold">Dive Center Dashboard</span>
                      </div>
                      <div className="text-xs bg-ocean-tropical/20 text-ocean-deep px-2 py-1 rounded-full">Today</div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-background/80 rounded-xl p-4 border border-ocean-tropical/10">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-sm font-medium">Reef Discovery - Boat 1</div>
                            <div className="text-xs text-muted-foreground mt-1">09:00 - 11:30 • 8/12 divers</div>
                          </div>
                          <div className="text-xs bg-ocean-marine/20 text-ocean-marine px-2 py-1 rounded-full">Active</div>
                        </div>
                      </div>

                      <div className="bg-background/80 rounded-xl p-4 border border-ocean-tropical/10">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-sm font-medium">New bookings</div>
                            <div className="text-xs text-muted-foreground mt-1">5 customers waiting confirmation</div>
                          </div>
                          <Button variant="outline" size="sm" className="h-7 text-xs border-ocean-deep hover:bg-ocean-deep/5">
                            Manage
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-card rounded-xl p-4 shadow-lg border border-ocean-tropical/20 w-40">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-ocean-marine/20 rounded-lg">
                    <Users className="h-4 w-4 text-ocean-marine" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Divers</div>
                    <div className="font-bold text-lg">342</div>
                  </div>
                </div>
              </div>

              {/* Mobile App Preview */}
              <div className="absolute -top-8 -right-8 z-0 transform -rotate-6 hover:-rotate-3 transition-transform duration-500">
                <div className="bg-card rounded-2xl p-3 shadow-xl border border-ocean-tropical/20 scale-90">
                  <div className="bg-gradient-to-br from-ocean-deep/15 to-ocean-tropical/15 rounded-lg p-4 space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1.5 bg-ocean-tropical/20 rounded-lg">
                        <Anchor className="h-4 w-4 text-ocean-deep" />
                      </div>
                      <span className="text-sm font-semibold">Instructor App</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-background/70 rounded-lg p-2">
                        <div className="text-xs font-medium">Next dive: 14:00</div>
                      </div>
                      <div className="bg-background/70 rounded-lg p-2">
                        <div className="text-xs">4 spots available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements - Ocean bubbles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-ocean-tropical/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ocean-deep/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
    </section>
  );
};
