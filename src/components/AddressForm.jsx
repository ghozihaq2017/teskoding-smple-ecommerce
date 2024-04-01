import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAddressActionCreator } from '../states/address/action';

function AddressForm() {
  const dispatch = useDispatch();
  const address = useSelector((states) => states.address);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = new Date().getTime();
    const name = e.target.name.value;
    const street = e.target.street.value;
    const city_id = e.target.city_id.value;
    const zip_code = e.target.zip_code.value;

    const newAddress = { id, name, street, city_id, zip_code };

    let addresses = JSON.parse(localStorage.getItem('addressUser')) || [];

    addresses.push(newAddress);

    localStorage.setItem('addressUser', JSON.stringify(addresses));

    dispatch(addAddressActionCreator(newAddress));

    e.target.reset();
    alert('Address successfully added!');
  };

  return (
    <div>
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="address-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="address-name"
              type="text"
              placeholder="Home / Work"
              name="name"
              required
            />
            {/* <p className="text-red-500 text-xs italic">
          Please fill out this field.
        </p> */}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="street-address"
            >
              Street Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="street-address"
              type="text"
              placeholder="Jln. Merdeka No 5"
              name="street"
              required
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you do like
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              City
            </label>
            <div className="relative">
              <input
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="city_id"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Zip
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
              name="zip_code"
            />
          </div>
        </div>
        <button
          type="submit"
          className="group relative px-10 py-3 overflow-hidden rounded-lg bg-white text-lg shadow mt-3"
        >
          <div className="absolute inset-0 w-3 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-sm text-black group-hover:text-white">Add Address</span>
        </button>
      </form>
    </div>
  );
}

export default AddressForm;
