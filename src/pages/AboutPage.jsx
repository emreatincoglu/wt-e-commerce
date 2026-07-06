import React from "react";
import AboutCompanies from "../components/AboutComponents/AboutCompanies";
import AboutHero from "../components/AboutComponents/AboutHero";
import AboutStats from "../components/AboutComponents/AboutStats";
import AboutTeam from "../components/AboutComponents/AboutTeam";
import AboutVideo from "../components/AboutComponents/AboutVideo";
import AboutWorkWithUs from "../components/AboutComponents/AboutWorkWithUs";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import TeamSection from "../components/TeamComponents/TeamSection";

function AboutPage() {
  return (
    <div>
      <Header />
      <main>
        <AboutHero />
        <AboutStats />
        <AboutVideo />
        <TeamSection />
        <AboutCompanies />
        <AboutWorkWithUs />
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
