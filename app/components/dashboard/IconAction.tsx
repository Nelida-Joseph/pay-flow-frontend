import { ArrowUpRight, type LucideIcon } from "lucide-react";

export type IconActionProps = {
  label: string;
  icon: LucideIcon;
  variant?: "primary" | "secondary";
};

export default function IconAction({ label, icon: Icon, variant = "secondary" }: IconActionProps) {
  return (
    <button
      type="button"
      className={`flex w-full items-center justify-start gap-3 rounded-lg border px-4 py-3 text-left text-[15px] font-semibold transition ${
        variant === "primary"
          ? "border-[#1d5ee8] bg-[#0d5ad9] text-white"
          : "border-[#dfe7ef] bg-white text-[#22324c]"
      }`}
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
          variant === "primary" ? "bg-white/15" : "bg-[#edf2fb]"
        }`}
      >
        <Icon className="h-4 w-4" strokeWidth={2.2} />
      </span>
      {label}
      <ArrowUpRight className=" h-4 w-4" strokeWidth={2.2} />
    </button>
  );
}
