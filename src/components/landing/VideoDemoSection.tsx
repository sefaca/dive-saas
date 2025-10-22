import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play, X } from "lucide-react";

const VideoDemoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full py-20 bg-gradient-to-br from-background via-ocean-tropical/5 to-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Discover how DiveSaaS transforms dive center management with our interactive demonstration
          </h2>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-ocean-deep to-ocean-tropical hover:from-ocean-deep/90 hover:to-ocean-tropical/90 text-white px-8 py-4 h-auto">
                <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="text-lg font-semibold">Watch Live Demo</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-4xl w-full p-0 bg-background">
              <div className="relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                  {/* Video placeholder - replace with your dive center demo video */}
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/bCmQ-2syyoE?autoplay=1"
                    title="DiveSaaS Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-ocean-tropical/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-ocean-deep font-bold">5</span>
              </div>
              <p className="text-sm text-muted-foreground">Minute demo</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-ocean-tropical/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-ocean-deep font-bold">✓</span>
              </div>
              <p className="text-sm text-muted-foreground">Key features</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-ocean-tropical/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-ocean-deep font-bold">🎯</span>
              </div>
              <p className="text-sm text-muted-foreground">Real use cases</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemoSection;
