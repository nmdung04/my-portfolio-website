import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection({ items }) {
  return (
    <section id="experience" className="space-y-10">
      <SectionHeading
        eyebrow="Experience"
        title="Hands-on roles that shaped my craft"
        description="Each role nudged me to learn fast, document clearly, and keep teammates moving in the same direction."
      />
      <div className="space-y-6">
        {items.map((item) => (
          <Card key={item.role} className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
            <div className="md:w-48">
              <p className="text-sm text-white/60">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold">{item.role}</h3>
              <p className="text-sm text-white/70">{item.company}</p>
            </div>
            <ul className="flex-1 space-y-3 text-sm text-white/70">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
