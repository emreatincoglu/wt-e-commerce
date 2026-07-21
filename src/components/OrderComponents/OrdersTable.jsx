import React, { useState } from "react";
import { ChevronDown, Package } from "lucide-react";
import OrderDetails from "./OrderDetails";

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(price) || 0);
}

function formatOrderDate(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Date unavailable";
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function maskCard(cardNumber) {
  const digits = String(cardNumber || "").replace(/\D/g, "");
  return `**** ${digits.slice(-4).padStart(4, "*")}`;
}

function OrdersTable({ orders }) {
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const toggleOrder = (orderId) => {
    setExpandedOrderId((currentId) =>
      String(currentId) === String(orderId) ? null : orderId,
    );
  };

  if (orders.length === 0) {
    return (
      <div className="grid min-h-[320px] place-items-center rounded-[6px] border border-[#ececec] bg-white px-6 text-center">
        <div>
          <Package aria-hidden="true" className="mx-auto text-[#bdbdbd]" size={42} />
          <h2 className="mt-4 text-lg font-bold text-[#252b42]">No orders yet</h2>
          <p className="mt-2 text-sm text-[#737373]">
            Your completed orders will appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="hidden overflow-hidden rounded-[6px] border border-[#ececec] bg-white md:block">
        <table className="w-full table-fixed border-collapse text-left">
          <thead className="bg-[#fafafa] text-xs font-bold uppercase text-[#737373]">
            <tr>
              <th className="w-[15%] px-5 py-4">Order</th>
              <th className="w-[25%] px-5 py-4">Date</th>
              <th className="w-[14%] px-5 py-4">Items</th>
              <th className="w-[18%] px-5 py-4">Payment</th>
              <th className="w-[18%] px-5 py-4 text-right">Total</th>
              <th className="w-[10%] px-5 py-4 text-right">Details</th>
            </tr>
          </thead>
          {orders.map((order) => {
            const isExpanded = String(expandedOrderId) === String(order.id);
            const productCount = (order.products || []).reduce(
              (total, product) => total + (Number(product.count) || 0),
              0,
            );

            return (
              <tbody className="border-t border-[#ececec]" key={order.id}>
                <tr>
                  <td className="px-5 py-5 text-sm font-bold text-[#252b42]">
                    #{order.id}
                  </td>
                  <td className="px-5 py-5 text-sm text-[#737373]">
                    {formatOrderDate(order.order_date)}
                  </td>
                  <td className="px-5 py-5 text-sm text-[#252b42]">
                    {productCount} {productCount === 1 ? "item" : "items"}
                  </td>
                  <td className="px-5 py-5 text-sm text-[#737373]">
                    {maskCard(order.card_no)}
                  </td>
                  <td className="px-5 py-5 text-right text-sm font-bold text-[#23a6f0]">
                    {formatPrice(order.price)}
                  </td>
                  <td className="px-5 py-5 text-right">
                    <button
                      aria-expanded={isExpanded}
                      aria-label={`${isExpanded ? "Hide" : "Show"} order ${order.id} details`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#737373] transition-colors hover:bg-[#f4fbff] hover:text-[#23a6f0]"
                      onClick={() => toggleOrder(order.id)}
                      type="button"
                    >
                      <ChevronDown
                        aria-hidden="true"
                        className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        size={19}
                      />
                    </button>
                  </td>
                </tr>
                {isExpanded && (
                  <tr>
                    <td className="p-0" colSpan={6}>
                      <OrderDetails products={order.products} />
                    </td>
                  </tr>
                )}
              </tbody>
            );
          })}
        </table>
      </div>

      <div className="space-y-4 md:hidden">
        {orders.map((order) => {
          const isExpanded = String(expandedOrderId) === String(order.id);
          const productCount = (order.products || []).reduce(
            (total, product) => total + (Number(product.count) || 0),
            0,
          );

          return (
            <article
              className="overflow-hidden rounded-[6px] border border-[#ececec] bg-white"
              key={order.id}
            >
              <button
                aria-expanded={isExpanded}
                className="w-full px-5 py-5 text-left"
                onClick={() => toggleOrder(order.id)}
                type="button"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase text-[#737373]">Order #{order.id}</p>
                    <p className="mt-2 text-sm font-bold text-[#252b42]">
                      {formatOrderDate(order.order_date)}
                    </p>
                  </div>
                  <ChevronDown
                    aria-hidden="true"
                    className={`shrink-0 text-[#737373] transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    size={20}
                  />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[#ececec] pt-4 text-xs">
                  <div>
                    <span className="block text-[#737373]">Items</span>
                    <strong className="mt-1 block text-[#252b42]">{productCount}</strong>
                  </div>
                  <div>
                    <span className="block text-[#737373]">Payment</span>
                    <strong className="mt-1 block text-[#252b42]">{maskCard(order.card_no)}</strong>
                  </div>
                  <div className="text-right">
                    <span className="block text-[#737373]">Total</span>
                    <strong className="mt-1 block text-[#23a6f0]">{formatPrice(order.price)}</strong>
                  </div>
                </div>
              </button>
              {isExpanded && <OrderDetails products={order.products} />}
            </article>
          );
        })}
      </div>
    </>
  );
}

export default OrdersTable;
