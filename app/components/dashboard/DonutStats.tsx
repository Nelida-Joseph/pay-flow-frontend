export type DonutStatsProps = {
  total: number;
  successful: number;
  pending: number;
  failed: number;
};

export default function DonutStats({
  total,
  successful,
  pending,
  failed,
}: DonutStatsProps) {
  const isPercentageInput = successful + pending + failed === 100;

  const successfulPercent = isPercentageInput
    ? successful
    : total > 0
      ? (successful / total) * 100
      : 0;

  const pendingPercent = isPercentageInput
    ? pending
    : total > 0
      ? (pending / total) * 100
      : 0;

  const gradient = `conic-gradient(
    #1ba76b 0% ${successfulPercent}%, 
    #f4b34a ${successfulPercent}% ${successfulPercent + pendingPercent}%, 
    #db5a5a ${successfulPercent + pendingPercent}% 100%
  )`;

  return (
    <div className="flex flex-row items-center justify-center gap-4 w-full min-w-0">
      {/* 
        FLEXIBLE DONUT CHART:
        - w-full max-w-[160px]: scales down flexibly inside small cards
        - aspect-square: locks 1:1 aspect ratio automatically
      */}
      <div
        className="relative w-full max-w-[150px] aspect-square flex-shrink-0 flex items-center justify-center rounded-full transition-all"
        style={{ background: gradient }}
      >
        {/* Inner hole positioned dynamically with percentage-based sizing */}
        <div className="absolute inset-[18%] flex flex-col items-center justify-center rounded-full bg-white text-center shadow-sm">
          <span className="text-[14px] sm:text-[16px] font-bold text-[#1e2c3d]">
            {total.toLocaleString()}
          </span>
          <span className="text-[9px] sm:text-[10px] font-medium text-[#76849a]">
            Transactions
          </span>
        </div>
      </div>

      {/* Legend Area */}
      <div className="flex flex-col space-y-2 text-[12px] text-[#2d3b4d] w-full min-w-0">
        <div className="flex items-center justify-start gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#1ba76b]" />
            <span className="truncate">Successful</span>
          </div>
          <span className="font-semibold text-[#1e2c3d]">
            {Math.round(successfulPercent)}%
          </span>
        </div>

        <div className="flex items-center justify-start gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#f4b34a]" />
            <span className="truncate">Pending</span>
          </div>
          <span className="font-semibold text-[#1e2c3d]">
            {Math.round(pendingPercent)}%
          </span>
        </div>

        <div className="flex items-center justify-start gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#db5a5a]" />
            <span className="truncate">Failed</span>
          </div>
          <span className="font-semibold text-[#1e2c3d]">
            {Math.round(100 - (successfulPercent + pendingPercent))}%
          </span>
        </div>
      </div>
    </div>
  );
}