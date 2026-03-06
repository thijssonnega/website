import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", className)}>
      <Container>
        {(title || subtitle) && (
          <header className="mb-8 max-w-3xl">
            {title && <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{title}</h2>}
            {subtitle && <p className="mt-3 text-base text-foreground/80 sm:text-lg">{subtitle}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
