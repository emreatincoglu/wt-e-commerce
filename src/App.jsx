import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShopPage from "./pages/ShopPage";
import TeamPage from "./pages/TeamPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/product" component={ProductDetailPage} />
          <Route exact path="/product/:id" component={ProductDetailPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/team" component={TeamPage} />
          <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
