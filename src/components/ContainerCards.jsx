import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function ContainerCards({ products }) {
  return (
    <div className="container-cards flex justify-center items-center">
      <div className="products md:grid-cols-3 grid-cols-2 grid mt-5 gap-5 xl:gap-12 place-content-center">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

ContainerCards.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
};

export default ContainerCards;
