import React from 'react';
import ContactCards from '../components/ContactComponents/ContactCards';
import ContactHero from '../components/ContactComponents/ContactHero';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

function ContactPage() {
  return (
    <div>
      <Header />
      <main>
        <ContactHero />
        <ContactCards />
        
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
