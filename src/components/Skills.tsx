import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"]
    },
    {
      category: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Data Analysis", "Deep Learning", "NLP"]
    },
    {
      category: "Web Technologies",
      skills: ["React", "Node.js", "HTML/CSS", "REST APIs", "Git", "Databases"]
    },
    {
      category: "Soft Skills",
      skills: ["Public Speaking", "Leadership", "Project Management", "Team Collaboration", "Problem Solving"]
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-5xl lg:text-6xl font-bold mb-6 text-gradient glow-text">
            Skills & Expertise
          </h2>
          <p className="font-body text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
            <span className="font-mono text-primary">[STACK]</span> A diverse toolkit spanning technical programming skills to leadership and communication
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-gradient-to-br from-card to-muted border border-secondary/30 hover:border-accent/60 rounded-2xl p-8 shadow-medium hover:shadow-neon-magenta transition-bounce transform hover:-translate-y-1 group"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="font-heading text-2xl font-bold mb-6 text-foreground group-hover:text-gradient transition-smooth">
                <span className="font-mono text-accent">[{categoryIndex + 1}]</span> {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary" 
                    className="font-body bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 text-foreground border border-primary/30 hover:border-accent/60 hover:shadow-neon-cyan transition-bounce px-4 py-2 text-sm font-medium hover:scale-105 cursor-pointer"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Always Learning
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Technology evolves rapidly, and so do I. I'm committed to continuous learning and staying 
              current with the latest developments in AI, programming languages, and emerging technologies. 
              Every project is an opportunity to grow and every challenge is a chance to innovate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;