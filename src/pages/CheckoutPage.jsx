import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCartActionCreator } from '../states/cart/action';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductPurchase from '../components/ProductPurchase';
import AddressForm from '../components/AddressForm';
import OrderSummary from '../components/OrderSummary';

function CheckoutPage() {
  const dispatch = useDispatch();
  const cart = useSelector((states) => states.cart);
  const address = useSelector((states) => states.address);

  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [selectedShippingMethod, setSelectedShippingMethod] = useState('');
  const [shippingCost, setShippingCost] = useState(0);
  const [selectedCourier, setSelectedCourier] = useState('');
  const [selectedTransferMethod, setSelectedTransferMethod] = useState('');
  const [detailCheckout, setDetailCheckout] = useState({});

  // Delete Product From Chart
  const handleRemoveFromCart = (productId) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cartItems.findIndex((item) => item.id === productId);

    if (index !== -1) {
      cartItems.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
    dispatch(removeFromCartActionCreator(productId));
  };

  // Itung total harga di keranjang
  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += (item.price || 0) * (item.quantity || 0);
    });
    setTotalPrice(total);

    setSelectedCourier('');
    setSelectedShippingMethod('');
    setSelectedTransferMethod('');
  }, [cart]);

  const handleAddressChange = (e) => {
    setSelectedAddress(e.target.value);
  };

  const handleAddAddressClick = () => {
    const modal = document.getElementById('my_modal_3');
    if (modal) {
      modal.showModal();
    } else {
      console.error('Modal element not found!');
    }
  };

  const handleShippingMethodChange = (e) => {
    setSelectedShippingMethod(e.target.value);
    if (e.target.value === 'OKE | Rp.54,000, 3-6 days') {
      setShippingCost(54000);
    } else if (e.target.value === 'REG | Rp.63,000, 2-3 days') {
      setShippingCost(63000);
    }
  };

  const handleTransferMethodChange = (e) => {
    setSelectedTransferMethod(e.target.value);
  };

  const handleCourierChange = (e) => {
    setSelectedCourier(e.target.value);
  };

  const handlePlaceOrder = () => {
    if (
      !selectedAddress ||
      !selectedShippingMethod ||
      !selectedCourier ||
      !selectedTransferMethod
    ) {
      alert('Please fill in all required fields');
      return;
    }

    const selectedAddressInfo = address.find((adr) => adr.id === parseInt(selectedAddress));

    const detailCheckout = {
      productCheckout: cart,
      address: selectedAddressInfo,
      shippingMethod: selectedShippingMethod,
      courier: selectedCourier,
      transferMethod: selectedTransferMethod,
      totalPrice: totalPrice + shippingCost,
    };
    // console.log(detailCheckout);

    setDetailCheckout(detailCheckout);

    const modal = document.getElementById('my_modal_4');
    if (modal) {
      modal.showModal();
    } else {
      console.error('Modal element not found!');
    }
  };

  return (
    <section className="checkout-page font-jkt bg-[#f5f5f5] text-black">
      <Navbar />
      <div className="checkout-page-content px-2 py-10 md:px-10 w-full flex items-center flex-col">
        <div className="checkout-container flex flex-col md:flex-row mt-20 md:px-8 xl:px-24 px-0 w-full">
          <div className="checkout md:w-2/3 p-2 w-full">
            <div className="title-product mb-5">
              <h4 className="text-2xl font-bold text-black font-jkt">Checkout</h4>
            </div>
            <div className="purchase-summary">
              <h5 className="font-bold text-md pb-3 w-full border-b-2">PURCHASE SUMMARY</h5>
              <div className="container-products-purchase">
                {cart.map((cartItem) => (
                  <ProductPurchase
                    key={cartItem.id}
                    cartItem={cartItem}
                    onRemoveFromCart={handleRemoveFromCart}
                  />
                ))}
              </div>
            </div>
            <div className="purchase-email py-3 w-full border-b-2 flex flex-col">
              <label className="font-bold text-md">Shopping Address</label>
              <select
                className="select select-primary w-full bg-white mt-3"
                value={selectedAddress}
                onChange={handleAddressChange}
              >
                <option value="">Choose shipping address</option>
                {address.map((adr) => (
                  <option value={adr.id} key={adr.id}>
                    {adr.name}, {adr.street}, {adr.city_id}, {adr.zip_code}
                  </option>
                ))}
              </select>
              <button className="btn btn-primary mt-3 text-white" onClick={handleAddAddressClick}>
                Add Address
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white">
                  <div method="dialog">
                    <AddressForm />
                  </div>
                </div>
              </dialog>
            </div>
            <div className="select-courier py-3 w-full border-b-2 flex flex-col">
              <label className="font-bold text-md">Courier</label>
              <select
                className="select select-primary w-full bg-white mt-3"
                defaultValue=""
                value={selectedCourier}
                onChange={handleCourierChange}
              >
                <option value="">Choose courier service</option>
                <option value="Jalur Nugraha Ekakurir (JNE)">Jalur Nugraha Ekakurir (JNE)</option>
              </select>
            </div>
            <div className="select-shipping method py-3 w-full border-b-2 flex flex-col">
              <label className="font-bold text-md">Shipping Method</label>
              <select
                className="select select-primary w-full bg-white mt-3"
                defaultValue=""
                value={selectedShippingMethod}
                onChange={handleShippingMethodChange}
              >
                <option value="">Choose shipping method</option>
                <option value="OKE | Rp.54,000, 3-6 days">OKE | Rp.54,000, 3-6 days</option>
                <option value="REG | Rp.63,000, 2-3 days">REG | Rp.63,000, 2-3 days</option>
              </select>
            </div>
            <div className="select-shipping method py-3 w-full border-b-2 flex flex-col">
              <label className="font-bold text-md">Transfer Method</label>
              <select
                className="select select-primary w-full bg-white mt-3"
                defaultValue=""
                value={selectedTransferMethod}
                onChange={handleTransferMethodChange}
              >
                <option value="">Choose transfer method</option>
                <option value="BSI Admin 722391312">BSI</option>
                <option value="BCA Admin 120992311">BCA</option>
                <option value="BNI Admin 909090909">BNI</option>
              </select>
            </div>
          </div>
          <OrderSummary
            totalPrice={totalPrice}
            shippingCost={shippingCost}
            detailCheckout={detailCheckout}
            handlePlaceOrder={handlePlaceOrder}
          />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default CheckoutPage;
