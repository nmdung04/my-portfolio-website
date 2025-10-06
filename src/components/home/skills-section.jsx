import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { OrbitingSkills } from "@/components/ui/orbiting-skills";

export function SkillsSection({ skills }) {
  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Skills"
        title="Stacks I'm mastering"
        description="These are the tools that help me turn ideas into accessible, animated interfaces, with a rotating focus on the skills orbiting to the right."
      />
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,1fr)] md:items-center">
        <div className="space-y-4">
          <p className="text-sm text-white/70">
            I keep a balance between timeless fundamentals like semantic HTML and CSS, and modern layers such as Tailwind CSS, Shadcn UI, Sera UI, and motion frameworks. The orbiting skill map highlights what I'm experimenting with each week.
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <OrbitingSkills />
        </div>
      </div>
    </section>
  );
}
