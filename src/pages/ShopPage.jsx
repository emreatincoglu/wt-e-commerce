import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import ShopCategoryCards from "../components/ShopPageComponents/ShopCategoryCards";
import ShopClients from "../components/ShopPageComponents/ShopClients";
import ShopProducts from "../components/ShopPageComponents/ShopProducts";
import ShopTitle from "../components/ShopPageComponents/ShopTitle";
import ShopToolbar from "../components/ShopPageComponents/ShopToolbar";

function ShopPage() {
  return (
    <div>
      <Header />
      <main>
        <ShopTitle />
        <ShopCategoryCards />
        <ShopToolbar />
        <ShopProducts />
        <ShopClients />
      </main>
      <Footer />
    </div>
  );
}

export default ShopPage;
