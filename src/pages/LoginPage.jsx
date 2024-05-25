import React , {useState} from 'react'
import Login from "../assets/login.png"
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';

const LoginPage = () => {
    const [inputValue, setInputValue] = useState('');
    const loginApi = "https://medamoove.rootski.live/api/login/"


    const submitHandler =async(e)=>{
        e.preventDefault()
        console.log(inputValue)
        const response = await fetch("https://medamoove.rootski.live/api/login/",{
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({inputValue})
        });
        console.log("response ",response)
        const data = await response.json();
        console.log("data",data)
        
    }
  return (
    <div className='w-[100vw] h-[100vh] bg-customGreen2 flex justify-evenly items-center'>
      <img className='scale-90' src={Login}></img>
      <div className='bg-customSkin flex flex-col justify-center w-[600px] h-[700px] gap-5 mr-10  rounded-3xl shadow-customShadow2'>
        <div className='mx-auto flex flex-col gap-2'>
            <p className='text-customGreen2 text-[1.7rem] font-semibold'>Login to your Account </p>
            <p className='font-medium'>Welcome back! Select method to login</p>
        </div>
        <button className='flex mx-auto justify-center items-center p-4 mt-7 pt-1 pb-1 border-2 rounded-3xl gap-2 hover:bg-customText'><FcGoogle/> Google</button>
        <div className='flex justify-center mx-10 items-center gap-4'>
            <div className='flex-1 border-t-[2px] ml-10 border-customText '></div>
            <span>OR</span>
            <div className='flex-1 border-t-[2px] mr-10 border-customText'></div>
        </div>
        <form className='mx-auto flex flex-col gap-2' onSubmit={submitHandler}>
            <label className='font-medium'>Email Address</label>
            <input
            className='w-[20rem] h-10 p-1 border-2 border-customText rounded-lg '
                type="email"
                placeholder='Enter Email'
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                required
            />
            <button className='bg-customGreen2 hover:bg-customGreen text-white rounded-lg p-2 mt-8'>Get OTP</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
