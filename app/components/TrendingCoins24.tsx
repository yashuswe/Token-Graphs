"use client";
import React, { useState, useEffect } from "react";
import { CoinItem } from "../types";
import Image from "next/image"; 
import { fetchTrendingCoins } from "../CoinGeckoService";

const TrendingCoins24: React.FC = () => {
  const [trendingCoins, setTrendingCoins] = useState<CoinItem[]>([]);
  useEffect(() => {
    const getTrendingCoins = async () => {
      const coins = await fetchTrendingCoins(3);
      setTrendingCoins(coins);
    };

    getTrendingCoins();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg ">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Trending Coins (24h)
      </h2>
      <div>
        {trendingCoins.map((coin) => (
          <div key={coin.id} className="flex items-center justify-start mb-3">
            <div className="flex items-center">
              <div className="relative w-8 h-8 mr-3">
                <Image
                  className="border rounded-full"
                  src={coin.thumb}
                  alt={coin.name}
                  layout="fill"
                  objectFit="cover" 
                />
              </div>{" "}
              <div className="flex flex-col">
                <span className="font-semibold text-lg text-black">
                  {coin.name}
                </span>
                <span className="text-sm text-gray-500">({coin.symbol})</span>
              </div>
            </div>
            <div
              className={`flex items-center pl-4 pr-2 py-1 rounded-sm ml-auto ${
                coin.price_change_percentage_24h > 0
                  ? "bg-[#0AB27D0F] text-green-700"
                  : "bg-red-200 text-red-700"
              }`}
            >
              {coin.price_change_percentage_24h > 0 ? (
                <span className="text-green-700 font-bold mr-2">▲</span>
              ) : (
                <span className="text-red-700 font-bold mr-2">▼</span>
              )}
              <span className="font-semibold">
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins24;
