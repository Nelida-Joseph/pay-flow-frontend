import { ArrowRight, type LucideIcon } from "lucide-react";

export type ActionButtonProps = {
  label: string;
  icon: LucideIcon;
  variant?: "primary" | "secondary";
};

export default function ActionButton({
  label,
  icon: Icon,
  variant = "secondary",
}: ActionButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[#0a4db8] text-white"
      : "border border-[#dfe7ef] bg-white text-[#22324c]";

  return (
    <button
      type="button"
      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[15px] font-semibold transition hover:opacity-95 ${styles}`}
    >
      <span className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg">
          <Icon className="h-4 w-4" strokeWidth={2.2} />
        </span>
        {label}
      </span>
      <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
    </button>
  );
}
