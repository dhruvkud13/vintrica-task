import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FinalDeets = () => {
  const { registration } = useSelector((state) => state.registration);
  const { details } = useSelector((state) => state.details);
  const navigate=useNavigate()
  const handleSubmit =()=>{
    navigate('/')
  }
  return (
    
    <div className="justify-center flex-col flex items-center mt-10">
      <div className="bg-[#dff0d8] border-2 border-green-500 rounded-2xl w-1/2">
        <div className="flex">
          <div className="text-[45px] text-green-700 font-bold px-3">
            E-vignette application details
          </div>
        </div>
        <div className="flex">
          <div className="text-[25px] text-green-500 font-semibold px-3">
            Country for e-vignette application:
          </div>
          <div className="text-[25px] font-bold text-green-700">
            {details?.country}
          </div>
        </div>
        <div className="flex">
          <div className="text-[25px] text-green-500 font-semibold px-3">
            Vehicle:
          </div>
          <div className="text-[25px] font-bold text-green-700">
            {details?.vehicle}
          </div>
        </div>
        <div className="flex">
          <div className="text-[25px] text-green-500 font-semibold px-3">
            Application duration:
          </div>
          <div className="text-[25px] font-bold text-green-700">
            {details?.duration}
          </div>
        </div>
        <div className="flex">
          <div className="text-[25px] text-green-500 font-semibold px-3">
            Country of registration:
          </div>
          <div className="text-[25px] font-bold text-green-700">
            {registration.registrationCountry}
          </div>
        </div>
        <div className="flex">
          <div className="text-[25px] text-green-500 font-semibold px-3">
            Registration number:
          </div>
          <div className="text-[25px] font-bold text-green-700">
            {registration.registrationNo}
          </div>
        </div>
        <div className="flex">
          <div className="text-[25px] text-green-500 font-semibold px-3 mb-2">
            Registration date:
          </div>
          <div className="text-[25px] font-bold text-green-700">
            {registration?.date.slice(0, 10)}
          </div>
        </div>
      </div>
      <button onClick={handleSubmit} className="bg-[#dff0d8] border-2 border-green-500 rounded-2xl mt-5 px-10 py-2 text-green-700 font-bold text-[30px]">BACK</button>
    </div>
  );
};

export default FinalDeets;
