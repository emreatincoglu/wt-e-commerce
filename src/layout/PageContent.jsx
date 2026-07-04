import React from 'react';
import ShopCardsSection from '../components/PageContentComponents/ShopCardsSection';
import ProductCardsSection from '../components/PageContentComponents/ProductCardSection';
import ContentSection from '../components/PageContentComponents/ContentSection';
import ClientsSection from '../components/PageContentComponents/ClientsSection';
import FeaturesSection from '../components/PageContentComponents/FeaturesSections';
import BlogSection from '../components/PageContentComponents/BlogSection';
import HeroSection from '../components/HeaderComponents/HeroSection';


function PageContent() {
  return (
    <div className="font-['Montserrat',ui-sans-serif,system-ui]">
      <HeroSection />
      <ClientsSection />
      <ShopCardsSection />
      <ProductCardsSection />
      <ContentSection />
      <FeaturesSection />
      <BlogSection />
    </div>
  );
}


export default PageContent;
