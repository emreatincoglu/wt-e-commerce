import React, { useEffect, useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserOrders } from "../actions/shoppingCartActions";
import OrdersTable from "../components/OrderComponents/OrdersTable";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function PreviousOrdersPage() {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.client.orderList || []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getUserOrders())
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  const sortedOrders = useMemo(
    () => [...orders].sort((first, second) => Number(second.id) - Number(first.id)),
    [orders],
  );

  return (
    <div className="min-h-screen bg-[#fafafa] font-['Montserrat',ui-sans-serif,system-ui]">
      <Header />
      <main>
        <section className="border-y border-[#f0f0f0] bg-white">
          <div className="mx-auto flex min-h-[80px] max-w-[1240px] items-center gap-3 px-5 text-sm font-bold sm:px-6 md:min-h-[92px] md:px-8">
            <NavLink className="text-[#252b42]" exact to="/">
              Home
            </NavLink>
            <ChevronRight aria-hidden="true" className="text-[#bdbdbd]" size={16} />
            <span className="text-[#737373]">My Orders</span>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-10 sm:px-6 md:px-8 md:py-14">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#252b42]">My Orders</h1>
            <p className="mt-2 text-sm text-[#737373]">
              Review your previous purchases and open an order to see its products.
            </p>
          </div>

          {isLoading ? (
            <div className="grid min-h-[320px] place-items-center rounded-[6px] border border-[#ececec] bg-white">
              <div
                aria-label="Loading orders"
                className="h-11 w-11 animate-spin rounded-full border-4 border-[#e6e6e6] border-t-[#23a6f0]"
                role="status"
              />
            </div>
          ) : (
            <OrdersTable orders={sortedOrders} />
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default PreviousOrdersPage;
