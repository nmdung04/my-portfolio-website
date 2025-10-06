import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="space-y-10">
      <SectionHeading
        eyebrow="About"
        title="Final-year student, detail-first front-end developer"
        description="My fourth year in Computer Science has been all about translating design intent into reliable code. I iterate quickly, document decisions, and keep room to learn something new on every build."
      />
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2 bg-white/[0.08]">
          <h3 className="text-xl font-semibold">How I work</h3>
          <p className="mt-3 text-sm text-white/70">
            I sketch flows, prototype interaction states, then turn them into reusable React and Next.js components styled with SCSS or Tailwind CSS. Accessibility checks, performance budgets, and thoughtful handoff notes keep teammates aligned.
          </p>
        </Card>
        <Card className="bg-white/[0.08]">
          <h3 className="text-xl font-semibold">Tools in rotation</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>HTML, CSS, SCSS, Tailwind CSS</li>
            <li>React, Next.js, Shadcn UI, Sera UI</li>
            <li>Three.js, GSAP, Figma, GitHub</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
