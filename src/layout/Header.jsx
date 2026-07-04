import React from 'react';
import HeroSection from '../components/HeaderComponents/HeroSection';
import Navbar from '../components/HeaderComponents/Navbar';
import Socials from '../components/HeaderComponents/Socials';

function Header() {
  return (
    <header className="bg-white font-['Montserrat',ui-sans-serif,system-ui] text-[#252b42]">
      <Socials />
      <Navbar />
    </header>
  );
}

export default Header;
