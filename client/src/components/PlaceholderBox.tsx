import { Upload, FileText } from "lucide-react";

interface PlaceholderBoxProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  type?: "document" | "image" | "generic";
  className?: string;
}

export default function PlaceholderBox({
  title,
  description,
  icon,
  type = "generic",
  className = "",
}: PlaceholderBoxProps) {
  const getDefaultIcon = () => {
    switch (type) {
      case "document":
        return <FileText className="w-12 h-12 text-muted-foreground/50" />;
      case "image":
        return <Upload className="w-12 h-12 text-muted-foreground/50" />;
      default:
        return <Upload className="w-12 h-12 text-muted-foreground/50" />;
    }
  };

  return (
    <div
      className={`border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 text-center transition-all hover:border-accent/50 hover:bg-accent/5 ${className}`}
    >
      <div className="flex justify-center mb-4">
        {icon || getDefaultIcon()}
      </div>
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      <p className="text-xs text-muted-foreground/60 mt-3">
        À remplir ultérieurement
      </p>
    </div>
  );
}
