import React from 'react';
import PropTypes from 'prop-types';
import ConfirmationModal from './ConfirmationModal';

function OrderSummary({ totalPrice, shippingCost, detailCheckout, handlePlaceOrder }) {
  return (
    <div className="order-summary md:w-1/3 w-full md:ml-10 px-5 py-5 mt-10 border-2">
      <div className="title-order-summary">
        <h5 className="font-bold text-xl pb-3 w-full border-b-2">Order Summary</h5>
      </div>
      <div className="total-order py-5">
        <div className="subtotal flex justify-between mb-3">
          <p className="text-base">Subtotal</p>
          <p className="font-bold">IDR {totalPrice.toLocaleString()}</p>
        </div>
        <div className="shipping flex justify-between mb-3">
          <p>Shipping</p>
          <p className="font-bold">IDR {shippingCost.toLocaleString()}</p>
        </div>
        <div className="total-pay flex justify-between">
          <p className="font-bold">Total to Pay</p>
          <p className="font-bold">IDR {(totalPrice + shippingCost).toLocaleString()}</p>
        </div>
      </div>
      <div className="btn-order mb-10">
        <button
          className="bg-primary px-8 py-4 w-full text-white font-bold hover:bg-oldPrimary"
          onClick={handlePlaceOrder}
        >
          PLACE ORDER
        </button>
        <ConfirmationModal detailCheckout={detailCheckout} />
      </div>
    </div>
  );
}

OrderSummary.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  shippingCost: PropTypes.number.isRequired,
  detailCheckout: PropTypes.objectOf(Array),
  handlePlaceOrder: PropTypes.func,
};

export default OrderSummary;
