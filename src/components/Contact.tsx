import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Let's discuss opportunities",
      action: "Send Email",
      href: "mailto:aishwarya@example.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect professionally",
      action: "Connect",
      href: "#"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code",
      action: "Follow",
      href: "#"
    },
    {
      icon: MessageCircle,
      title: "Let's Chat",
      description: "Open to collaborations",
      action: "Start Conversation",
      href: "#"
    }
  ];

  return (
    <section className="py-20 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-5xl lg:text-6xl font-bold mb-6 text-gradient glow-text">
            Let's Connect
          </h2>
          <p className="font-body text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
            <span className="font-mono text-primary">[CONNECT]</span> I'm always excited to collaborate on new projects, discuss tech innovations, or simply connect with fellow enthusiasts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-card to-muted border border-accent/30 hover:border-primary/60 shadow-medium hover:shadow-neon-lime transition-bounce transform hover:-translate-y-2 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-bounce shadow-neon-cyan group-hover:shadow-neon-lime group-hover:rotate-6 animate-glow">
                  <method.icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground group-hover:text-gradient transition-smooth">
                  {method.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-4">
                  <span className="font-mono text-accent">&gt;</span> {method.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="font-body border-2 border-primary/40 text-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-background hover:border-accent transition-bounce hover:scale-105 hover:shadow-neon-cyan"
                  asChild
                >
                  <a href={method.href}>
                    {method.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="max-w-3xl mx-auto card-gradient rounded-3xl p-8 shadow-medium">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Collaborate?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether you have a project idea, want to discuss AI and technology trends, 
              or are looking for someone passionate about coding and innovation, I'd love to hear from you!
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-accent text-white border-0 shadow-primary hover:shadow-xl transition-bounce transform hover:scale-105 hover:-translate-y-1"
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;