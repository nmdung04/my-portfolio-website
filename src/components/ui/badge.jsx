import { cn } from "@/lib/utils";

const styles = {
  default: "border-white/10 bg-white/10 text-white",
  outline: "border-white/20 bg-transparent text-white/70",
};

export function Badge({ children, variant = "default", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em]",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
