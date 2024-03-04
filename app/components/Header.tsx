"use client";
import { useState } from "react";
import Image from "next/image";
import "./style.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black shadow-custom">
    <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
   <a className="text-3xl font-bold" href="/">
   <Image src="/assets/logo.svg" alt="Logo" width={100} height={100} />
   </a>
   <div className="md:hidden">
   <button onClick={handleMenuToggle} className="text-3xl">
   {isMenuOpen ? "✕" : "☰"}
   </button>
   </div>
   <div
   className={`
   ${isMenuOpen ? "hideMenuOptions" : "menuOptions"}
    `}
   >
   <div>
   <a href="/" className="text-sm font-bold px-3 py-2 block md:inline">
    Crypto Taxes
   </a>
   <a href="/" className="text-sm font-bold px-3 py-2 block md:inline">
    Free Tools
   </a>
   <a href="/" className="text-sm font-bold px-3 py-2 block md:inline">
    Resource Center
   </a>
   <button className="mx-10 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded-xl">
    Get Started
   </button>
   </div>
   </div>
   </nav>
   </header>
  );
};

export default Header;
