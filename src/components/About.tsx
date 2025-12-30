import { Code, Mic, Brain, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Coding Enthusiast",
      description: "Passionate about creating elegant solutions and exploring new technologies"
    },
    {
      icon: Mic,
      title: "Brilliant Orator",
      description: "Skilled in public speaking and communicating complex technical concepts"
    },
    {
      icon: Brain,
      title: "AI Explorer",
      description: "Diving deep into artificial intelligence and machine learning"
    },
    {
      icon: Star,
      title: "Co-curricular Leader",
      description: "Active in various activities beyond academics with a diverse background"
    }
  ];

  return (
    <section className="py-20 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-5xl lg:text-6xl font-bold mb-6 text-gradient glow-text">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-lg text-foreground leading-relaxed mb-4">
              <span className="font-mono text-primary">[INFO]</span> I'm a passionate learner eager to explore every aspect of computer science and technology.
            </p>
            <p className="font-body text-lg text-foreground leading-relaxed">
              <span className="font-mono text-secondary">[MISSION]</span> From coding to public speaking, I love taking on new challenges and growing through diverse experiences.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-card to-muted border border-primary/30 hover:border-accent/60 shadow-medium hover:shadow-neon-cyan transition-bounce group cursor-pointer transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-bounce shadow-neon-cyan group-hover:shadow-neon-lime animate-glow">
                  <item.icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground group-hover:text-gradient transition-smooth">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  <span className="font-mono text-accent">&gt;</span> {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto card-gradient rounded-3xl p-8 shadow-medium">
            <h3 className="text-2xl font-bold mb-4 text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              As an AI enthusiast, I'm constantly learning and adapting to the rapidly evolving tech landscape. 
              My goal is to combine technical expertise with strong communication skills to make meaningful 
              contributions to the field of computer science. Whether it's through coding innovative solutions, 
              speaking at events, or leading co-curricular activities, I'm always ready to take on new challenges 
              and grow from every experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;