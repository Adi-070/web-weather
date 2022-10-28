import React, { useState } from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import images from '../src/images.png'
import axios from "axios";
import { useEffect } from 'react';

const App = () =>
{ 
  const apiKey="aa7f237471904ac49776bb5a3f01c6c8"

  const [inputcity,setinputcity]= useState("")
  const [data,setdata]= useState({})

  const getweatherdetails = (cityName) =>
  { 
    if(!cityName) return

    const apiURL="https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    axios.get(apiURL).then((res)=> {
    console.log("response",res.data)
    setdata(res.data)
    }).catch((err)=>{
    console.log("err",err)
    })
  }

  const handleChangeInput = (e) =>
  {
     setinputcity(e.target.value)
  }



  const SearchManage = () => {
    getweatherdetails(inputcity)
  }

  useEffect(() => {
    getweatherdetails("kolkata")
  }, [])



return (
  <>
<div className='col md-12'>
    <div className='Weatherbg'>
    <h1 style={{color:'white', fontWeight:500}}>Weather app</h1> 
    <label htmlFor = "city" id="city" >City</label><br/>
    <input type="text" className='form-control' placeholder='Enter city' name='city' onChange={handleChangeInput} /><br/>
    <button type='button' className="btn btn-success" onClick={SearchManage} >Search <ArrowCircleRightIcon /></button>
    </div>
    <div className='col md-12 text-center'>

      <div className='shadow rounded Wbox'>
        <img src ={images} className='Wicon' /><br/><br/>
        <h2 className="Wcity">{data?.name}</h2><br/>
        <h3 className='Wtemp'>{((data?.main?.temp)-273.15).toFixed(2)}°C</h3>
      </div>
    </div>
 </div>
    </>
  
  
);
}
export default App
