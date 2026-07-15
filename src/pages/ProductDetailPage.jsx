import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BestsellerProducts from "../components/ProductDetailComponents/BestsellerProducts";
import ProductBreadcrumb from "../components/ProductDetailComponents/ProductBreadcrumb";
import ProductClients from "../components/ProductDetailComponents/ProductClients";
import ProductDescription from "../components/ProductDetailComponents/ProductDescription";
import ProductHero from "../components/ProductDetailComponents/ProductHero";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { getProduct } from "../actions/productActions";

function ProductDetailPage() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const productFetchState = useSelector(
    (store) => store.product.productFetchState,
  );
  const currentProductId = useSelector(
    (store) => store.product.currentProduct.id,
  );

  useEffect(() => {
    if (productId) {
      dispatch(getProduct(productId)).catch(() => {});
    }
  }, [dispatch, productId]);

  const hasFailed = productFetchState === "FAILED";
  const isLoading =
    !hasFailed &&
    (productFetchState !== "FETCHED" ||
      String(currentProductId) !== String(productId));

  return (
    <div>
      <Header />
      <main>
        <ProductBreadcrumb />
        {isLoading ? (
          <div
            aria-label="Loading product"
            className="grid min-h-[500px] place-items-center bg-[#fafafa]"
            role="status"
          >
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#e6e6e6] border-t-[#23a6f0]" />
          </div>
        ) : hasFailed ? (
          <div className="grid min-h-[400px] place-items-center bg-[#fafafa] px-6 text-center text-base font-bold text-[#737373]">
            Product could not be loaded.
          </div>
        ) : (
          <>
            <ProductHero />
            <ProductDescription />
            <BestsellerProducts />
            <ProductClients />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
