import React, { useEffect, useMemo, useState } from "react";
import { Info } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createOrder,
  createUserAddress,
  createUserCard,
  deleteUserAddress,
  deleteUserCard,
  getUserAdress,
  getUserCards,
  setAdress,
  setPayment,
  updateUserAddress,
  updateUserCard,
} from "../actions/shoppingCartActions";
import AddressSection from "../components/CreateOrderComponents/AddressSection";
import CheckoutSteps from "../components/CreateOrderComponents/CheckoutSteps";
import CreateOrderSummary from "../components/CreateOrderComponents/CreateOrderSummary";
import PaymentSection from "../components/CreateOrderComponents/PaymentSection";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function CreateOrderPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const addressList = useSelector((store) => store.client.adressList || []);
  const creditCards = useSelector((store) => store.client.creditCards || []);
  const cartItems = useSelector((store) => store.shoppingCart.cart || []);

  const [activeStep, setActiveStep] = useState(1);
  const [addressComplete, setAddressComplete] = useState(false);
  const [selectedDeliveryId, setSelectedDeliveryId] = useState(null);
  const [selectedBillingId, setSelectedBillingId] = useState(null);
  const [sameAsDelivery, setSameAsDelivery] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [isCardFormOpen, setIsCardFormOpen] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [cardCcv, setCardCcv] = useState("");
  const [isCreatingOrder, setIsCreatingOrder] = useState(false);

  useEffect(() => {
    dispatch(getUserAdress());
    dispatch(getUserCards());
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

  useEffect(() => {
    if (creditCards.length > 0) {
      const selectedCardExists = creditCards.some(
        (card) => String(card.id) === String(selectedCardId),
      );

      if (!selectedCardExists) {
        setSelectedCardId(creditCards[0].id);
      }
    } else {
      setSelectedCardId(null);
      if (activeStep === 2) {
        setIsCardFormOpen(true);
      }
    }
  }, [activeStep, creditCards, selectedCardId]);

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

  const saveCard = (card) => {
    const request = card.id
      ? dispatch(updateUserCard(card))
      : dispatch(createUserCard(card));

    return request.then((savedCard) => {
      setSelectedCardId(savedCard.id);
      setEditingCard(null);
      setIsCardFormOpen(false);
    });
  };

  const editCard = (card) => {
    setEditingCard(card);
    setIsCardFormOpen(true);
  };

  const removeCard = (cardId) => {
    return dispatch(deleteUserCard(cardId)).then(() => {
      if (String(selectedCardId) === String(cardId)) {
        setSelectedCardId(null);
      }
      if (String(editingCard?.id) === String(cardId)) {
        setEditingCard(null);
        setIsCardFormOpen(false);
      }
    });
  };

  const saveSelectedAddresses = () => {
    const deliveryAddress = addressList.find(
      (address) => address.id === selectedDeliveryId,
    );
    const billingAddress = sameAsDelivery
      ? deliveryAddress
      : addressList.find((address) => address.id === selectedBillingId);

    if (!deliveryAddress || !billingAddress) {
      toast.error("Please select delivery and billing addresses.");
      return;
    }

    dispatch(setAdress({ deliveryAddress, billingAddress }));
    setAddressComplete(true);
    setActiveStep(2);
    if (creditCards.length === 0) {
      setIsCardFormOpen(true);
    }
    toast.success("Address selections saved.");
  };

  const createCurrentOrder = () => {
    const selectedCard = creditCards.find(
      (card) => String(card.id) === String(selectedCardId),
    );
    const deliveryAddress = addressList.find(
      (address) => String(address.id) === String(selectedDeliveryId),
    );

    if (!selectedCard) {
      toast.error("Please select a payment card.");
      return;
    }

    if (!deliveryAddress) {
      toast.error("Please select a delivery address.");
      setActiveStep(1);
      return;
    }

    if (!/^\d{3}$/.test(cardCcv)) {
      toast.error("Please enter a valid 3-digit CCV.");
      return;
    }

    if (selectedItems.length === 0) {
      toast.error("Your shopping cart does not contain a selected product.");
      return;
    }

    const now = new Date();
    const localOrderDate = new Date(
      now.getTime() - now.getTimezoneOffset() * 60_000,
    )
      .toISOString()
      .slice(0, 19);

    const orderPayload = {
      address_id: deliveryAddress.id,
      order_date: localOrderDate,
      card_no: Number(String(selectedCard.card_no).replace(/\D/g, "")),
      card_name: selectedCard.name_on_card,
      card_expire_month: Number(selectedCard.expire_month),
      card_expire_year: Number(selectedCard.expire_year),
      card_ccv: Number(cardCcv),
      price: Number(subtotal.toFixed(2)),
      products: selectedItems.map((item) => ({
        product_id: item.product.id,
        count: item.count,
        detail:
          item.detail ||
          item.product.detail ||
          item.product.description ||
          item.product.name,
      })),
    };

    dispatch(
      setPayment({
        cardId: selectedCard.id,
        installment: 1,
        paymentType: "card",
      }),
    );

    setIsCreatingOrder(true);
    dispatch(createOrder(orderPayload))
      .then(() => {
        setActiveStep(1);
        setAddressComplete(false);
        setSelectedDeliveryId(null);
        setSelectedBillingId(null);
        setSelectedCardId(null);
        setCardCcv("");
        setEditingAddress(null);
        setEditingCard(null);
        setIsFormOpen(false);
        setIsCardFormOpen(false);
        toast.success(
          "Congratulations! Your order has been created successfully.",
        );
        history.push("/");
      })
      .catch(() => {})
      .finally(() => setIsCreatingOrder(false));
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-['Montserrat',ui-sans-serif,system-ui]">
      <Header />
      <main>
        <section className="mx-auto max-w-[1240px] px-5 py-8 sm:px-6 md:px-8 md:py-12">
          <CheckoutSteps
            activeStep={activeStep}
            canOpenPayment={addressComplete}
            onStepChange={setActiveStep}
          />

          <div className="mt-5 flex gap-3 rounded-[6px] border border-[#d8ebf7] bg-[#f4fbff] px-5 py-4 text-sm text-[#52606d]">
            <Info className="mt-0.5 shrink-0 text-[#23a6f0]" size={18} />
            {activeStep === 1 ? (
              <p>
                Choose your delivery address. You can use the same address for billing or select another saved address.
              </p>
            ) : (
              <p>
                Choose a saved card or add a new one. Card numbers are masked in the saved card list.
              </p>
            )}
          </div>

          <div className="mt-6 grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
            {activeStep === 1 ? (
              <AddressSection
                addresses={addressList}
                editingAddress={editingAddress}
                isFormOpen={isFormOpen}
                onCancelForm={() => {
                  setEditingAddress(null);
                  setIsFormOpen(false);
                }}
                onDelete={removeAddress}
                onEdit={editAddress}
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
            ) : (
              <PaymentSection
                cards={creditCards}
                cardCcv={cardCcv}
                editingCard={editingCard}
                isFormOpen={isCardFormOpen}
                onCancelForm={() => {
                  setEditingCard(null);
                  setIsCardFormOpen(false);
                }}
                onDelete={removeCard}
                onEdit={editCard}
                onOpenForm={() => {
                  setEditingCard(null);
                  setIsCardFormOpen(true);
                }}
                onSave={saveCard}
                selectedCardId={selectedCardId}
                setCardCcv={setCardCcv}
                setSelectedCardId={setSelectedCardId}
              />
            )}

            <CreateOrderSummary
              activeStep={activeStep}
              disabled={
                activeStep === 1
                  ? !selectedDeliveryId ||
                    (!sameAsDelivery && !selectedBillingId)
                  : !selectedCardId ||
                    !/^\d{3}$/.test(cardCcv) ||
                    selectedItems.length === 0 ||
                    isCreatingOrder
              }
              isSubmitting={isCreatingOrder}
              itemCount={itemCount}
              onContinue={
                activeStep === 1
                  ? saveSelectedAddresses
                  : createCurrentOrder
              }
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
