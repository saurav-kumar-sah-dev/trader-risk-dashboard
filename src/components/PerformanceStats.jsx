const fmt = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

export default function PerformanceStats({ stats }) {
  const { winningTrades, losingTrades, winRate, largestWin, largestLoss, avgWin, avgLoss } = stats;

  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
      <h2 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-4">
        Performance Stats
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <Stat label="Winning Trades"   value={winningTrades} color="text-green-400" />
        <Stat label="Losing Trades"    value={losingTrades}  color="text-red-400"   />
        <Stat label="Win Rate"         value={`${winRate}%`} color="text-blue-400"  />
        <Stat label="Largest Win"      value={fmt(largestWin)}  color="text-green-400" />
        <Stat label="Largest Loss"     value={fmt(largestLoss)} color="text-red-400"   />
        <Stat label="Avg Win"          value={fmt(avgWin)}      color="text-green-300" />
        <Stat label="Avg Loss"         value={fmt(avgLoss)}     color="text-red-300"   />
      </div>
    </div>
  );
}

function Stat({ label, value, color }) {
  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <p className="text-gray-500 text-xs mb-1">{label}</p>
      <p className={`text-xl font-bold ${color}`}>{value}</p>
    </div>
  );
}