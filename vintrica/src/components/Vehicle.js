import React, { useState } from "react";
import { Select, Button, Input } from "antd";
import { GiEuropeanFlag } from "react-icons/gi";
import { useSelector } from "react-redux";
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import axios from "axios";
import {BiBus,BiEuro,BiTrain} from 'react-icons/bi'
import {FaMotorcycle} from 'react-icons/fa'
import {AiFillCar} from 'react-icons/ai'
import {BsTruck} from 'react-icons/bs'
import { registrationFailure, registrationStart, registrationSuccess } from "../redux/registerSlice";
import { BsCalendarCheck } from "react-icons/bs";

const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
};
// const onChange = (date, dateString) => {
//     console.log(date, dateString);
//   };
const { Option } = Select;

const onSearch = (value) => {
  console.log("search:", value);
};
const Vehicle = () => {
    const {details} = useSelector(state => state.details);
  const [country, setCountry] = useState("");
  const[number, setNumber] = useState("");
  const [date, setDate] = useState("");
  console.log(country, date)
  console.log(number)
    const dispatch=useDispatch()
    const onChange=(date=moment,dateString)=>{
        if(date){
            // console.log(dateString)
            setDate(dateString)
        }
    }
  
  
//   console.log(country);
console.log(details+'hiiiiiii')
// const dispatch=useDispatch()
const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      dispatch(registrationStart());
      const res = await axios.post("http://localhost:8000/api/registration", { country,number, date });
      console.log(res)
      console.log(res.data+'yoooooo');
      dispatch(registrationSuccess(res.data));
    //   navigate('/continue')
    } catch (err) {
        console.log(err)
      dispatch(registrationFailure());
    }
  };
  return (
    <div className="ml-60">
        <div>
      {details?.vehicle=== 'car'? <div className='flex  mt-10 w-3/5 py-5 px-5 bg-[#dff0d8] border-2 border-green-500 rounded-2xl'>
           <AiFillCar size={50} color='green' /><div className='text-[30px] pl-2 text-green-700'>{details?.vehicle}</div></div> :
          (details?.vehicle=== 'bike'? <div className='flex  mt-10 w-3/5 py-5 px-5 bg-[#dff0d8] border-2 border-green-500 rounded-2xl'>
           <FaMotorcycle size={50} color='green'  /><div className='text-[30px] pl-2 text-green-700'>{details?.vehicle}</div></div>:
           (details?.vehicle=== 'bus'? <div className='flex  mt-10 w-3/5 py-5 px-5 bg-[#dff0d8] border-2 border-green-500 rounded-2xl'>
           <BiBus size={50} color='green' /><div className='text-[30px] pl-2 text-green-700'>{details?.vehicle}</div></div>:
           (details?.vehicle=== 'train'? <div className='flex  mt-10 w-3/5 py-5 px-5 bg-[#dff0d8] border-2 border-green-500 rounded-2xl'>
           <BiTrain size={50} color='green' /><div className='text-[30px] pl-2 text-green-700'>{details?.vehicle}</div></div>:
           (details?.vehicle=== 'truck'? <div className='flex  mt-10 w-3/5 py-5 px-5 bg-[#dff0d8] border-2 border-green-500 rounded-2xl'>
           <BsTruck size={50} color='green' /><div className='text-[30px] pl-2 text-green-700'>{details?.vehicle}</div></div>:
           <div className='flex  mt-10 w-3/5 py-5 px-5 bg-[#dff0d8] border-2 border-green-500 rounded-2xl'>
           <BsTruck size={50} color='green' /><div className='text-[30px] pl-2 text-green-700'>{details?.vehicle}</div></div>))))
        }
    </div>
      <div>
        <div className="text-[17px] mt-2 mb-5">
          <span className="font-bold">Valid in:</span> {details?.country}
        </div>
        <div className="bg-[#f9f9f9] w-3/5 py-5 px-5">
          <div className="text-[25px] mb-5">Vehicle details</div>
          <div className="flex">
            <div className="text-[15px] pr-10">Country of registration</div>
            <div>
              <Select
                showSearch
                placeholder="Select Registered Country"
                // optionFilterProp="children"
                onChange={(e)=>setCountry(e)}
                // onChange={(e) => setCountry(e)}
                onSearch={onSearch}
                style={{
                  width: 500,
                }}
                // filterOption={(input, option) =>
                //   option.children.toLowerCase().includes(input.toLowerCase())
                // }
              >
                <Option value="bul">
                  <div className="flex text-[18px] font-semibold">
                    <GiEuropeanFlag size={30} color="green" className="mr-2" />
                    <div>Bulgaria</div>
                  </div>
                </Option>
                <Option value="hun">
                  <div className="flex text-[18px] font-semibold">
                    <GiEuropeanFlag size={30} color="green" className="mr-2" />
                    <div>Hungary</div>
                  </div>
                </Option>
                <Option value="slk">
                  <div className="flex text-[18px] font-semibold">
                    <GiEuropeanFlag size={30} color="green" className="mr-2" />
                    <div>Slovakia</div>
                  </div>
                </Option>
                <Option value="slo">
                  <div className="flex text-[18px] font-semibold">
                    <GiEuropeanFlag size={30} color="green" className="mr-2" />
                    <div>Slovenia</div>
                  </div>
                </Option>
                <Option value="cze">
                  <div className="flex text-[18px] font-semibold">
                    <GiEuropeanFlag size={30} color="green" className="mr-2" />
                    <div>Czech Republic</div>
                  </div>
                </Option>
              </Select>
              
            </div>
          </div>
          <div>
            <div className="w-2/3"></div>
            <div className="ml-48 my-2">In which country is your vehicle registered?</div>
          </div>
          {country && (<div className="flex flex-col"><div className="flex">
            <div className="flex flex-col">
            <div className="text-[15px] pr-14">Registration number</div>
            <div className="text-[15px]">(without country code)</div>
            </div>
            <div>
            <Input 
            onChange={(e)=>setNumber(e)}
             style={{width:500}} placeholder={country.slice(0,3).toUpperCase()} />
            <div>
            <div className="w-2/3"></div>
            <div className="my-2">Please enter your registration number without any blank spaces, hyphens or dots!</div>
          </div>
            </div>
          </div><div className="flex mt-2">
            <div className="flex flex-col">
            <div className="text-[15px] pr-20">Enter registration</div>
            <div className="text-[15px]">number again</div>
            </div>
            <div>
            <Input style={{width:500}} placeholder={country.slice(0,3).toUpperCase()} />
            </div>
          </div></div>)}
        </div>
      </div>
      <div className="flex justify-start mt-10 w-3/5 py-5 px-5 bg-[#dff0d8] border-2 border-green-500 rounded-2xl">
      <div className='flex '>
            <BsCalendarCheck size={50} color='green' />
           <div className='text-[30px] pl-3 text-green-700'>{details?.duration}</div> 
        </div>
        <div className='flex px-20'>
            <div className='text-[30px] text-green-700'>Price: 16.00</div><div className="mt-1"><BiEuro size={40} color='green'/></div>
        </div>
        </div>
    <div>
        <div className=' mt-1 text-[12px]  flex'>
        Prices displayed incl. statutory toll charge, incl. service charge and statutory VAT.
        </div>
    </div>
    <div className="bg-[#f9f9f9] w-3/5 py-5 px-5 mt-10">
          <div className="text-[25px] mb-5">Validity Period</div>
          <div className="flex">
            <div className="text-[15px] pr-10 mr-20">Start date</div>
            <div>
            <Space direction="vertical">
            <DatePicker
            onChange={onChange}
      format="YYYY-MM-DD"
      disabledDate={disabledDate}
      style={{ width: 500 }}
    />
        </Space>
            </div>
          </div>
        </div>
        <div className='bg-blue-100 py-2 rounded-2xl text-[18px] px-5 mt-5 w-3/5 mb-10'>
        <span className='text-[#6794b3]'>Start date:</span>{date ?(<span className='ml-1 text-[#76bbe0] font-bold'>{date} 12:00 AM</span>): <span className='font-bold text-[#76bbe0]'>Please first select the start date.</span>}
        </div>
        <button onClick={handleSubmit} className='bg-[#3486cc] rounded-2xl mb-5 w-3/5' style={{ height:50}}><div className='font-semibold text-white text-[20px]'>Add to cart</div></button>

    </div>
  );
};

export default Vehicle;
