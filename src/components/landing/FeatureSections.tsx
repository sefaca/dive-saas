import { Ship, Users, UserCog, GraduationCap, BarChart3, Wrench, Calendar, Bell, FileCheck, Waves, Clock, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Ship,
    title: "Trip Management",
    description: "Complete dive trip scheduling and booking system to maximize your dive center operations.",
    items: [
      "Trip scheduling and planning",
      "Real-time availability tracking",
      "Automated booking confirmations",
      "Trip history and logs",
      "Multi-boat coordination"
    ]
  },
  {
    icon: UserCog,
    title: "Staff Management",
    description: "Efficiently manage instructors, dive masters, and crew with comprehensive tools.",
    items: [
      "Instructor and dive master profiles",
      "Staff scheduling and assignments",
      "Holiday and vacation tracking",
      "Certification management",
      "Performance monitoring"
    ]
  },
  {
    icon: Users,
    title: "Customer CRM",
    description: "Powerful customer relationship management to keep your divers engaged and informed.",
    items: [
      "Complete customer database",
      "Certification tracking (PADI, SSI, etc.)",
      "Automated email notifications",
      "Customer paperwork management",
      "Dive log integration"
    ]
  },
  {
    icon: GraduationCap,
    title: "Training Programs",
    description: "Organize diving certifications and training programs efficiently.",
    items: [
      "Certification program scheduling",
      "Multi-level PADI certifications",
      "Student progress tracking",
      "Training materials management",
      "Instructor assignment"
    ]
  },
  {
    icon: BarChart3,
    title: "Statistics & Reports",
    description: "Make data-driven decisions with comprehensive analytics and reporting tools.",
    items: [
      "Revenue and booking analytics",
      "Customer acquisition metrics",
      "Trip performance reports",
      "Staff utilization statistics",
      "Exportable reports and data"
    ]
  },
  {
    icon: Wrench,
    title: "Equipment Maintenance",
    description: "Track and maintain dive equipment, boats, and facilities for safety and compliance.",
    items: [
      "Equipment inventory tracking",
      "Maintenance scheduling and logs",
      "Boat service management",
      "Safety inspection records",
      "Rental equipment tracking"
    ]
  }
];

export const FeatureSections = () => {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-background to-ocean-tropical/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Everything you need for your dive center
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A complete platform that centralizes trip management, automates processes, and enhances
            the experience for administrators, instructors, and divers.
          </p>
        </div>

        <div className="grid gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-ocean-tropical hover:border-l-ocean-deep overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-5 gap-6 items-start">
                  <div className="lg:col-span-2 bg-gradient-to-br from-ocean-tropical/5 to-ocean-deep/5 p-6 h-full">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-ocean-tropical/10 rounded-xl group-hover:bg-ocean-tropical/20 transition-colors">
                          <feature.icon className="h-6 w-6 text-ocean-deep" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{feature.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-3 p-6">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {feature.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3 p-3 rounded-lg bg-ocean-tropical/5 border border-ocean-tropical/10">
                          <div className="w-2 h-2 bg-ocean-tropical rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-ocean-tropical/5 to-ocean-tropical/10 hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto bg-ocean-tropical/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-ocean-tropical" />
              </div>
              <h3 className="text-lg font-bold mb-2">Time Savings</h3>
              <p className="text-muted-foreground text-sm">
                Automate administrative processes and focus on what matters most - diving.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-ocean-deep/5 to-ocean-deep/10 hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto bg-ocean-deep/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-ocean-deep" />
              </div>
              <h3 className="text-lg font-bold mb-2">Centralized Management</h3>
              <p className="text-muted-foreground text-sm">
                Everything in one place: trips, staff, divers, training programs, and equipment.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-ocean-marine/5 to-ocean-marine/10 hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto bg-ocean-marine/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-ocean-marine" />
              </div>
              <h3 className="text-lg font-bold mb-2">Quick Setup</h3>
              <p className="text-muted-foreground text-sm">
                Start managing your dive center professionally in less than 24 hours.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Features Highlight */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-ocean-deep to-ocean-tropical rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Built specifically for dive centers</h3>
              <p className="text-ocean-tropical-lighter">Designed by divers, for divers</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="font-semibold">Smart Scheduling</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3">
                  <Bell className="h-6 w-6" />
                </div>
                <div className="font-semibold">Auto Notifications</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3">
                  <FileCheck className="h-6 w-6" />
                </div>
                <div className="font-semibold">Digital Paperwork</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3">
                  <Waves className="h-6 w-6" />
                </div>
                <div className="font-semibold">Dive Logs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
