# Tradescape — Trader Risk Dashboard

A lightweight trader risk dashboard built as part of the Tradescape
Full Stack Developer assignment.

## Live Demo
[Link here after deployment]

## Tech Stack
- React + Vite
- Tailwind CSS
- Recharts

## How to Run
git clone <your-repo>
cd trader-risk-dashboard
npm install
npm run dev

## What I Built
A responsive dashboard that shows a trader:
- Account overview (starting balance, current balance, total P&L)
- Performance stats (win rate, largest win/loss, avg win/loss)
- A live risk monitor with progress bars showing drawdown and daily loss
- A full trade history table
- An equity curve (additional feature)

## Additional Feature — Equity Curve
I added an equity curve showing how the account balance
changed after each trade.

Why? P&L alone doesn't tell the full story. Two traders can have
the same final P&L but very different risk journeys. An equity
curve immediately reveals consistency, drawdown depth, and
recovery patterns — all critical signals for a funded trader
trying to stay within their account rules.

## Product Questions

**1. What is drawdown in trading?**
Drawdown is the peak-to-trough decline in account balance from
a previous high. It measures how far an account has fallen from
its best point, expressed in dollars or as a percentage. It's
the key metric prop firms use to limit trader risk.

**2. Why does remaining drawdown matter more than just P&L?**
P&L tells you where you are. Remaining drawdown tells you how
much room you have left before you lose your account. A trader
could be up $3,000 in P&L but have only $500 of drawdown buffer
left — one bad trade ends their evaluation. Remaining drawdown
is a survival metric.

**3. If I had another day, what would I improve?**
- Add trade filtering by asset or direction
- Add a performance-by-asset breakdown (BTC vs ETH vs SOL)
- Make the daily loss reset on a clock (simulate real-time)
- Add a streak counter (current win/loss streak)
- Add animated number transitions for a more polished feel