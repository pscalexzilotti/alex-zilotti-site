import type { ReactNode } from "react";
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
        "section-shell w-full px-6 py-20 md:py-28 lg:py-32",
        muted && "bg-white/[0.02]",
        dark && "bg-white/[0.01]",
        className
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export default Section;
