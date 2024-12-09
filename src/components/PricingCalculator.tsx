import React, { useState } from 'react';

const PRICING_TIERS = [
  { threshold: 15_000_000, price: 1.0 },
  { threshold: 50_000_000, price: 0.8 },
  { threshold: Infinity, price: 0.7 },
];

const ENDPOINT_CREDITS = {
  onchainPrices: 4,
  portfolioQueries: 3,
  otherQueries: 2,
};

const formatUSD = (value: number) => {
  const decimalPlaces = value < 0.01 ? 4 : value < 1 ? 3 : 2;
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(value);
};

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US').format(num);
};

export function PricingCalculator() {
  const [queries, setQueries] = useState({
    onchainPrices: 0,
    portfolioQueries: 0,
    otherQueries: 0,
  });

  const calculateTotalCredits = () => {
    return (
      queries.onchainPrices * ENDPOINT_CREDITS.onchainPrices +
      queries.portfolioQueries * ENDPOINT_CREDITS.portfolioQueries +
      queries.otherQueries * ENDPOINT_CREDITS.otherQueries
    );
  };

  const calculatePrice = (totalCredits: number) => {
    let remaining = totalCredits;
    let cost = 0;
    let standardCost = totalCredits * 1.0;

    PRICING_TIERS.forEach(({ threshold, price }, index) => {
      const tierCredits = Math.min(remaining, threshold - (index === 0 ? 0 : PRICING_TIERS[index - 1].threshold));
      if (tierCredits > 0) {
        cost += tierCredits * price;
        remaining -= tierCredits;
      }
    });

    const savingsPercent = ((standardCost - cost) / standardCost) * 100;
    const costPer1000 = (cost / totalCredits) * 1000;

    return {
      total: cost / 1000,
      savings: (standardCost - cost) / 1000,
      creditsUsed: totalCredits,
      savingsPercent: savingsPercent > 0 ? `-${savingsPercent.toFixed(0)}%` : null,
      costPer1000: costPer1000 / 1000,
    };
  };

  const totalCredits = calculateTotalCredits();
  const pricing = calculatePrice(totalCredits);

  return (
    <div className="w-full max-w-2xl rounded-lg border border-border bg-card shadow-xl shadow-black/10">
      <div className="p-6 border-b border-border">
        <div className="text-xl font-semibold text-white">API Cost Calculator</div>
        <p className="mt-2 text-sm text-white/60">
          Enter the number of API queries you expect to make for each endpoint type. Consider choosing a specific timeframe (e.g., monthly or annually) to help with cost forecasting.
        </p>
      </div>
      
      <div className="space-y-6 p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">
              Onchain Price Queries
            </label>
            <input
              type="number"
              min="0"
              value={queries.onchainPrices}
              onChange={(e) => setQueries((prev) => ({ ...prev, onchainPrices: parseInt(e.target.value) || 0 }))}
              className="w-full px-3 py-2 rounded-md border border-border bg-neutral-900 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">
              Portfolio Queries
            <input
              type="number"
              min="0"
              value={queries.portfolioQueries}
              onChange={(e) => setQueries((prev) => ({ ...prev, portfolioQueries: parseInt(e.target.value) || 0 }))}
              className="w-full px-3 py-2 rounded-md border border-border bg-neutral-900 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">
              Other Queries
            </label>
            <input
              type="number"
              min="0"
              value={queries.otherQueries}
              onChange={(e) => setQueries((prev) => ({ ...prev, otherQueries: parseInt(e.target.value) || 0 }))}
              className="w-full px-3 py-2 rounded-md border border-border bg-neutral-900 text-white"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-white/60">Credit Amount</span>
            <span className="font-medium text-white">{formatNumber(totalCredits)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/60">Cost per 1k credit</span>
            <div className="flex items-center gap-2">
              {pricing.savingsPercent && (
                <span className="text-[#00D89A]">{pricing.savingsPercent}</span>
              )}
              <span className="font-medium text-white">${formatUSD(pricing.costPer1000)}</span>
            </div>
          </div>
          <div className="pt-3 border-t border-border">
            <div className="flex justify-between items-center">
              <span className="text-white/60">Total</span>
              <span className="text-2xl font-semibold text-white">${formatUSD(pricing.total)}</span>
            </div>
            {pricing.savings > 0 && (
              <div className="flex justify-between items-center mt-1">
                <span className="text-white/60 text-sm">Total savings</span>
                <span className="text-[#00D89A] text-sm">-${formatUSD(pricing.savings)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}