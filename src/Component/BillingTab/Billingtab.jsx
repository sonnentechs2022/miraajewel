import React, { useState } from "react";
import PaymentMethod from "./PaymentMethod";

export default function Billingtab() {
  const [hideForm, setHideForm] = useState("650px");
  const [hideCard, setHideCard] = useState("0px");

  const handleShow = () => {
    hideCard === "650px" ? setHideCard("0px") : setHideCard("650px");
    hideForm === "0px" ? setHideForm("650px") : setHideForm("0px");
  };

  
  // hideCard === "300px" ? setHideForm("0px") : setHideForm("300px") ;

  return (
    <>
      <div className="container p-12 mx-auto">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div className="flex flex-col md:w-full">
            <div
              style={{ height: hideForm, overflow: "hidden" }}
              className="transform transition-all duration-1000  ease-in-out"
            >
              <h2 className="mb-4 font-bold md:text-xl text-heading ">
                Shipping Address
              </h2>
              <form className="justify-center w-full mx-auto" method="post">
                <div>
                  <div className="space-x-0 lg:flex lg:space-x-4">
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="firstName"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        First Name
                      </label>
                      <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 ">
                      <label
                        htmlFor="firstName"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        Last Name
                      </label>
                      <input
                        name="Last Name"
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />{" "}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full">
                      <label
                        htmlFor="Email"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        Email
                      </label>
                      <input
                        name="Last Name"
                        type="text"
                        placeholder="Email"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full">
                      <label
                        htmlFor="Address"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        Address
                      </label>
                      <textarea
                        className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        name="Address"
                        cols="20"
                        rows="4"
                        placeholder="Address"
                      ></textarea>
                    </div>
                  </div>
                  <div className="space-x-0 lg:flex lg:space-x-4">
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="city"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        City
                      </label>
                      <input
                        name="city"
                        type="text"
                        placeholder="City"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 ">
                      <label
                        htmlFor="postcode"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        Postcode
                      </label>
                      <input
                        name="postcode"
                        type="text"
                        placeholder="Post Code"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <label className="flex items-center text-sm group text-heading">
                      <span className="ml-2">
                        Save this information fo/rnext time
                      </span>
                    </label>
                  </div>
                </div>
                <div
                  className="flex justify-center items-center rounded-sm bg-orange-600 cursor-pointer w-[190px] h-[50px] ml-1 "
                  onClick={handleShow}
                >
                  <p className="  -tracking-4 text-[15px]  font-semibold text-white uppercase">
                    Deliver Here
                  </p>
                </div>
              </form>
            </div>
            <PaymentMethod hideCard={hideCard} handleShow={handleShow} />
          </div>

          <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div className="pt-12 md:pt-0 2xl:ps-4">
              <h2 className="text-xl font-bold">Your Order</h2>
              <div className="mt-8">
                <div className="flex flex-col space-y-4">
                  <div className="flex space-x-4">
                    <div>
                      <img
                        src="https://source.unsplash.com/user/erondu/1600x900"
                        alt=""
                        className="w-60"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Title</h2>
                      <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                      <span className="text-red-600">Price</span> $20
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <img
                        src="https://source.unsplash.com/collection/190727/1600x900"
                        alt=""
                        className="w-60"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Title</h2>
                      <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                      <span className="text-red-600">Price</span> $20
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-4 mt-4">
                <h2 className="text-xl font-bold">ITEMS 2</h2>
              </div>
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Subtotal<span className="ml-2">$40.00</span>
              </div>
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Shipping<span className="ml-2">$10</span>
              </div>
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Grand Total<span className="ml-2">$10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
