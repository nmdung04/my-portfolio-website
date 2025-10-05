import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60";

const variants = {
  default: "bg-white text-slate-900 hover:bg-slate-200 active:bg-slate-100",
  secondary: "border border-white/10 bg-slate-900/70 text-white hover:bg-slate-900/90",
  outline: "border border-white/20 text-white/90 hover:border-white/40 hover:text-white",
};

export function Button({ children, className, variant = "default", href, ...props }) {
  const variantClasses = variants[variant] ?? variants.default;

  if (href) {
    const isInternal = href.startsWith("#") || href.startsWith("/");
    const isMail = href.startsWith("mailto:");

    return (
      <a
        href={href}
        className={cn(baseStyles, variantClasses, className)}
        target={isInternal || isMail ? undefined : "_blank"}
        rel={isInternal || isMail ? undefined : "noreferrer"}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={cn(baseStyles, variantClasses, className)} {...props}>
      {children}
    </button>
  );
}
