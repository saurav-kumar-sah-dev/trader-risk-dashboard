const fmt = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

const riskConfig = {
  "SAFE":              { color: "text-green-400", bg: "bg-green-400", border: "border-green-500", bar: "bg-green-500"  },
  "APPROACHING LIMIT": { color: "text-yellow-400", bg: "bg-yellow-400", border: "border-yellow-500", bar: "bg-yellow-500" },
  "AT RISK":           { color: "text-red-400",   bg: "bg-red-400",   border: "border-red-500",   bar: "bg-red-500"   },
};

export default function RiskIndicator({ riskMetrics, accountConfig }) {
  const {
    currentDrawdown, remainingDrawdown, dailyLoss,
    remainingDailyLoss, drawdownPct, dailyLossPct, riskLevel,
  } = riskMetrics;

  const { maxDrawdown, dailyLossLimit } = accountConfig;
  const cfg = riskConfig[riskLevel];

  return (
    <div className={`bg-gray-900 rounded-2xl p-6 border ${cfg.border}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-gray-400 text-sm font-medium uppercase tracking-wider">
          Risk Monitor
        </h2>
        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${cfg.color} ${cfg.border} bg-gray-800`}>
          {riskLevel}
        </span>
      </div>

      <div className="space-y-5">

        <RiskBar
          label="Drawdown"
          current={currentDrawdown}
          remaining={remainingDrawdown}
          limit={maxDrawdown}
          pct={drawdownPct}
          cfg={cfg}
          fmt={fmt}
        />

        <RiskBar
          label="Daily Loss"
          current={dailyLoss}
          remaining={remainingDailyLoss}
          limit={dailyLossLimit}
          pct={dailyLossPct}
          cfg={cfg}
          fmt={fmt}
        />
      </div>
    </div>
  );
}

function RiskBar({ label, current, remaining, limit, pct, cfg, fmt }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-300 font-medium">{label}</span>
        <span className="text-gray-400">{pct}% used</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
        <div
          className={`h-3 rounded-full transition-all duration-500 ${cfg.bar}`}
          style={{ width: `${Math.min(pct, 100)}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>Used: <span className="text-red-400 font-medium">{fmt(current)}</span></span>
        <span>Remaining: <span className="text-green-400 font-medium">{fmt(remaining)}</span></span>
        <span>Limit: <span className="text-gray-300 font-medium">{fmt(limit)}</span></span>
      </div>
    </div>
  );
}