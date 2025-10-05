import { cn } from "@/lib/utils";

export function Card({ children, className }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.75)] backdrop-blur",
        className
      )}
    >
      {children}
      <span className="pointer-events-none absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition group-hover:opacity-100" />
    </div>
  );
}
