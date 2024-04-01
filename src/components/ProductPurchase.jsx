import React from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBin5Line } from 'react-icons/ri';

function ProductPurchase({ cartItem, onRemoveFromCart }) {
  const handleRemoveClick = () => {
    onRemoveFromCart(cartItem.id);
  };

  return (
    <div className="product-purchase flex items-center py-6 border-b-2 relative">
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
      <button className="button-delete absolute right-0" onClick={handleRemoveClick}>
        <RiDeleteBin5Line className="hover:text-primary" />
      </button>
    </div>
  );
}

ProductPurchase.propTypes = {
  cartItem: PropTypes.objectOf(Array),
  onRemoveFromCart: PropTypes.func,
};

export default ProductPurchase;
