import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine,
} from "recharts";

const fmt = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD",
    minimumFractionDigits: 0 }).format(n);

export default function EquityCurve({ data, startingBalance }) {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
      <div className="mb-4">
        <h2 className="text-gray-400 text-sm font-medium uppercase tracking-wider">
          Equity Curve
        </h2>
        <p className="text-gray-600 text-xs mt-1">
          Balance progression across all trades
        </p>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}   />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
          <XAxis
            dataKey="trade"
            tick={{ fill: "#6b7280", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#6b7280", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
            domain={["auto", "auto"]}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#111827", border: "1px solid #374151", borderRadius: "8px" }}
            labelStyle={{ color: "#9ca3af", fontSize: "12px" }}
            formatter={(value) => [fmt(value), "Balance"]}
          />
          <ReferenceLine
            y={startingBalance}
            stroke="#4b5563"
            strokeDasharray="4 4"
            label={{ value: "Start", fill: "#6b7280", fontSize: 10 }}
          />
          <Area
            type="monotone"
            dataKey="balance"
            stroke="#3b82f6"
            strokeWidth={2}
            fill="url(#colorBalance)"
            dot={{ fill: "#3b82f6", r: 4 }}
            activeDot={{ r: 6, fill: "#60a5fa" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}