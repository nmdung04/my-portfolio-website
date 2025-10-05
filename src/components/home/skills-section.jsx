import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export function SkillsSection({ skills }) {
  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I reach for"
        description="Constantly iterating on the stack that helps me deliver end to end experiences."
      />
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
