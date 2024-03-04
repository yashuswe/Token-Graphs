import React from "react";
import Header from "./components/Header";
import DynamicTradingViewWidget from "./components/Chart";

export default function Home() {

  return (
    <div>
      <Header />
      <DynamicTradingViewWidget />
    </div>
  );
}
