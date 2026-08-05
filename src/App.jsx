import { trades, accountConfig } from "./data/tradeData";
import { calcPerformanceStats, calcRiskMetrics, calcEquityCurve } from "./utils/calculations";

import AccountSummary  from "./components/AccountSummary";
import PerformanceStats from "./components/PerformanceStats";
import RiskIndicator   from "./components/RiskIndicator";
import TradeTable      from "./components/TradeTable";
import EquityCurve     from "./components/EquityCurve";

export default function App() {
  const stats       = calcPerformanceStats(trades);
  const riskMetrics = calcRiskMetrics(trades, accountConfig);
  const equityData  = calcEquityCurve(trades, accountConfig.startingBalance);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">Tradescape</h1>
            <p className="text-gray-500 text-xs">Risk Dashboard</p>
          </div>
          <span className="text-xs text-gray-600">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long", year: "numeric",
              month: "long", day: "numeric",
            })}
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Row 1 */}
        <AccountSummary accountConfig={accountConfig} totalPnL={stats.totalPnL} />

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RiskIndicator riskMetrics={riskMetrics} accountConfig={accountConfig} />
          <PerformanceStats stats={stats} />
        </div>

        {/* Row 3 */}
        <EquityCurve data={equityData} startingBalance={accountConfig.startingBalance} />

        {/* Row 4 */}
        <TradeTable trades={trades} />
      </main>

      <footer className="text-center text-gray-700 text-xs py-6">
        Tradescape Risk Dashboard — Internal Tool
      </footer>
    </div>
  );
}