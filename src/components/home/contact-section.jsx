import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection({ socials }) {
  return (
    <section id="contact" className="space-y-10">
      <SectionHeading
        eyebrow="Contact"
        title="Ready for the next project"
        description="Open to product collaborations, design system mandates, and long term partnerships."
      />
      <Card className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Tell me about your idea</h3>
          <p className="mt-2 text-sm text-white/70">
            Email me at
            <a
              href="mailto:hello@nguyentran.design"
              className="ml-1 text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              hello@nguyentran.design
            </a>
            or reach out on the platforms below.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="mailto:hello@nguyentran.design">Say hello</Button>
          <Button href="https://cal.com/yourusername/intro" variant="outline">
            Book intro call
          </Button>
        </div>
      </Card>
      <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
        {socials.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 transition hover:border-white/40 hover:text-white"
          >
            {social.label}
          </a>
        ))}
      </div>
    </section>
  );
}
