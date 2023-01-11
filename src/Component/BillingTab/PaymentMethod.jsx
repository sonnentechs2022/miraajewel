import React from 'react'
import UPI from "../../Assets/PaymentOption/UPI.png";
import FreeCharge from "../../Assets/PaymentOption/FreeCharge.png";
import UPIOption from "../../Assets/PaymentOption/UPIPayment.gif";
import {KeyboardArrowLeft} from '@mui/icons-material'
import { NavLink } from 'react-router-dom';

export default function PaymentMethod({hideCard, hideForm , handleShow}) {


  
  return (
    <div>  
      
      <div style={{height:hideCard , overflow:"hidden"}} className="flex flex-col items-left w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
      <div className='flex cursor-pointer transform transition-all duration-150 ease-out'  onClick={handleShow}  >

        <KeyboardArrowLeft className='text-gray-500 text-[16px] font-medium'/>
        <p className=' text-gray-500 text-[16px] mb-5 font-medium'>Back</p>
      </div>
      
    <h1 className='mb-4 font-bold md:text-xl text-heading'>Payment Method</h1>
    <div className="flex items-center mt-5 mb-4 border-b border-gray-300 py-4 ">
      <input
        id="default-radio-1"
        type="radio"
        value=""
        name="default-radio"
        className="form-radio h-5 w-5 text-indigo-500"
      />
      <img className="w-7 h-7 ml-5" src={UPI} alt="" />
      <label
        htmlFor="default-radio-1"
        className="ml-2 text-sm font-medium text-black dark:text-black"
      >
        UPI ID
      </label>
    </div>
    <div className="flex items-center mb-4 border-b border-gray-300 py-4 ">
      <input
        id="default-radio-1"
        type="radio"
        value=""
        name="default-radio"
        className="form-radio h-5 w-5 text-indigo-500"
      />
      <img className="w-7 h-7 ml-5" src={FreeCharge} alt="" />
      <label
        htmlFor="default-radio-1"
        className="ml-2 text-sm font-medium text-black dark:text-black"
      >
        FreeCharge UPI
      </label>
    </div>
    <div className="flex items-center mb-4 border-b border-gray-300 py-4 ">
      <input
        id="default-radio-1"
        type="radio"
        value=""
        name="default-radio"
        className="form-radio h-5 w-5 text-indigo-500"
      />
      <img className="w-7 h-7 ml-5" src={UPIOption} alt="" />
      <label
        htmlFor="default-radio-1"
        className="ml-2 text-sm font-medium text-black dark:text-black"
      >
        UPI
        <h1 className=" text-green-700 text-[12px] font-medium">
        
        Offer Availabe On Phone-Pay Google-Pay and Others
      </h1>
      </label>
     
    </div>
    <div className="flex items-center mb-4 border-b border-gray-300 py-4 ">
      <input
        id="default-radio-1"
        type="radio"
        value=""
        name="default-radio"
        className="form-radio h-5 w-5 text-indigo-500"
      />
      <img className="w-7 h-7 ml-5" src={UPIOption} alt="" />
      <label
        htmlFor="default-radio-1"
        className="ml-2 text-sm font-medium text-black dark:text-black"
      >
        Wallet
      </label>
    </div>
    
    <div className="flex items-center border-b border-gray-300 py-4 ">
      <NavLink to='/CardPay'>
      <input
        checked
        id="default-radio-2"
        type="radio"
        value=""
        name="default-radio"
        className="form-radio h-5 w-5 text-indigo-500"
      />
      </NavLink>
      <label
        htmlFor="default-radio-2"
        className="ml-5 text-sm font-medium text-gray-900 dark:text-black"
      >
        Credit /Debit/ ATM Card
        <p className=" text-gray-400 mt-2 font-normal text-[13px]">Add and secure your card as per RBI guidelines</p>
      </label>
    </div>
    <div className="flex items-center border-b border-gray-300 py-4 ">
      <input
        checked
        id="default-radio-2"
        type="radio"
        value=""
        name="default-radio"
        className="form-radio h-5 w-5 text-indigo-500"
      />
      <label
        htmlFor="default-radio-2"
        className="ml-5 text-sm font-medium text-gray-900 dark:text-black"
      >
        Cash On Delivery
        <p className=" text-gray-400 mt-2 font-normal text-[13px]">Only Applicable for More than ₹ 4000  </p>
      </label>
    </div>
  </div></div>
  )
}
