import { Card } from "@/components/ui/card";
import { Heart, Users, Target, Zap } from "lucide-react";

export function SixFsFramework() {
  const frameworks = [
    {
      icon: Heart,
      title: "Faith",
      description: "Deepen your spiritual connection and divine alignment",
    },
    {
      icon: Users,
      title: "Family",
      description: "Strengthen relationships and create lasting bonds",
    },
    {
      icon: Users,
      title: "Friends",
      description: "Build meaningful connections and supportive community",
    },
    {
      icon: Target,
      title: "Finances",
      description: "Remove income blocks and create abundance",
    },
    {
      icon: Zap,
      title: "Freedom",
      description: "Live authentically aligned with your purpose",
    },
    {
      icon: Heart,
      title: "Fitness",
      description: "Nurture physical and mental well-being",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest mb-4">
            HOLISTIC APPROACH
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            The Six F's Framework
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            A comprehensive approach to transformation that addresses every
            aspect of your life
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworks.map((item, index) => (
            <Card
              key={index}
              className="p-8 bg-background border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <item.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
