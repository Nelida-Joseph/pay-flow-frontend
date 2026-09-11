type TrendChartProps = {
  labels: string[];
  values: number[];
};

function createSmoothPath(points: Array<{ x: number; y: number }>) {
  if (points.length < 2) return "";

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length; i += 1) {
    const previous = points[i - 1];
    const current = points[i];
    const cp1x = previous.x + (current.x - previous.x) / 2;
    const cp1y = previous.y;
    const cp2x = current.x - (current.x - previous.x) / 2;
    const cp2y = current.y;

    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${current.x} ${current.y}`;
  }

  return path;
}

export default function TrendChart({ labels, values }: TrendChartProps) {
  const maxValue = Math.max(...values);
  const points = values.map((value, index) => ({
    x: (index / (values.length - 1)) * 100,
    y: 100 - (value / maxValue) * 100,
  }));

  const path = createSmoothPath(points);
  const areaPath = `${path} L 100 100 L 0 100 Z`;
  const yAxisLabels = [400_000, 300_000, 200_000, 100_000, 0];

  return (
    <div className="rounded-lg border border-[#dfe7ef] bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-2">
        <div>
          <h2 className="text-[18px] font-bold text-[#1d2a39]">Transaction Trends</h2>
          <p className="text-[12px] text-[#7c8ca1]">Transaction value over time</p>
        </div>

        <div className="flex items-center justify-center relative gap-6">
          {['7D', '30D', '90D'].map((period, index) => (
            <span
              key={period}
              className={`rounded-lg left-6 border border-[#E4E4E4] z-0 px-2 py-1 text-[10px] font-semibold ${
                index === 1
                  ? "bg-[#2d7ef7] text-white px-2 py-1 absolute z-10 text-[11px] font-semibold "
                  : "bg-[#eef3f8] text-[#6b7f98]"
              }`}
            >
              {period}
            </span>
          ))}
        </div>
      </div>

      <div className="flex h-52 gap-3">
        <div className="flex w-10 h-full flex-col justify-between pb-0 text-[10px] text-[#7c8ca1]">
          {yAxisLabels.map((label) => (
            <span key={label}>{label >= 1000 ? `${label / 1000}K` : label}</span>
          ))}
        </div>

        <div className="flex-1">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
            <defs>
              <linearGradient id="trendArea" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#2d7ef7" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#2d7ef7" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {[0, 25, 50, 75, 100].map((gridLine) => (
              <line
                key={gridLine}
                x1="0"
                x2="100"
                y1={gridLine}
                y2={gridLine}
                stroke="#e8edf5"
                strokeDasharray="2 2"
              />
            ))}

            {[0, 20, 40, 60, 80, 100].map((verticalLine) => (
              <line
                key={verticalLine}
                x1={verticalLine}
                x2={verticalLine}
                y1="0"
                y2="100"
                stroke="#f0f4f9"
              />
            ))}

            <path d={areaPath} fill="url(#trendArea)" />
            <path
              d={path}
              fill="none"
              stroke="#1d74f7"
              strokeWidth="0.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {points.map((point, index) => (
              <g key={`${labels[index]}-${point.x}`}>
                <circle cx={point.x} cy={point.y} r="1.0" fill="#1d74f7" />
                <circle cx={point.x} cy={point.y} r="1.0" fill="rgba(29,116,247,0.15)" />
              </g>
            ))}
          </svg>
        </div>
      </div>

      <div className="mt-3 flex justify-between text-[11px] text-[#7c8ca1]">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}
