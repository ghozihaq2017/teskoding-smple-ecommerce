import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="card w-40 xl:w-72 bg-base-100 shadow-xl hover:shadow-2xl hover:border-2">
        <figure>
          <img src={product.imageUrl} alt={product.title} />
        </figure>
        <div className="card-body bg-white text-black flex justify-center items-center xl:p-8 p-3">
          <h5 className="card-title font-bold text-sm">{product.title}</h5>
          <p className="text-xs">IDR {product.price.toLocaleString('id-ID')}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline xl:text-xs text-[0.5rem]">Fashion</div>
            <div className="badge badge-outline xl:text-xs text-[0.5rem]">Products</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  product: PropTypes.objectOf(Array),
};

export default Card;
