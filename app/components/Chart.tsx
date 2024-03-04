"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import dynamic from "next/dynamic";
import { GetStarted } from "./GetStarted";
import { fetchBitcoinPrice, fetchTrendingCoins } from "../CoinGeckoService";
import YouMayAlsoLike from "./YouMayAlsoLike";
import { CoinItem } from "../types";

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);
  const [interval, setInterval] = useState("D");
  const [bitcoinPrices, setBitcoinPrices] = useState({ usd: 0, inr: 0 });

  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = "";
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        autosize: true,
        height: "620",
        symbol: "CAPITALCOM:BTCUSD",
        interval: interval,
        timezone: "Asia/Kolkata",
        theme: "light",
        style: "2",
        locale: "en",
        enable_publishing: false,
        hide_top_toolbar: true,
        allow_symbol_change: false,
        calendar: false,
        hide_volume: true,
        support_host: "https://www.tradingview.com",
      });
      container.current.appendChild(script);
    }

    const loadBitcoinPrices = async () => {
      const prices = await fetchBitcoinPrice();
      if (prices) {
        setBitcoinPrices(prices);
      }
    };

    loadBitcoinPrices();
  }, [interval]);

  const [trendingCoins, setTrendingCoins] = useState<CoinItem[]>([]);

  useEffect(() => {
    const getTrendingCoins = async () => {
      const data = await fetchTrendingCoins();
      setTrendingCoins(data);
    };

    getTrendingCoins();
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row my-4 h-full p-8">
        <div className="flex-grow w-full md:w-3/3 mb-4 md:mb-0 md:mr-4 rounded-2xl">
          <div ref={container}></div>
        </div>
        <div className="flex-grow w-full md:w-1/3 mb-4 md:mb-0 md:mr-4 rounded-2xl">
          <GetStarted />
        </div>
      </div>
      <div className="bg-white m-10">
        <YouMayAlsoLike
          trendingCoins={trendingCoins}
          name="You May Also Like"
        />
        <YouMayAlsoLike trendingCoins={trendingCoins} name="Trending Coins" />
      </div>
    </div>
  );
}

const DynamicTradingViewWidget = dynamic(
  () => Promise.resolve(TradingViewWidget),
  {
    ssr: false,
  }
);

export default DynamicTradingViewWidget;
