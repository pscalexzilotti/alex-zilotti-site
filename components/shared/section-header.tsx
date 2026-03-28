import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-slate-600 max-w-2xl" style={centered ? { margin: '0 auto' } : {}}>{subtitle}</p>
      )}
    </div>
  );
}

export default SectionHeader;
