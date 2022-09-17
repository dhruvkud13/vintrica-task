import React, { useState } from 'react'
import { Button, DatePicker, Space } from 'antd';
import moment from 'moment';
import { useDispatch } from 'react-redux';

const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
};
const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

const Validity = () => {
    const [date, setDate] = useState("");
    // const dispatch=useDispatch()
    console.log(date)
    const onChange=(date=moment,dateString)=>{
        if(date){
            console.log(dateString)
            setDate(dateString)
        }
    }
    
  return (
    <div className="ml-60">
        <div className="bg-[#f9f9f9] w-3/5 py-5 px-5 mt-10">
          <div className="text-[25px] mb-5">Validity Period</div>
          <div className="flex">
            <div className="text-[15px] pr-10 mr-20">Start date</div>
            <div>
            <Space direction="vertical">
            <DatePicker
            onChange={onChange}
      format="DD-MM-YYYY"
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
        <button className='bg-[#3486cc] rounded-2xl mb-5' style={{width:900, height:50}}><div className='font-semibold text-white text-[20px]'>Add to cart</div></button>

    </div>
  )
}

export default Validity