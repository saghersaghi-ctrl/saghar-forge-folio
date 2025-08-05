import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ExternalLink, Youtube } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  software: string[];
  images: string[];
  youtubeUrl?: string;
  externalUrl?: string;
}

interface PortfolioModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const PortfolioModal = ({ item, isOpen, onClose }: PortfolioModalProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  if (!item) return null;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto modal-shadow bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">{item.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Image Slider */}
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-engineering-light to-muted flex items-center justify-center">
              <span className="text-engineering-gray text-lg">Project Image {currentImage + 1}</span>
            </div>
            
            {item.images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
            
            {/* Image indicators */}
            {item.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {item.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImage ? 'bg-primary' : 'bg-background/50'
                    }`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Project Description</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {item.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Software Used</h3>
              <div className="flex flex-wrap gap-2">
                {item.software.map((software, index) => (
                  <Badge key={index} variant="secondary" className="bg-engineering-light text-engineering-blue">
                    {software}
                  </Badge>
                ))}
              </div>
            </div>

            {/* External Links */}
            {(item.youtubeUrl || item.externalUrl) && (
              <div className="flex gap-3 pt-4">
                {item.youtubeUrl && (
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={item.youtubeUrl} target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-4 w-4" />
                      Watch Video
                    </a>
                  </Button>
                )}
                {item.externalUrl && (
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={item.externalUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal;