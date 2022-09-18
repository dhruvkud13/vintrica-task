import React, { useState } from 'react'
import 'antd/dist/antd.css';
import {BiLockAlt,BiBus,BiTrain} from 'react-icons/bi'
import {GiEuropeanFlag} from 'react-icons/gi'
import {FaMotorcycle} from 'react-icons/fa'
import {AiFillCar} from 'react-icons/ai'
import {BsTruck} from 'react-icons/bs'
import { Select,Button,Input } from 'antd';
import {useDispatch} from 'react-redux'
import {detailsSuccess,detailsStart,detailsFailure} from '../redux/detailSlice'
import axios from "axios";
import {useNavigate} from 'react-router-dom'
const { Option } = Select;


const Form = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const[country,setCountry]= useState('');
    const[vehicle,setVehicle]= useState('');
    const[duration,setDuration]= useState('');
    const[loading,setLoading]= useState(false);
    // console.log(country)
    // console.log(vehicle)
    // console.log(duration)
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(!country || !vehicle || !duration){
          alert('Please fill all the fields')
      }
      else{
      try {
        dispatch(detailsStart());
        const res = await axios.post("http://localhost:8000/api/details", { country,vehicle, duration });
        console.log(res.data+'yoooooo');
        dispatch(detailsSuccess(res.data));
        navigate('/continue')
      } catch (err) {
        dispatch(detailsFailure());
      }
    }
    };
  return (
    <div className='flex justify-center bg-gray-200 shadow-md'>
    <div>
        {/* <img className='object-fit h-80 opacity-60 w-full' src={Petrol} alt="petrol" /> */}
        <div className='text-[35px] font-semibold pt-10'>E-vignettes at vintrica</div>
        <div className='text-[15px] mb-8'>Buy a motorway e-vignette quickly and easily at vintrica.</div>
        <div className='flex'>
        <Select
        
    //   defaultValue="Country"
      placeholder="Country"
      style={{
        width: 250,
      }}
      onChange={(e) => setCountry(e)}
    >
      <Option value="Bulgaria"><div className='flex text-[18px] font-semibold'><GiEuropeanFlag size={30} color='green' className='mr-2' /><div>Bulgaria</div></div></Option>
      <Option value="Hungary"><div className='flex text-[18px] font-semibold'><GiEuropeanFlag size={30} color='green' className='mr-2' /><div>Hungary</div></div></Option>
      <Option value="Slovakia"><div className='flex text-[18px] font-semibold'><GiEuropeanFlag size={30} color='green' className='mr-2' /><div>Slovakia</div></div></Option>
      <Option value="Slovenia"><div className='flex text-[18px] font-semibold'><GiEuropeanFlag size={30} color='green' className='mr-2' /><div>Slovenia</div></div></Option>
      <Option value="Czech Republic"><div className='flex text-[18px] font-semibold'><GiEuropeanFlag size={30} color='green' className='mr-2' /><div>Czech Republic</div></div></Option>
    </Select>
    <Select
      placeholder="Vehicle Category"
      style={{
        width: 250,
      }}
      onChange={(e) => setVehicle(e)}
    >
      <Option value="Car"><div className='flex text-[18px] font-semibold'><AiFillCar size={30} color='green' className='mr-2' /><div>Cars</div></div></Option>
      <Option value="Bike"><div className='flex text-[18px] font-semibold'><FaMotorcycle size={30} color='green' className='mr-2' /><div>Motorcycles</div></div></Option>
      <Option value="Truck"><div className='flex text-[18px] font-semibold'><BsTruck size={30} color='green' className='mr-2' /><div>Goods Transport</div></div></Option>
      <Option value="Bus"><div className='flex text-[18px] font-semibold'><BiBus size={30} color='green' className='mr-2' /><div>Buses</div></div></Option>
      <Option value="Train"><div className='flex text-[18px] font-semibold'><BiTrain size={30} color='green' className='mr-2' /><div>Category D2 and B2</div></div></Option>

    </Select>
    <Select
    
      placeholder="Duration"
      style={{
        width: 250,
      }}
      onChange={(e) => setDuration(e)}
      
    >
      <Option value="1 weekend"><div className='flex text-[18px] font-semibold'>1 weekend</div></Option>
      <Option value="10 days"><div className='flex text-[18px] font-semibold'>10 days</div></Option>
      <Option value="1 month"><div className='flex text-[18px] font-semibold'>1 month</div></Option>
      <Option value="1 year"><div className='flex text-[18px] font-semibold'>1 year</div></Option>
      <Option value=" 1 year(county-wide)"><div className='flex text-[18px] font-semibold'>1 year(county-wide)</div></Option>
    </Select>
    <Button onClick={handleSubmit} type="primary" style={{width:250}}><div className='font-bold text-[15px]'>Continue</div></Button>
        </div>
        <div className='mt-6 mb-6 text-[17px] flex'>
            <BiLockAlt size={25} color='green' className='mr-2'/>
            <div><span className='font-semibold mr-1'>Secure:</span> Your data is transmitted SSL-encrypted.</div>
            </div>
            </div>
    </div>
  )
}

export default Form