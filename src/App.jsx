import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AlertTriangle, Ban, Bell, CheckCircle2, Info, X } from "lucide-react";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShopPage from "./pages/ShopPage";
import TeamPage from "./pages/TeamPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import instance from "./api/axiosInstance";
import { useDispatch } from "react-redux";
import { verifyUser } from "./actions/clientActions";

const toastIconByType = {
  success: CheckCircle2,
  error: Ban,
  warning: AlertTriangle,
  info: Bell,
  default: Info,
};

function ToastIcon({ type }) {
  const Icon = toastIconByType[type] || Info;
  return <Icon aria-hidden="true" strokeWidth={2} />;
}

function ToastCloseButton({ closeToast }) {
  return (
    <button
      type="button"
      className="toast-alert-close"
      onClick={closeToast}
      aria-label="Close alert"
    >
      <X aria-hidden="true" strokeWidth={3} />
    </button>
  );
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyUser());
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about-us" component={AboutPage} />
          <Route exact path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" component={ProductDetailPage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/shop/:gender/:categoryName/:categoryId">
            <ShopPage/>
          </Route>
          <Route exact path="/product" component={ProductDetailPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/team" component={TeamPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnHover
        hideProgressBar
        icon={ToastIcon}
        closeButton={ToastCloseButton}
      />
    </div>
  );
}

export default App;
