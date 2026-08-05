# 📊 Tradescape — Trader Risk Dashboard

A lightweight **Trader Risk Dashboard** built as part of the **Tradescape Full Stack Developer Assignment**. The application provides traders with a clear overview of account performance, risk metrics, and trading history while visualizing equity growth over time.

---

## 🚀 Live Demo

🔗 **Live:** https://trader-risk-dashboard-nu.vercel.app/

---

## 💻 GitHub Repository

🔗 **Repository:** https://github.com/saurav-kumar-sah-dev/trader-risk-dashboard

---

## 🛠️ Tech Stack

- React + Vite
- Tailwind CSS v4
- Recharts
- Lucide React

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/saurav-kumar-sah-dev/trader-risk-dashboard.git
```

Navigate to the project directory:

```bash
cd trader-risk-dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## ✨ Features

### 📈 Account Overview
- Starting Balance
- Current Balance
- Total Profit & Loss

### 📊 Performance Statistics
- Winning Trades
- Losing Trades
- Win Rate
- Largest Win
- Largest Loss
- Average Win
- Average Loss

### ⚠️ Risk Monitor
- Drawdown Progress
- Daily Loss Progress
- Risk Status Indicator
  - ✅ Safe
  - 🟡 Approaching Limit
  - 🔴 At Risk

### 📋 Trade History
- Complete trade list
- Trade direction
- P&L values
- Win/Loss badges

### 📉 Equity Curve *(Additional Feature)*
- Interactive balance progression chart
- Shows account growth after every trade

> **Note:** All dashboard metrics are dynamically calculated from the trade data. No performance or risk values are hardcoded.

---

## 🌟 Additional Feature — Equity Curve

An equity curve has been added to visualize how the account balance changes after each trade.

### Why is it useful?

Profit & Loss alone doesn't tell the complete story.

Two traders may finish with the same overall profit, yet one might experience significantly larger drawdowns along the way.

The equity curve helps reveal:

- Trading consistency
- Drawdown depth
- Recovery speed
- Overall account health

These are critical insights for funded traders who must stay within strict risk limits.

---

# 📝 Product Questions

## 1. What is drawdown in trading?

Drawdown is the decline in account balance from its highest previous value (peak) to its lowest point (trough). It measures how much capital has been lost before recovering and is commonly expressed as either a dollar amount or a percentage.

Most proprietary trading firms use maximum drawdown as one of the primary risk limits. Exceeding this limit generally results in account termination.

---

## 2. Why does remaining drawdown matter more than just P&L?

Profit & Loss shows current profitability.

Remaining drawdown shows how much risk capacity is left before violating account rules.

For example:

- Trader Profit = **+$3,000**
- Remaining Drawdown = **$500**

Although the trader is profitable overall, a single losing trade could exceed the allowed drawdown and fail the evaluation.

Remaining drawdown measures **survival**, while P&L measures **performance**.

---

## 3. If I had another day, what would I improve?

I would add:

- Trade filtering by asset and direction
- Performance breakdown by asset (BTC, ETH, SOL, etc.)
- Real-time daily loss reset based on trading session
- Current win/loss streak tracking
- Animated statistic counters
- Risk threshold alerts when drawdown exceeds 70%

---

# 📁 Project Structure

```text
src/
├── components/       # Reusable UI components
├── data/             # Mock trades and account configuration
├── utils/            # Pure calculation functions
├── App.jsx           # Main application layout
└── main.jsx          # Application entry point
```

---

## 👨‍💻 Author

**Saurav Kumar Sah**

GitHub: https://github.com/saurav-kumar-sah-dev