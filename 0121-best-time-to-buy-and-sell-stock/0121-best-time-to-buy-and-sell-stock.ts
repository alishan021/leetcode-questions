function maxProfit(prices: number[]): number {
    
   let buyPrice = prices[0];
   let profit = 0;

   for(let i = 1; i < prices.length; i++) {
        profit = Math.max( profit, prices[i] - buyPrice);

        if(buyPrice > prices[i]) buyPrice = prices[i];
   }

   return profit;
};