import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationModal({ detailCheckout }) {
  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box bg-white w-11/12 max-w-3xl h-auto">
        <h3 className="font-bold text-lg">Konfirmasi Pembayaran</h3>
        <div className="checkout-section flex flex-col md:flex-row">
          <div className="product-checkout mr-7">
            <h5 className="font-bold text-sm mt-2">Products</h5>
            <div className="list-product-checkout">
              {detailCheckout &&
                detailCheckout.productCheckout &&
                detailCheckout.productCheckout.map((product) => (
                  <div key={product.id} className="product-checkout-body mt-1">
                    <p className="font-bold text-[0.7rem]">
                      <span>{product.title} </span>x <span>{product.quantity}</span>
                    </p>
                    <p className="font-bold text-[0.6rem] mb-2">
                      Price/pcs: <span>IDR {product.price.toLocaleString('id-ID')}</span>
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div className="total-checkout mr-7">
            <h5 className="font-bold text-sm mt-2">Total Order</h5>
            <div className="list-product-checkout">
              <p className="font-bold text-[0.8rem]">
                IDR {detailCheckout.totalPrice && detailCheckout.totalPrice.toLocaleString('id-ID')}
              </p>
            </div>
          </div>
          <div className="bank-checkout mr-7">
            <h5 className="font-bold text-sm mt-2">Bank Info</h5>
            <div className="list-product-checkout">
              <p className="font-bold text-[0.8rem]">
                {detailCheckout.transferMethod && detailCheckout.transferMethod}
              </p>
            </div>
          </div>
          <div className="status-checkout mr-7">
            <h5 className="font-bold text-sm mt-2">Status</h5>
            <div className="list-product-checkout">
              <p className="font-bold text-[0.8rem] bg-primary text-white px-1 py-1 rounded-xl">
                Waiting for payment
              </p>
            </div>
          </div>
        </div>
        <p className="py-4"></p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn bg-primary text-white border-primary hover:bg-oldPrimary">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

ConfirmationModal.propTypes = {
  detailCheckout: PropTypes.objectOf(Array),
};

export default ConfirmationModal;
