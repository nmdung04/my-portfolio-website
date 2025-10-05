import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="space-y-10">
      <SectionHeading
        eyebrow="About"
        title="Design thinking paired with production ready code"
        description="I start with user research, translate insights into clear interaction flows, then build the experience end to end. Understanding both design and engineering means features land faster with fewer trade offs."
      />
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2 bg-white/[0.08]">
          <h3 className="text-xl font-semibold">Approach</h3>
          <p className="mt-3 text-sm text-white/70">
            Always champion the user. After aligning on the core value, I craft reusable components, document decision logic, and ensure accessibility from the start. The result is a system that scales without sacrificing craft.
          </p>
        </Card>
        <Card className="bg-white/[0.08]">
          <h3 className="text-xl font-semibold">Tooling</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>Figma and FigJam for co creation</li>
            <li>Storybook for component validation</li>
            <li>Shadcn UI and Sera UI for rapid iteration</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
