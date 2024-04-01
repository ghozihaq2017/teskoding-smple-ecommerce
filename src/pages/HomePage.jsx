/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Caraosel from '../components/Caraosel';
import ContainerCards from '../components/ContainerCards';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveProducts } from '../states/products/action';

function HomePage() {
  const products = useSelector((states) => states.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveProducts());
  }, [dispatch]);

  return (
    <section className="home-page bg-[#f5f5f5] font-jkt min-h-screen relative">
      <Navbar />
      <div className="home-page-content px-2 py-10 md:px-10 w-full flex items-center flex-col ">
        <Caraosel />
        <div className="container-products h-auto min-h-screen px-4 md:px-10 py-10 w-full bg-white rounded-xl pb-28 shadow-3xl md:w-10/12 mt-12">
          <div className="title-product">
            <h4 className="text-xl font-bold text-black font-jkt">Best Seller</h4>
          </div>
          <ContainerCards products={products} />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default HomePage;
