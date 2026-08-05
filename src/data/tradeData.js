export const accountConfig = {
  startingBalance: 100000,
  currentBalance: 103250,
  maxDrawdown: 10000,
  dailyLossLimit: 5000,
};

export const trades = [
  { id: 1, asset: "BTC", direction: "Long",  pnl: 1200  },
  { id: 2, asset: "ETH", direction: "Short", pnl: -450  },
  { id: 3, asset: "BTC", direction: "Short", pnl: 800   },
  { id: 4, asset: "SOL", direction: "Long",  pnl: -300  },
  { id: 5, asset: "ETH", direction: "Long",  pnl: 2000  },
];