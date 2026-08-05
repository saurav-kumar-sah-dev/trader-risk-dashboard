const fmt = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

export default function AccountSummary({ accountConfig, totalPnL }) {
  const { startingBalance, currentBalance } = accountConfig;
  const isProfit = totalPnL >= 0;

  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
      <h2 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-4">
        Account Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Stat label="Starting Balance" value={fmt(startingBalance)} color="text-white" />
        <Stat label="Current Balance"  value={fmt(currentBalance)}  color="text-white" />
        <Stat
          label="Total P&L"
          value={(isProfit ? "+" : "") + fmt(totalPnL)}
          color={isProfit ? "text-green-400" : "text-red-400"}
        />
      </div>
    </div>
  );
}

function Stat({ label, value, color }) {
  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <p className="text-gray-500 text-xs mb-1">{label}</p>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
  );
}