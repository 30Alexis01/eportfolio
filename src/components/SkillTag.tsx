interface SkillTagProps {
  label: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function SkillTag({
  label,
  variant = "primary",
  className = "",
}: SkillTagProps) {
  const baseClasses =
    "inline-block px-3 py-1 rounded-full text-sm font-medium transition-all";

  const variantClasses = {
    primary: "bg-accent text-accent-foreground hover:opacity-90",
    secondary: "bg-muted text-muted-foreground hover:bg-accent/20",
    outline: "border border-accent text-accent hover:bg-accent/10",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {label}
    </span>
  );
}
