import React from "react";
import TeamSection from "../components/TeamComponents/TeamSection";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function TeamPage() {
  return (
    <div>
      <Header />
      <main>
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}

export default TeamPage;
