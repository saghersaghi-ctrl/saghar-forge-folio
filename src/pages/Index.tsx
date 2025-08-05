import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import PortfolioModal from "@/components/PortfolioModal";
import ContactForm from "@/components/ContactForm";
import { portfolioItems, PortfolioItem } from "@/data/portfolioData";
import { 
  ArrowDown, 
  Mail, 
  Linkedin, 
  MessageCircle, 
  Download,
  Wrench,
  Cog,
  Monitor,
  Zap,
  Trophy,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight
} from "lucide-react";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: PortfolioItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient blueprint-pattern overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Engr. Saghar Ali Rabbani
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-medium">
              Mechanical Engineer | Product Designer | Certified CAD Professional
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              You've got a brilliant product idea — I'll help you design it, validate it, 
              and get it production-ready with engineering precision and real-world feasibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gap-2 bg-white text-primary hover:bg-white/90 text-lg px-8 py-3"
                onClick={() => scrollToSection('portfolio')}
              >
                Explore Projects
                <ArrowDown className="h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
                onClick={() => scrollToSection('contact')}
              >
                Let's Connect
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/70" />
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 section-gradient" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 3 years of hands-on experience in mechanical and product design, 
              I bring together engineering precision, creative problem-solving, and real-world 
              manufacturing expertise to turn your ideas into reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center engineering-shadow transition-engineering hover:engineering-shadow-hover">
              <CardContent className="pt-6">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-2xl mb-2">3+ Years</h3>
                <p className="text-muted-foreground">Professional Experience</p>
              </CardContent>
            </Card>
            
            <Card className="text-center engineering-shadow transition-engineering hover:engineering-shadow-hover">
              <CardContent className="pt-6">
                <Badge className="h-12 w-12 text-primary mx-auto mb-4 p-3">
                  <span className="text-lg font-bold">13+</span>
                </Badge>
                <h3 className="font-bold text-2xl mb-2">Certifications</h3>
                <p className="text-muted-foreground">Including CSWPA credentials</p>
              </CardContent>
            </Card>
            
            <Card className="text-center engineering-shadow transition-engineering hover:engineering-shadow-hover">
              <CardContent className="pt-6">
                <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-2xl mb-2">50+ Projects</h3>
                <p className="text-muted-foreground">Completed successfully</p>
              </CardContent>
            </Card>
            
            <Card className="text-center engineering-shadow transition-engineering hover:engineering-shadow-hover">
              <CardContent className="pt-6">
                <Cog className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-2xl mb-2">DFM/DFA</h3>
                <p className="text-muted-foreground">Manufacturing expertise</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-20 bg-muted/30" id="journey">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Professional Journey</h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "Mechanical Design Engineer",
                  company: "MECHESOL CO., UK",
                  period: "Jul 2024–Present",
                  icon: <MapPin className="h-5 w-5" />
                },
                {
                  title: "Project Engineer", 
                  company: "MECHESOL CO., Pakistan",
                  period: "Jun 2023–Jun 2024",
                  icon: <Cog className="h-5 w-5" />
                },
                {
                  title: "Trainee Engineer",
                  company: "MECHESOL CO.",
                  period: "Apr–Jun 2023",
                  icon: <Trophy className="h-5 w-5" />
                },
                {
                  title: "Production Manager",
                  company: "Gracewear Pvt. Ltd.",
                  period: "Nov 2021–Present",
                  icon: <Monitor className="h-5 w-5" />
                },
                {
                  title: "Freelancer",
                  company: "CAD Design Expert",
                  period: "2021–Present",
                  icon: <Zap className="h-5 w-5" />
                }
              ].map((job, index) => (
                <Card key={index} className="engineering-shadow transition-engineering hover:engineering-shadow-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        {job.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-primary">{job.title}</h3>
                        <p className="text-lg text-foreground">{job.company}</p>
                        <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{job.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id="services">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Product Design & Development",
                "DFM / DFA Consulting", 
                "3D CAD Modeling (SolidWorks, Fusion 360)",
                "Reverse Engineering",
                "CNC & Injection Molding Support",
                "2D Drawings (GD&T per ASME)",
                "Simulation (FEA, CFD – ANSYS)",
                "Product Renders & Animations",
                "Prototyping (FDM/SLA)",
                "BOM & Engineering Documentation"
              ].map((service, index) => (
                <Card key={index} className="engineering-shadow transition-engineering hover:engineering-shadow-hover hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg">{service}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Software Expertise */}
      <section className="py-20 bg-muted/30" id="software">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-gradient">Software Expertise</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                "SolidWorks", "AutoCAD", "CATIA", "Fusion 360", 
                "Inventor", "ANSYS", "ABAQUS", "MATLAB",
                "LabView", "KeyShot", "Blender", "Adobe Ai",
                "Adobe PS", "Adobe Ae", "Adobe Pr", "PDM"
              ].map((software, index) => (
                <Badge key={index} variant="outline" className="p-3 text-sm font-medium">
                  {software}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20" id="portfolio">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Portfolio</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <Card 
                  key={item.id} 
                  className="engineering-shadow transition-engineering hover:engineering-shadow-hover hover:scale-105 cursor-pointer group"
                  onClick={() => openModal(item)}
                >
                  <div className="aspect-video bg-gradient-to-br from-engineering-light to-muted rounded-t-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-engineering-gray text-sm">Project Image</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{item.description}</p>
                    <Badge variant="secondary" className="bg-engineering-light text-engineering-blue">
                      {item.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20 bg-muted/30" id="why-me">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-gradient">Why Work With Me</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="engineering-shadow transition-engineering hover:engineering-shadow-hover">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-primary">30-Minute Free Consultation</h3>
                  <p className="text-muted-foreground">
                    Let's discuss your project requirements and explore how we can bring your ideas to life.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="engineering-shadow transition-engineering hover:engineering-shadow-hover">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Industry + Freelance Experience</h3>
                  <p className="text-muted-foreground">
                    Combining corporate project management with entrepreneurial flexibility and creativity.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="engineering-shadow transition-engineering hover:engineering-shadow-hover">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-primary">On-Time Delivery</h3>
                  <p className="text-muted-foreground">
                    Full documentation, real-time updates, and commitment to meeting your deadlines.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="engineering-shadow transition-engineering hover:engineering-shadow-hover">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Manufacturable Designs</h3>
                  <p className="text-muted-foreground">
                    Focused on scalable, cost-efficient designs that can actually be produced in the real world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Connect with Me</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="engineering-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary">Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <a href="mailto:sagharalirabbani@gmail.com" className="hover:text-primary transition-colors">
                        sagharalirabbani@gmail.com
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <a 
                        href="https://www.linkedin.com/in/engr-saghar-ali-rabbani-42b95b201" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      <a 
                        href="https://wa.me/qr/OESOOYNRKMXCC1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        WhatsApp Contact
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Modal */}
      <PortfolioModal 
        item={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      
      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Engr. Saghar Ali Rabbani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
