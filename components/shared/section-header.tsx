import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({ title, subtitle, centered, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="font-serif text-3xl md:text-4xl text-primary mb-1">{title}</h2>
      <div className="w-12 h-0.5 bg-accent mt-3 mb-4" />
      {subtitle && (
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
