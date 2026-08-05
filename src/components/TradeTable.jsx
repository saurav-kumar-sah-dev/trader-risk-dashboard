const fmt = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

export default function TradeTable({ trades }) {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
      <h2 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-4">
        Trade History
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500 border-b border-gray-800">
              <th className="text-left pb-3 font-medium">#</th>
              <th className="text-left pb-3 font-medium">Asset</th>
              <th className="text-left pb-3 font-medium">Direction</th>
              <th className="text-right pb-3 font-medium">P&L</th>
              <th className="text-right pb-3 font-medium">Result</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade, i) => {
              const isWin = trade.pnl > 0;
              return (
                <tr key={trade.id} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                  <td className="py-3 text-gray-600">{i + 1}</td>
                  <td className="py-3 text-white font-medium">{trade.asset}</td>
                  <td className="py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      trade.direction === "Long"
                        ? "bg-green-900/50 text-green-400"
                        : "bg-red-900/50 text-red-400"
                    }`}>
                      {trade.direction}
                    </span>
                  </td>
                  <td className={`py-3 text-right font-semibold ${isWin ? "text-green-400" : "text-red-400"}`}>
                    {isWin ? "+" : ""}{fmt(trade.pnl)}
                  </td>
                  <td className="py-3 text-right">
                    <span className={`text-xs font-medium ${isWin ? "text-green-500" : "text-red-500"}`}>
                      {isWin ? "✓ Win" : "✗ Loss"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}