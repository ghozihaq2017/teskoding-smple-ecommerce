import React from 'react';
import PropTypes from 'prop-types';

function ProductPurchase({ cartItem }) {
  return (
    <div className="product-purchase flex items-center py-6 border-b-2">
      <figure className="max-w-28">
        <img src={cartItem.imageUrl} alt={cartItem.title} />
      </figure>
      <div className="product-purchase-body ml-10 ">
        <h4 className="font-bold text-base mb-2">{cartItem.title}</h4>
        <p className="text-sm mb-2">All Size</p>
        <p>
          <span>{cartItem.quantity}</span> x
          <span>IDR {cartItem.price.toLocaleString('id-ID')}</span>
        </p>
      </div>
    </div>
  );
}

ProductPurchase.propTypes = {
  cartItem: PropTypes.objectOf(Array),
};

export default ProductPurchase;
