import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, CheckCircle, Calendar, Clock, User, Users, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clubName: "",
    clubSize: "",
    role: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    toast
  } = useToast();
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Request Submitted!",
      description: "We'll contact you within the next 24 hours."
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        clubName: "",
        clubSize: "",
        role: "",
        message: ""
      });
    }, 3000);
  };
  if (isSubmitted) {
    return <section id="contact" className="py-20 bg-gradient-to-br from-ocean-deep/5 to-ocean-tropical/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-ocean-tropical/20 shadow-lg">
              <CardContent className="p-12 space-y-6">
                <div className="w-16 h-16 bg-ocean-tropical/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-ocean-tropical" />
                </div>
                <h2 className="text-3xl font-bold">Thank you for your interest!</h2>
                <p className="text-muted-foreground">
                  We've received your demo request. Our team will contact you
                  within the next 24 hours to schedule a personalized demonstration.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>What's next?</strong><br />
                    We'll call or email you to coordinate the best time for your personalized demo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>;
  }
  return <section id="contact" className="py-2 bg-gradient-to-br from-ocean-deep/5 to-ocean-tropical/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-ocean-tropical/10 px-4 py-2 text-sm font-medium text-ocean-deep mb-6">
            <Calendar className="h-4 w-4 mr-2" /> Schedule a demo
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to transform your dive center?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Request a personalized demo and discover how DiveSaaS can optimize your dive center management and improve the experience for everyone.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Personalized Demo</h3>
              <p className="text-muted-foreground">Our specialists will show you how DiveSaaS adapts to the specific needs of your dive center.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border">
                <div className="w-12 h-12 bg-ocean-tropical/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-ocean-deep" />
                </div>
                <div>
                  <h3 className="font-semibold">30 minutes</h3>
                  <p className="text-muted-foreground">Approximate duration</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border">
                <div className="w-12 h-12 bg-ocean-tropical/10 rounded-lg flex items-center justify-center">
                  <User className="h-6 w-6 text-ocean-deep" />
                </div>
                <div>
                  <h3 className="font-semibold">1-on-1</h3>
                  <p className="text-muted-foreground">Personalized attention</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border">
                <div className="w-12 h-12 bg-ocean-tropical/10 rounded-lg flex items-center justify-center">
                  <Send className="h-6 w-6 text-ocean-deep" />
                </div>
                <div>
                  <h3 className="font-semibold">Follow-up</h3>
                  <p className="text-muted-foreground">Materials and post-demo support</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border space-y-4">
              <h3 className="font-semibold">What's included in the demo?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-ocean-tropical flex-shrink-0" />
                  <span className="text-sm">Complete platform tour</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-ocean-tropical flex-shrink-0" />
                  <span className="text-sm">Configuration for your dive center type</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-ocean-tropical flex-shrink-0" />
                  <span className="text-sm">Personalized ROI analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-ocean-tropical flex-shrink-0" />
                  <span className="text-sm">Answers to all your questions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="border-ocean-tropical/20 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      Name *
                    </Label>
                    <Input id="name" value={formData.name} onChange={e => handleInputChange("name", e.target.value)} placeholder="Your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center">
                      <Phone className="h-4 w-4 mr-1" />
                      Phone
                    </Label>
                    <Input id="phone" value={formData.phone} onChange={e => handleInputChange("phone", e.target.value)} placeholder="+1 345 000 0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center">
                    <Mail className="h-4 w-4 mr-1" />
                    Email *
                  </Label>
                  <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange("email", e.target.value)} placeholder="your@email.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clubName" className="flex items-center">
                    <Building className="h-4 w-4 mr-1" />
                    Dive Center Name
                  </Label>
                  <Input id="clubName" value={formData.clubName} onChange={e => handleInputChange("clubName", e.target.value)} placeholder="Ocean Adventures Dive Center" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="clubSize">Center Size</Label>
                    <Select value={formData.clubSize} onValueChange={value => handleInputChange("clubSize", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (1-2 boats)</SelectItem>
                        <SelectItem value="medium">Medium (3-5 boats)</SelectItem>
                        <SelectItem value="large">Large (6+ boats)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <Select value={formData.role} onValueChange={value => handleInputChange("role", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="owner">Owner</SelectItem>
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="instructor">Instructor</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea id="message" value={formData.message} onChange={e => handleInputChange("message", e.target.value)} placeholder="Tell us about your dive center and what you'd like to improve..." rows={4} />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-ocean-deep to-ocean-tropical hover:from-ocean-deep/90 hover:to-ocean-tropical/90 shadow-md shadow-ocean-tropical/25" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </> : <>
                      Request Free Demo
                      <Send className="ml-2 h-4 w-4" />
                    </>}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our Privacy Policy and to receive
                  information about DiveSaaS. You can unsubscribe at any time.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Methods */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-card border">
            <div className="w-12 h-12 bg-ocean-tropical/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-ocean-deep" />
            </div>
            <h3 className="font-semibold mb-2">Call Us</h3>
            <a href="https://wa.me/34662632906" target="_blank" rel="noopener noreferrer" className="text-ocean-tropical hover:text-ocean-tropical/80 transition-colors">
              Contact us on WhatsApp
            </a>
            <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9:00-18:00</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card border">
            <div className="w-12 h-12 bg-ocean-tropical/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-ocean-deep" />
            </div>
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-muted-foreground">sefaca24@gmail.com</p>
            <p className="text-sm text-muted-foreground mt-1">24h response time</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card border">
            <div className="w-12 h-12 bg-ocean-tropical/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-ocean-deep" />
            </div>
            <h3 className="font-semibold mb-2">Visit Us</h3>
            <p className="text-muted-foreground">Cayman Islands</p>
            <p className="text-sm text-muted-foreground mt-1">By appointment</p>
          </div>
        </div>
      </div>
    </section>;
};