import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden scan-lines">
      {/* Cyberpunk background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-glow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-secondary/20 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute top-10 right-1/3 w-16 h-16 bg-primary/30 rounded-full blur-md animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="font-heading text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight glow-text">
                Hi, I'm{" "}
                <span className="text-gradient animate-gradient-shift">
                  Aishwarya
                </span>
              </h1>
              <p className="font-body text-xl lg:text-2xl text-primary mb-2 leading-relaxed font-medium">
                <span className="font-mono text-accent">&gt;</span> Coding Enthusiast
              </p>
              <p className="font-body text-xl lg:text-2xl text-secondary mb-2 leading-relaxed font-medium">
                <span className="font-mono text-accent">&gt;</span> Brilliant Orator
              </p>
              <p className="font-body text-xl lg:text-2xl text-primary mb-8 leading-relaxed font-medium">
                <span className="font-mono text-accent">&gt;</span> AI Explorer
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="font-heading font-semibold bg-gradient-to-r from-primary to-secondary text-background hover:shadow-neon-cyan transition-bounce transform hover:scale-105 border-0"
                >
                  View My Work
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="font-heading font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-background transition-bounce transform hover:scale-105 hover:shadow-neon-lime"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-1 max-w-md">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl transform rotate-6 scale-105 opacity-40 animate-float group-hover:opacity-60 transition-smooth shadow-neon-cyan"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-3xl transform -rotate-3 scale-110 opacity-30 animate-float shadow-neon-magenta" style={{animationDelay: '1s'}}></div>
              <img 
                src="/aishwarya-profile.jpg" 
                alt="Aishwarya Saksena - AI Enthusiast and Coding Expert"
                className="relative z-10 w-full h-auto rounded-3xl shadow-xl border-4 border-primary/60 backdrop-blur-sm animate-fade-in transform group-hover:scale-105 transition-bounce hover:shadow-neon-cyan"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-accent animate-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;