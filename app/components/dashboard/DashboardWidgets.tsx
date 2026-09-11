import {
  ArrowRight,
  ArrowUpRight,
  Download,
  type LucideIcon,
} from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  compareText: string;
  changeType: "positive" | "warning";
  icon: LucideIcon;
  tone: "blue" | "teal" | "green" | "amber";
};

export function StatCard({
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
    <div className="rounded-2xl border border-[#dfe7ef] bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-[13px] font-medium text-[#677487]">{title}</p>
          <div className="mt-2 flex items-end gap-2">
            <h3 className="text-[18px] font-bold text-[#1d2a39] md:text-[22px]">{value}</h3>
          </div>
        </div>
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${toneStyles[tone]}`}>
          <Icon className="h-5 w-5" strokeWidth={2.2} />
        </div>
      </div>

      <div className="flex items-center gap-2 text-[12px] font-medium">
        <span
          className={
            changeType === "positive"
              ? "text-[#1da46c]"
              : "text-[#d68b27]"
          }
        >
          {changeType === "positive" ? "↑" : "△"} {change}
        </span>
        {compareText ? (
          <span className="text-[#7c8ca1]">{compareText}</span>
        ) : null}
      </div>
    </div>
  );
}

type ActionButtonProps = {
  label: string;
  icon: LucideIcon;
  variant?: "primary" | "secondary";
};

export function ActionButton({
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
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#edf2fb] text-[#1e2c3d]">
          <Icon className="h-4 w-4" strokeWidth={2.2} />
        </span>
        {label}
      </span>
      <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
    </button>
  );
}

type StatusBadgeProps = {
  label: string;
  tone: "success" | "warning" | "danger";
};

export function StatusBadge({ label, tone }: StatusBadgeProps) {
  const styles = {
    success: "bg-[#dff7ec] text-[#1d9f67]",
    warning: "bg-[#fff1d5] text-[#d88a0d]",
    danger: "bg-[#ffe2e2] text-[#d55353]",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${styles[tone]}`}
    >
      {label}
    </span>
  );
}

type DonutStatsProps = {
  total: number;
  successful: number;
  pending: number;
  failed: number;
};

export function DonutStats({
  total,
  successful,
  pending,
  failed,
}: DonutStatsProps) {
  const successfulPercent = (successful / 100) * 100;
  const pendingPercent = (pending / 100) * 100;
  const failedPercent = (failed / 100) * 100;

  const gradient = `conic-gradient(#1ba76b 0 ${successfulPercent}%, #f4b34a ${successfulPercent}% ${successfulPercent + pendingPercent}%, #db5a5a ${successfulPercent + pendingPercent}% 100%)`;

  return (
    <div className="flex items-center gap-5">
      <div className="relative flex h-32 w-32 items-center justify-center rounded-full" style={{ background: gradient }}>
        <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white text-center">
          <span className="text-[16px] font-bold text-[#1e2c3d]">{total}</span>
          <span className="text-[10px] text-[#76849a]">Transactions</span>
        </div>
      </div>

      <div className="space-y-3 text-[12px] text-[#2d3b4d]">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#1ba76b]" />
          <span>Successful</span>
          <span className="ml-auto font-semibold">{successful}%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f4b34a]" />
          <span>Pending</span>
          <span className="ml-auto font-semibold">{pending}%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#db5a5a]" />
          <span>Failed</span>
          <span className="ml-auto font-semibold">{failed}%</span>
        </div>
      </div>
    </div>
  );
}

type IconActionProps = {
  label: string;
  icon: LucideIcon;
  variant?: "primary" | "secondary";
};

export function IconAction({ label, icon: Icon, variant = "secondary" }: IconActionProps) {
  return (
    <button
      type="button"
      className={`flex w-full items-center justify-start gap-3 rounded-xl border px-4 py-3 text-left text-[15px] font-semibold transition ${
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
      <ArrowUpRight className="ml-auto h-4 w-4" strokeWidth={2.2} />
    </button>
  );
}

export function DownloadButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-start gap-3 rounded-xl border border-[#dfe7ef] bg-white px-4 py-3 text-left text-[15px] font-semibold text-[#22324c] transition hover:opacity-95"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#edf2fb]">
        <Download className="h-4 w-4" strokeWidth={2.2} />
      </span>
      {label}
    </button>
  );
}
