import React from "react";
import BestsellerProducts from "../components/ProductDetailComponents/BestsellerProducts";
import ProductBreadcrumb from "../components/ProductDetailComponents/ProductBreadcrumb";
import ProductClients from "../components/ProductDetailComponents/ProductClients";
import ProductDescription from "../components/ProductDetailComponents/ProductDescription";
import ProductHero from "../components/ProductDetailComponents/ProductHero";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function ProductDetailPage() {
  return (
    <div>
      <Header />
      <main>
        <ProductBreadcrumb />
        <ProductHero />
        <ProductDescription />
        <BestsellerProducts />
        <ProductClients />
      </main>
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
