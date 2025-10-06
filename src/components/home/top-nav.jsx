import { Button } from "@/components/ui/button";

export function TopNav({ items }) {
  return (
    <nav className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-bold">
          YN
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/60">Your Name</p>
          <p className="text-sm text-white/70">Fourth-Year Front-End Developer</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-white/70">
        {items.map((item) => (
          <a key={item.href} href={item.href} className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
            {item.label}
          </a>
        ))}
      </div>
      <Button href="#contact" variant="secondary" className="w-full sm:w-auto">
        {"Let's collaborate"}
      </Button>
    </nav>
  );
}
