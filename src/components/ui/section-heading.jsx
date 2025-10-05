import { Badge } from "@/components/ui/badge";

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <header className="max-w-2xl space-y-4">
      {eyebrow ? <Badge variant="outline">{eyebrow}</Badge> : null}
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
        {description ? (
          <p className="text-base text-white/70 md:text-lg">{description}</p>
        ) : null}
      </div>
    </header>
  );
}
