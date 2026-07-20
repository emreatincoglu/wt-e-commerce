import React, { useEffect, useMemo, useState } from "react";
import { ChevronRight, Info } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createUserAddress,
  deleteUserAddress,
  getUserAdress,
  setAdress,
  updateUserAddress,
} from "../actions/shoppingCartActions";
import AddressSection from "../components/CreateOrderComponents/AddressSection";
import CheckoutSteps from "../components/CreateOrderComponents/CheckoutSteps";
import CreateOrderSummary from "../components/CreateOrderComponents/CreateOrderSummary";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function CreateOrderPage() {
  const dispatch = useDispatch();

  const addressList = useSelector((store) => store.client.adressList || []);
  const cartItems = useSelector((store) => store.shoppingCart.cart || []);

  const [selectedDeliveryId, setSelectedDeliveryId] = useState(null);
  const [selectedBillingId, setSelectedBillingId] = useState(null);
  const [sameAsDelivery, setSameAsDelivery] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  useEffect(() => {
    dispatch(getUserAdress());
  }, [dispatch]);

  useEffect(() => {
    if (addressList.length > 0) {
      if (!addressList.some((address) => address.id === selectedDeliveryId)) {
        setSelectedDeliveryId(addressList[0].id);
      }
      if (!addressList.some((address) => address.id === selectedBillingId)) {
        setSelectedBillingId(addressList[0].id);
      }
      setIsFormOpen(false);
    } else {
      setSelectedDeliveryId(null);
      setSelectedBillingId(null);
      setIsFormOpen(true);
    }
  }, [addressList, selectedDeliveryId, selectedBillingId]);

  const selectedItems = cartItems.filter((item) => item.checked);
  const itemCount = selectedItems.reduce(
    (total, item) => total + item.count,
    0,
  );
  const subtotal = useMemo(
    () =>
      selectedItems.reduce(
        (total, item) => total + item.product.price * item.count,
        0,
      ),
    [selectedItems],
  );

  const saveAddress = (address) => {
    const request = address.id
      ? dispatch(updateUserAddress(address))
      : dispatch(createUserAddress(address));

    return request.then((savedAddress) => {
      if (!address.id) {
        setSelectedDeliveryId(savedAddress.id);
        setSelectedBillingId(savedAddress.id);
      }
      setEditingAddress(null);
      setIsFormOpen(false);
    });
  };

  const editAddress = (address) => {
    setEditingAddress(address);
    setIsFormOpen(true);
  };

  const removeAddress = (addressId) => {
    return dispatch(deleteUserAddress(addressId)).then(() => {
      if (selectedDeliveryId === addressId) {
        setSelectedDeliveryId(null);
      }
      if (selectedBillingId === addressId) {
        setSelectedBillingId(null);
      }
      if (editingAddress?.id === addressId) {
        setEditingAddress(null);
        setIsFormOpen(false);
      }
    });
  };

  const saveSelectedAddresses = () => {
    const deliveryAddress = addressList.find(
      (addr) => addr.id === selectedDeliveryId,
    );
    const billingAddress = sameAsDelivery
      ? deliveryAddress
      : addressList.find((addr) => addr.id === selectedBillingId);

    if (!deliveryAddress || !billingAddress) {
      toast.error("Lütfen teslimat ve fatura adreslerini seçin.");
      return;
    }

    dispatch(setAdress({ deliveryAddress, billingAddress }));
    toast.success("Adres seçimleriniz onaylandı.");
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-['Montserrat',ui-sans-serif,system-ui]">
      <Header />
      <main>
       

        <section className="mx-auto max-w-[1240px] px-5 py-8 sm:px-6 md:px-8 md:py-12">
          <CheckoutSteps />

          <div className="mt-5 flex gap-3 rounded-[6px] border border-[#d8ebf7] bg-[#f4fbff] px-5 py-4 text-sm text-[#52606d]">
            <Info className="mt-0.5 shrink-0 text-[#23a6f0]" size={18} />
            <p>
              Teslimat adresi seçin. Fatura adresi için teslimat adresiyle aynı
              seçeneğini kullanabilir veya farklı bir kayıtlı adres
              belirleyebilirsiniz.
            </p>
          </div>

          <div className="mt-6 grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
            <AddressSection
              addresses={addressList} 
              editingAddress={editingAddress}
              isFormOpen={isFormOpen}
              onCancelForm={() => {
                setEditingAddress(null);
                setIsFormOpen(false);
              }}
              onEdit={editAddress}
              onDelete={removeAddress}
              onOpenForm={() => {
                setEditingAddress(null);
                setIsFormOpen(true);
              }}
              onSave={saveAddress}
              sameAsDelivery={sameAsDelivery}
              selectedBillingId={selectedBillingId}
              selectedDeliveryId={selectedDeliveryId}
              setSameAsDelivery={setSameAsDelivery}
              setSelectedBillingId={setSelectedBillingId}
              setSelectedDeliveryId={setSelectedDeliveryId}
            />

            <CreateOrderSummary
              disabled={
                !selectedDeliveryId || (!sameAsDelivery && !selectedBillingId)
              }
              itemCount={itemCount}
              onContinue={saveSelectedAddresses}
              subtotal={subtotal}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CreateOrderPage;
