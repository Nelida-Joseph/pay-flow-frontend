export type StatusBadgeProps = {
  label: string;
  tone: "success" | "warning" | "danger";
};

export default function StatusBadge({ label, tone }: StatusBadgeProps) {
  const styles = {
    success: "bg-[#dff7ec] text-[#1d9f67]",
    warning: "bg-[#fff1d5] text-[#d88a0d]",
    danger: "bg-[#ffe2e2] text-[#d55353]",
  };

  return (
    <span className={`inline-flex rounded-lg px-2.5 py-1 text-[11px] font-semibold ${styles[tone]}`}>
      {label}
    </span>
  );
}
