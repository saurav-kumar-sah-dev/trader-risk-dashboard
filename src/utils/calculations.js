export function calcPerformanceStats(trades) {
  const totalPnL       = trades.reduce((sum, t) => sum + t.pnl, 0);
  const winningTrades  = trades.filter((t) => t.pnl > 0);
  const losingTrades   = trades.filter((t) => t.pnl < 0);
  const winRate        = (winningTrades.length / trades.length) * 100;
  const largestWin     = Math.max(...winningTrades.map((t) => t.pnl));
  const largestLoss    = Math.min(...losingTrades.map((t) => t.pnl));
  const avgWin         = winningTrades.reduce((s, t) => s + t.pnl, 0) / winningTrades.length;
  const avgLoss        = losingTrades.reduce((s, t) => s + t.pnl, 0)  / losingTrades.length;

  return {
    totalPnL,
    winningTrades: winningTrades.length,
    losingTrades:  losingTrades.length,
    winRate:       parseFloat(winRate.toFixed(1)),
    largestWin,
    largestLoss,
    avgWin:        parseFloat(avgWin.toFixed(2)),
    avgLoss:       parseFloat(avgLoss.toFixed(2)),
  };
}

export function calcRiskMetrics(trades, accountConfig) {
  const { startingBalance, currentBalance, maxDrawdown, dailyLossLimit } = accountConfig;

  const currentDrawdown    = startingBalance - currentBalance;
  const remainingDrawdown  = maxDrawdown - Math.max(0, currentDrawdown);

  const dailyLoss          = trades
    .filter((t) => t.pnl < 0)
    .reduce((sum, t) => sum + t.pnl, 0);
  const remainingDailyLoss = dailyLossLimit + dailyLoss; 

  const drawdownPct  = (Math.max(0, currentDrawdown) / maxDrawdown) * 100;
  const dailyLossPct = (Math.abs(dailyLoss) / dailyLossLimit) * 100;
  const maxPct       = Math.max(drawdownPct, dailyLossPct);

  const riskLevel =
    maxPct >= 80 ? "AT RISK" :
    maxPct >= 50 ? "APPROACHING LIMIT" :
    "SAFE";

  return {
    currentDrawdown:    Math.max(0, currentDrawdown),
    remainingDrawdown:  Math.max(0, remainingDrawdown),
    dailyLoss:          Math.abs(dailyLoss),
    remainingDailyLoss: Math.max(0, remainingDailyLoss),
    drawdownPct:        parseFloat(drawdownPct.toFixed(1)),
    dailyLossPct:       parseFloat(dailyLossPct.toFixed(1)),
    riskLevel,
  };
}

export function calcEquityCurve(trades, startingBalance) {
  let balance = startingBalance;
  const curve = [{ trade: "Start", balance }];

  trades.forEach((t) => {
    balance += t.pnl;
    curve.push({
      trade: `${t.asset} ${t.direction}`,
      balance: parseFloat(balance.toFixed(2)),
    });
  });

  return curve;
}