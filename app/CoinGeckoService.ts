export const fetchTrendingCoins = async (limit?: number) => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
    const data = await response.json();
    const coins = data.coins.map((coin: any) => ({
      id: coin.item.id,
      name: coin.item.name,
      symbol: coin.item.symbol.toUpperCase(),
      thumb: coin.item.thumb,
      price_change_percentage_24h: coin.item.data.price_change_percentage_24h.usd,
      price: coin.item.data.price,
      sparkline:coin.item.data.sparkline
    }));
    return limit ? coins.slice(0, limit) : coins;
  } catch (error) {
    console.error('Error fetching trending coins:', error);
    return []; 
  }
};

  
  export const fetchBitcoinPrice = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return {
        usd: data.bitcoin.usd,
        inr: data.bitcoin.inr,
      };
    } catch (error) {
      console.error('Error fetching Bitcoin prices:', error);
      return null; 
    }
  };

