import { cn } from "@/lib/utils";

interface IconCardProps {
  icon?: React.ReactNode;
  title: string;
  text: string;
  className?: string;
}

export default function IconCard({ icon, title, text, className }: IconCardProps) {
  return (
    <div className={cn("bg-card border border-border rounded-sm p-6", className)}>
      {icon && <div className="text-accent mb-4">{icon}</div>}
      <h3 className="font-serif text-lg text-primary mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}
