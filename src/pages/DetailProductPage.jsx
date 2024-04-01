import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncReceiveDetailProduct } from '../states/detailProduct/action';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { updateCartActionCreator } from '../states/cart/action';

function DetailProductPage() {
  const detailProduct = useSelector((states) => states.detailProduct);
  const { productId } = useParams();
  const productIdInt = +productId;
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(asyncReceiveDetailProduct(productIdInt));
  }, [productIdInt, dispatch]);

  const handleAddToCart = () => {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProductIndex = cartItems.findIndex((item) => item.id === detailProduct.id);

    if (existingProductIndex !== -1) {
      cartItems[existingProductIndex].quantity += quantity;
    } else {
      const productWithQuantity = {
        ...detailProduct,
        quantity: quantity,
      };
      cartItems = [...cartItems, productWithQuantity];
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));

    dispatch(updateCartActionCreator(cartItems));

    alert('Product added to cart!');
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  if (!detailProduct) {
    return <div>Loading...</div>;
  }
  return (
    <section className="detail-page font-jkt bg-[#f5f5f5] text-black">
      <Navbar />
      <div className="detail-page-content px-2 py-10 md:px-10 w-full flex items-center flex-col">
        <div className="detail-container flex flex-col md:flex-row mt-20 md:px-8 xl:px-24 px-0">
          <figure className="md:w-2/4 p-2 w-full">
            <img src={detailProduct.imageUrl} alt={detailProduct.title} />
          </figure>
          <div className="detail-body md:w-2/4 w-full md:ml-10 pt-4 px-6 md:px-0">
            <div className="title-product">
              <p className="text-base mb-3">{detailProduct.category}</p>
              <h5 className="text-3xl font-bold mb-3">{detailProduct.title}</h5>
              <p className="price text-xl mb-6">
                IDR {detailProduct.price.toLocaleString('id-ID')}
              </p>
            </div>
            <div className="quantity">
              <p className="mb-4">Quantity</p>
              <div className="container-quantity mb-6 ">
                <button
                  className="btn-size bg-black  text-white px-2 pb-1  border-solid border-1 hover:border-black border-grey mr-4"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <label className="btn-size bg-white xl:px-8 py-2 px-5 border-solid border-1 hover:border-black border-grey mr-4">
                  {quantity}
                </label>
                <button
                  className="btn-size bg-black  text-white px-2 pb-1  border-solid border-1 hover:border-black border-grey mr-4"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
            </div>
            <div className="btn-add mb-10">
              <button
                className="bg-primary px-8 py-4 w-full text-white font-bold hover:bg-oldPrimary"
                onClick={handleAddToCart}
              >
                ADD TO CHART
              </button>
            </div>
            <div className="description">
              <p className="text-sm leading-6">{detailProduct.description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default DetailProductPage;
