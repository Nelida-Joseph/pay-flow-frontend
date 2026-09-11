import type { LucideIcon } from "lucide-react";

export type StatCardProps = {
  title: string;
  value: string;
  change: string;
  compareText: string;
  changeType: "positive" | "warning";
  icon: LucideIcon;
  tone: "blue" | "teal" | "green" | "amber";
};

export default function StatCard({
  title,
  value,
  change,
  compareText,
  changeType,
  icon: Icon,
  tone,
}: StatCardProps) {
  const toneStyles = {
    blue: "bg-[#eaf5ff] text-[#2d7ef7]",
    teal: "bg-[#eaf9f7] text-[#1e9f92]",
    green: "bg-[#e9f7ee] text-[#3ba66f]",
    amber: "bg-[#fff3e5] text-[#e39a2d]",
  };

  return (
    <div className="rounded-lg border border-[#dfe7ef] bg-white p-2 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
        
      <div className=" flex items-start justify-start gap-4">
        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${toneStyles[tone]}`}>
          <Icon className="h-4 w-4" strokeWidth={2.2} />
        </div>
        <div className=" flex flex-col items-start justify-start gap-2">
            <p className="text-[13px] font-medium text-[#677487]">{title}</p>
            <h3 className="text-[18px] font-bold text-[#1d2a39] md:text-[22px]">{value}</h3>
            <div className="flex items-center gap-2 text-[12px] font-medium">
                <span className={changeType === "positive" ? "text-[#1da46c]" : "text-[#d68b27]"}>
                {changeType === "positive" ? "↑" : ""} {change}
                </span>
                {compareText ? <span className="text-[#7c8ca1]">{compareText}</span> : null}
            </div>
        </div>
      </div>
    </div>
  );
}
