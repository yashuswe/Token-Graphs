import React, { useRef } from "react";
import { Props } from "../types";

const YouMayAlsoLike: React.FC<Props> = ({
  trendingCoins,
  name,
  isFirst = false,
}) => {
  const scrollableRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`bg-white p-4 rounded-lg ${
        isFirst ? "mt-8" : "mt-0"
      } text-black relative`}
    >
      <h2 className="text-xl font-bold text-gray-900 mb-4 pt-20 overflow-hidden ">{name}</h2>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-2/3 transform -translate-y-1/2 text-[#aeaeae] rounded-full p-2 z-10"
        aria-label="Scroll left"
      >
        &lt;
      </button>
      <div
        ref={scrollableRef}
        className="flex overflow-x-auto pb-4 hide-scrollbar"
      >
        {trendingCoins.map((coin) => (
          <div
            key={coin.id}
            className="flex-shrink-0 border border-[#E3E3E3] p-2 w-64 h-40 bg-white rounded-lg shadow-sm flex flex-col items-center justify-around mx-2"
          >
            <div className="flex flex-row items-center w-full justify-start overflow-hidden">
              <img
                src={coin.thumb}
                alt={`${coin.name} logo`}
                className="w-8 h-8 border mx-2 rounded-full"
              />
              {coin.symbol.toUpperCase()}{" "}
              <span
              className={`text-sm rounded-sm ml-2 p-1 ${
                coin.price_change_percentage_24h > 0
                  ? "bg-[#0AB27D0F] text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {coin.price_change_percentage_24h > 0 ? (
                <span className="text-green-700 font-bold">+</span>
              ) : (
                <span className="text-red-700 font-bold"></span>
              )}
              <span className="font-semibold">
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </span>
            </span>
            </div>
            <span className="text-lg font-semibold truncate overflow-hidden">
  {coin.price?.toLocaleString().slice(0, 20)} </span>
            <img
              src={coin.sparkline}
              alt={`${coin.name} sparkline`}
              className="w-full h-14"
            />
          </div>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-2/3 transform -translate-y-1/2 text-[#aeaeae] rounded-full p-2 z-10"
        aria-label="Scroll right"
      >
        &gt;
      </button>
    </div>
  );
};

export default YouMayAlsoLike;
