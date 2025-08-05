import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import PortfolioModal from "@/components/PortfolioModal";
import ContactForm from "@/components/ContactForm";
import TypingAnimation from "@/components/TypingAnimation";
import { portfolioItems, PortfolioItem } from "@/data/portfolioData";
import heroBg from "@/assets/hero-bg-professional.jpg";
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
  ChevronRight,
  Sparkles,
  Target,
  Users,
  Award
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800"></div>
        
        {/* Diffusing gradient overlays */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
        </div>
        
        {/* Subtle animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-primary/8 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            {/* Greeting */}
            <div className="text-lg md:text-xl text-slate-300 font-light tracking-wide">
              Hi, I'm
            </div>
            
            {/* Name */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent">
                Engr. Saghar Ali Rabbani
              </span>
            </h1>
            
            {/* Professional Title */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 max-w-3xl mx-auto">
              Mechanical Engineer & Certified Product Designer
            </h2>
            
            {/* Tagline */}
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-slate-300 font-light">
              Helping you transform technical ideas into production-ready, manufacturable products.
            </p>
            
            {/* Typing Animation */}
            <div className="py-4">
              <div className="text-lg md:text-xl text-primary/90 font-medium min-h-[2rem]">
                <TypingAnimation 
                  words={[
                    '3D CAD Modeling',
                    'Reverse Engineering', 
                    'Product Rendering & Animations',
                    'DFMA Consulting',
                    'Technical Drawings & GD&T',
                    'Simulation (FEA/CFD)',
                    'Prototyping Support'
                  ]}
                  className="font-mono tracking-wide"
                />
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg px-8 py-4 rounded-full font-semibold shadow-2xl hover:scale-105 hover:shadow-primary/25 transition-all duration-300"
                onClick={() => scrollToSection('portfolio')}
              >
                View Portfolio
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-lg px-8 py-4 rounded-full font-semibold backdrop-blur-sm hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Book a Free Consultation
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 mt-8 border-t border-white/10 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">8+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">150+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-slate-400">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-modern">Engineering Excellence</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              With over 3 years of hands-on experience in mechanical and product design, 
              I bring together engineering precision, creative problem-solving, and real-world 
              manufacturing expertise to turn your ideas into reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-modern scale-hover group">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-gradient-to-br from-primary to-primary-glow p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-3xl mb-2 text-foreground">3+ Years</h3>
                <p className="text-muted-foreground font-medium">Professional Experience</p>
              </CardContent>
            </Card>
            
            <Card className="card-modern scale-hover group">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-gradient-to-br from-modern-purple to-modern-cyan p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-3xl mb-2 text-foreground">13+</h3>
                <p className="text-muted-foreground font-medium">International Certifications</p>
              </CardContent>
            </Card>
            
            <Card className="card-modern scale-hover group">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-gradient-to-br from-modern-cyan to-modern-accent p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-3xl mb-2 text-foreground">50+</h3>
                <p className="text-muted-foreground font-medium">Projects Completed</p>
              </CardContent>
            </Card>
            
            <Card className="card-modern scale-hover group">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-gradient-to-br from-modern-accent to-primary p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cog className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-3xl mb-2 text-foreground">DFM/DFA</h3>
                <p className="text-muted-foreground font-medium">Manufacturing Expertise</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-20 relative overflow-hidden" id="journey">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Calendar className="h-4 w-4" />
                Career Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-modern">Professional Path</h2>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-modern-cyan to-modern-purple hidden md:block"></div>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Mechanical Design Engineer",
                    company: "MECHESOL CO. – Holborn, UK",
                    period: "July 2024 – Present",
                    achievements: [
                      "Led reverse engineering and FEA for critical retainer-based products",
                      "Supervised design customization and documentation for large-scale production"
                    ],
                    icon: <Wrench className="h-5 w-5" />,
                    gradient: "from-primary to-primary-glow"
                  },
                  {
                    title: "Project Engineer", 
                    company: "MECHESOL CO. – Multan, Pakistan",
                    period: "June 2023 – June 2024",
                    achievements: [
                      "Directed modeling, optimization & vendor communication",
                      "Delivered validated engineering designs for multinational clients"
                    ],
                    icon: <Cog className="h-5 w-5" />,
                    gradient: "from-modern-purple to-modern-cyan"
                  },
                  {
                    title: "Trainee Engineer",
                    company: "MECHESOL CO. – Multan, Pakistan",
                    period: "April 2023 – June 2023",
                    achievements: [
                      "Assisted senior engineers in drafting & 3D modeling",
                      "Supported documentation and design iteration for real projects"
                    ],
                    icon: <Trophy className="h-5 w-5" />,
                    gradient: "from-modern-cyan to-modern-accent"
                  },
                  {
                    title: "Production Manager",
                    company: "Gracewear Pvt. Ltd. – Rawat Industrial Estate",
                    period: "Nov 2021 – Present",
                    achievements: [
                      "Managed 20+ molding machines & supervised job scheduling",
                      "Ensured QC, machine maintenance & process flow"
                    ],
                    icon: <Monitor className="h-5 w-5" />,
                    gradient: "from-modern-accent to-primary"
                  },
                  {
                    title: "Freelance Designer",
                    company: "Remote",
                    period: "2021 – Present",
                    achievements: [
                      "Completed 50+ international projects in CAD, design for manufacturing, and rendering",
                      "Rated 5/5 on Fiverr with consistent client satisfaction"
                    ],
                    icon: <Zap className="h-5 w-5" />,
                    gradient: "from-primary to-modern-purple"
                  }
                ].map((job, index) => (
                  <div key={index} className="relative flex items-start gap-6 group">
                    {/* Timeline Dot */}
                    <div className={`relative z-10 bg-gradient-to-br ${job.gradient} p-3 rounded-full text-white shadow-lg group-hover:scale-110 transition-all duration-300 hidden md:flex items-center justify-center`}>
                      {job.icon}
                    </div>
                    
                    {/* Content Card */}
                    <Card className="card-modern scale-hover flex-1 ml-0 md:ml-2">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <h3 className="font-bold text-xl text-foreground mb-1">{job.title}</h3>
                          <p className="text-lg text-muted-foreground mb-2">{job.company}</p>
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{job.period}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {job.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-muted-foreground text-sm leading-relaxed">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Offer & Technical Expertise */}
      <section className="py-20 relative overflow-hidden" id="services">
        <div className="absolute inset-0 bg-gradient-subtle"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Wrench className="h-4 w-4" />
                Services & Expertise
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-modern">What I Offer & Technical Tools</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* What I Offer */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center text-foreground">What I Offer</h3>
                <div className="space-y-4">
                  {[
                    { name: "3D CAD Modeling", icon: <Cog className="h-5 w-5" /> },
                    { name: "Reverse Engineering", icon: <Wrench className="h-5 w-5" /> },
                    { name: "Product Rendering & Animations", icon: <Monitor className="h-5 w-5" /> },
                    { name: "DFMA Consulting", icon: <Target className="h-5 w-5" /> },
                    { name: "Technical Drawings & GD&T", icon: <Calendar className="h-5 w-5" /> },
                    { name: "Simulation (FEA/CFD)", icon: <Zap className="h-5 w-5" /> },
                    { name: "Prototyping Support", icon: <Trophy className="h-5 w-5" /> }
                  ].map((service, index) => (
                    <Card key={index} className="card-modern scale-hover group">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="bg-gradient-to-br from-primary to-primary-glow p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                          </div>
                          <h4 className="font-semibold text-foreground">{service.name}</h4>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Technical Tools */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Technical Tools I Use</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "SolidWorks", "Fusion 360", "AutoCAD", "Inventor", "CATIA",
                    "KeyShot", "Blender", "ANSYS", "MATLAB", "Adobe Illustrator", "Photoshop"
                  ].map((tool, index) => (
                    <Card key={index} className="card-modern scale-hover group text-center p-4 hover:shadow-elegant">
                      <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                        {tool}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20" id="portfolio">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Target className="h-4 w-4" />
                Portfolio
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-modern">⚙️ From Idea to Execution — My Recent Projects</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <Card 
                  key={item.id} 
                  className="card-modern scale-hover cursor-pointer group overflow-hidden"
                  onClick={() => openModal(item)}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary-glow/10 overflow-hidden relative">
                    <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="text-center">
                        <Cog className="h-12 w-12 text-primary mx-auto mb-2 animate-spin" style={{ animationDuration: '8s' }} />
                        <span className="text-muted-foreground text-sm font-medium">Project Preview</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 line-clamp-2 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">{item.description}</p>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                      {item.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work Together */}
      <section className="py-20 relative overflow-hidden bg-modern-dark" id="why-me">
        <div className="absolute inset-0 bg-gradient-to-br from-modern-dark to-modern-darker"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="h-4 w-4" />
                Why Choose Me
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Why Work Together</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Collaborative Mindset",
                  description: "I align closely with clients, incorporating feedback at every stage",
                  icon: <Users className="h-6 w-6" />,
                  gradient: "from-primary to-primary-glow"
                },
                {
                  title: "Precision Engineering", 
                  description: "Every design follows real-world feasibility and manufacturability principles",
                  icon: <Wrench className="h-6 w-6" />,
                  gradient: "from-modern-purple to-modern-cyan"
                },
                {
                  title: "Timely Delivery",
                  description: "I work fast without compromising detail — always deadline-conscious",
                  icon: <Calendar className="h-6 w-6" />,
                  gradient: "from-modern-cyan to-modern-accent"
                }
              ].map((item, index) => (
                <Card key={index} className="bg-white/5 border-white/10 scale-hover group backdrop-blur-md">
                  <CardContent className="p-8 text-center">
                    <div className={`bg-gradient-to-br ${item.gradient} p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Mail className="h-4 w-4" />
                Contact
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gradient-modern">Let's Connect</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <Card className="card-modern scale-hover">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground">Get in Touch</CardTitle>
                    <p className="text-muted-foreground">Ready to transform your ideas into reality?</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      { icon: <Mail className="h-5 w-5" />, text: "sagharalirabbani@gmail.com", href: "mailto:sagharalirabbani@gmail.com" },
                      { icon: <Linkedin className="h-5 w-5" />, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/engr-saghar-ali-rabbani-42b95b201" },
                      { icon: <MessageCircle className="h-5 w-5" />, text: "WhatsApp Contact", href: "https://wa.me/qr/OESOOYNRKMXCC1" }
                    ].map((contact, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group">
                        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                          {contact.icon}
                        </div>
                        <a href={contact.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium">
                          {contact.text}
                        </a>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PortfolioModal item={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
      
      <footer className="bg-gradient-to-r from-modern-dark to-modern-darker text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">&copy; 2024 Engr. Saghar Ali Rabbani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
