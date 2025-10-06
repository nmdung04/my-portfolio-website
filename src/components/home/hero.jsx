import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Hero({ tags }) {
  return (
    <header className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-center">
      <div className="space-y-6">
        <Badge>Fourth-Year Frontend</Badge>
        <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          I craft friendly web experiences while finishing my senior year.
        </h1>
        <p className="max-w-xl text-base text-white/70 md:text-lg">
          I am a final-year Computer Science student who loves building interfaces that feel calm, fast, and inclusive. My toolkit spans HTML, CSS/SCSS, Tailwind CSS, React, Next.js, and component systems like Shadcn UI and Sera UI, with Three.js and GSAP ready when a project needs motion or depth.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button href="mailto:hello@yourname.dev">Say hello</Button>
          <Button href="https://cal.com/yourname/coffee-chat" variant="outline">
            Grab a quick chat
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <Card className="border-white/5 bg-white/10 p-10 text-center">
        <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border border-white/20 bg-gradient-to-tr from-sky-400/20 via-purple-500/20 to-fuchsia-500/20 text-4xl font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
          {"//"}
        </div>
        <h3 className="mt-6 text-xl font-semibold">Curious builder, still shipping</h3>
        <p className="mt-2 text-sm text-white/70">
          Leading team projects at school, experimenting with new frameworks, and documenting what works for the next iteration.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-white/60">
          <span>Design-system minded</span>
          <span>Thoughtful animations</span>
          <span>Collaborative git</span>
        </div>
      </Card>
    </header>
  );
}
