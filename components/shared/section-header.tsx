import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-14 md:mb-16", centered && "text-center", className)}>
      <div
        className={cn(
          "mb-5 flex items-center gap-4",
          centered && "justify-center"
        )}
      >
        <span className="label-caps">Atendimento Premium</span>
        <span className="editorial-rule" />
      </div>
      <h2 className="max-w-3xl text-4xl md:text-5xl text-ivory">{title}</h2>
      {subtitle && (
        <p
          className="mt-5 max-w-2xl text-base leading-8 text-quiet md:text-lg"
          style={centered ? { margin: "1.25rem auto 0" } : {}}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
