import type { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  dark?: boolean;
  id?: string;
}

export function Section({ children, className, muted, dark, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-20 px-6",
        muted && "bg-muted",
        dark && "bg-primary",
        className
      )}
    >
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}

export default Section;
