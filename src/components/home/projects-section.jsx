import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="space-y-10">
      <SectionHeading
        eyebrow="Projects"
        title="Projects that stretched my front-end muscles"
        description="Each build started as a real problem from classmates or mentors and became a playground for motion, performance, and thoughtful UI systems."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-sm text-white/70">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-white/60">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/15 px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <Button href={project.link.href} variant="outline" className="mt-6 w-fit">
              {project.link.label}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
