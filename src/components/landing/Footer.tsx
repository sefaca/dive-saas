import { Mail, Phone, MapPin, Linkedin, ArrowRight, Shield, Zap, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-b from-card to-ocean-deep/5 border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 py-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Waves className="h-12 w-12 text-ocean-tropical" />
                <div>
                  <h3 className="text-2xl font-bold">Dive<span className="text-ocean-tropical">SaaS</span></h3>
                  <p className="text-xs text-muted-foreground">Professional Dive Center Management</p>
                </div>
              </div>
              <p className="text-muted-foreground max-w-md">
                The all-in-one platform for digital dive center management. Designed to optimize operations and improve the experience for staff and customers.
              </p>
            </div>

            {/* Founders */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Founders</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.linkedin.com/in/aure1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-ocean-tropical transition-colors group"
                >
                  <Linkedin className="h-4 w-4 flex-shrink-0 group-hover:text-[#0077B5]" />
                  <span>Aurelio Contreras</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sergio-falc%C3%B3n-de-la-calle-083787195/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-ocean-tropical transition-colors group"
                >
                  <Linkedin className="h-4 w-4 flex-shrink-0 group-hover:text-[#0077B5]" />
                  <span>Sergio Falcón</span>
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-4">
              <div className="flex items-center space-x-2 text-sm font-medium mb-3">
                <Mail className="h-4 w-4 text-ocean-tropical" />
                <span>Subscribe to our newsletter</span>
              </div>
              <div className="flex space-x-2">
                <Input type="email" placeholder="Your email" className="flex-1 text-sm" />
                <Button size="sm" className="shrink-0 bg-ocean-tropical hover:bg-ocean-deep">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Product Column */}
          <div className="space-y-5">
            <h4 className="font-semibold text-lg">Platform</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-ocean-tropical transition-colors flex items-center">
                  <div className="w-1 h-1 bg-ocean-tropical rounded-full mr-2"></div>
                  Features
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-ocean-tropical transition-colors flex items-center">
                  <div className="w-1 h-1 bg-ocean-tropical rounded-full mr-2"></div>
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-ocean-tropical transition-colors flex items-center">
                  <div className="w-1 h-1 bg-ocean-tropical rounded-full mr-2"></div>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-ocean-tropical transition-colors flex items-center">
                  <div className="w-1 h-1 bg-ocean-tropical rounded-full mr-2"></div>
                  Free Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ocean-tropical transition-colors flex items-center">
                  <div className="w-1 h-1 bg-ocean-tropical rounded-full mr-2"></div>
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-5">
            <h4 className="font-semibold text-lg">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-ocean-tropical transition-colors flex items-center">
                  <div className="w-1 h-1 bg-ocean-tropical rounded-full mr-2"></div>
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ocean-tropical transition-colors flex items-center">
                  <div className="w-1 h-1 bg-ocean-tropical rounded-full mr-2"></div>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ocean-tropical transition-colors flex items-center">
                  <div className="w-1 h-1 bg-ocean-tropical rounded-full mr-2"></div>
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ocean-tropical transition-colors flex items-center">
                  <div className="w-1 h-1 bg-ocean-tropical rounded-full mr-2"></div>
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ocean-tropical transition-colors flex items-center">
                  <div className="w-1 h-1 bg-ocean-tropical rounded-full mr-2"></div>
                  API Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-5">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-ocean-tropical mt-0.5 flex-shrink-0" />
                <span>sefaca24@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-ocean-tropical mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/34662632906" target="_blank" rel="noopener noreferrer" className="hover:text-ocean-tropical transition-colors">
                  Contact us on WhatsApp
                </a>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-ocean-tropical mt-0.5 flex-shrink-0" />
                <span>Seville, Spain</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 space-y-2">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Shield className="h-3 w-3 text-ocean-marine" />
                <span>GDPR protected data</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Zap className="h-3 w-3 text-ocean-coral" />
                <span>99.9% uptime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-ocean-tropical/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} DiveSaaS. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="/privacy" className="hover:text-ocean-tropical transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-ocean-tropical transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-ocean-tropical transition-colors">Cookies</a>
            </div>

            <Button variant="ghost" size="sm" onClick={scrollToTop} className="text-muted-foreground hover:text-ocean-tropical">
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Input component for newsletter
const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-tropical focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};
