import React from "react";
import Logo from "../Assets/PartnerImg/Miraa.png";
import RightImg from "../Assets/PartnerImg/RightImgLogin.jpg";
import { Link,NavLink} from "react-router-dom";

export default function () {
  return (
    <>
      <section className="h-full gradient-form bg-gray-200 md:w-full md:h-screen ">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg lg:mb-[30px] ">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img className="mx-auto w-48 md:w-20" src={Logo} alt="logo" />
                        <h4 className="text-xl font-Montserrat mt-1 mb-12 pb-1">
                          We are The Miraa Team
                        </h4>
                      </div>
                      <form>
                        <p className="mb-4 font-Montserrat">Please login to your account</p>
                        <div className="mb-4">
                          <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Username"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Password"
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block font-Montserrat  px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 none bg-gradient-to-r from-amber-500 to-pink-500"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Log in
                          </button>
                          <a className="text-gray-500 font-Montserrat" href="#!">
                            Forgot password?
                          </a>
                        </div>
                        <div className="flex items-center justify-between pb-6 ">
                          <p className="mb-0 mr-2 font-Montserrat">Don't have an account?</p>
                          <NavLink to="/SignUp">
                          <button
                            type="button"
                            className="inline-block px-6 font-Montserrat py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out "
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Sign-Up
                          </button>
                          </NavLink>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="hidden md:block  h-screen lg:w-6/12  items-center  rounded-r-lg rounded-b-lg rounded-bl-none ">
                    <img
                      src={RightImg}
                      className="w-full h-screen"
                      alt="Phone image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
