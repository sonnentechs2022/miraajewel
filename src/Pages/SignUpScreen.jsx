import { useRef, useState } from "react";
import Logo from "../Assets/PartnerImg/Miraa.png";
import RightImg from "../Assets/OfferImages/product77.webp";
import FormInput from "./FormInput";
import {useNavigate} from 'react-router-dom'

export default function SignUpScreen() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    contact:" ",
    password: "",
    confirmPassword: "",
  });
  const Navigate =useNavigate();

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "Contact",
      type: "text",
      placeholder: "Contact No...",
      errorMessage: "Please provide valid phone number",
      label: "Contact No",
      pattern:"^([6-9]{1})([0-9]{4})([0-9]{5})$",
      required: true,
      maxlength:10
    },

    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <section className="h-screen gradient-form bg-gray-100 md:h-full ">
      <div className="container py-12 px-5 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 md:w-full px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img className="mx-auto w-48" src={Logo} alt="logo" />
                      <h4 className="text-xl font-Montserrat mt-1 mb-12 pb-1">
                        We are The Miraa Team
                      </h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <p className="mb-4 font-Montserrat">Please login to your account</p>

                      {inputs.map((input) => (
                        <FormInput
                          key={input.id}
                          {...input}
                          value={values[input.name]}
                          onChange={onChange}
                        />
                      ))}
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 none bg-gradient-to-r font-Montserrat from-amber-500 to-pink-500"
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          onClick={()=>Navigate('/MobileNumScreen')}
                        >
                          Sign IN
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="  hidden md:block  h-screen lg:w-6/12  items-center  rounded-r-lg rounded-b-lg rounded-bl-none     ">
                  <img
                    src={RightImg}
                    className="w-full h-screen   "
                    alt="Phone image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
