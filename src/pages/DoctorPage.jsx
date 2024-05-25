import React , {useEffect} from 'react'
import User from "../assets/User.png"
import Logo from "../assets/Logo.png"
import Doctor from "../assets/Doctor.png"
import { LiaStethoscopeSolid } from "react-icons/lia";
import DoctorCard from '../components/DoctorCard';
import { useNavigate } from 'react-router-dom';
const DoctorPage = ({isLoggedIn}) => {
    const navigate = useNavigate()
    useEffect(()=>{
        if(!isLoggedIn)
            navigate("/")
    },[])
    const allDoctor = [
        {
            img:Doctor,
            name:"Dr. Rishi Keshari",
            email:"rishi22@gmail.com",
            star:3.2,
        },
        {
            img:Doctor,
            name:"Dr. Rishi Keshari",
            email:"rishi22@gmail.com",
            star:4.4,
        },
        {
            img:Doctor,
            name:"Dr. Rishi Keshari",
            email:"rishi22@gmail.com",
            star:2.1,
        },
        {
            img:Doctor,
            name:"Dr. Rishi Keshari",
            email:"rishi22@gmail.com",
            star:2.7,
        },
        {
            img:Doctor,
            name:"Dr. Rishi Keshari",
            email:"rishi22@gmail.com",
            star:4,
        },
        {
            img:Doctor,
            name:"Dr. Rishi Keshari",
            email:"rishi22@gmail.com",
            star:4.5,
        },
        {
            img:Doctor,
            name:"Dr. Rishi Keshari",
            email:"rishi22@gmail.com",
            star:3.5,
        },
        {
            img:Doctor,
            name:"Dr. Rishi Keshari",
            email:"rishi22@gmail.com",
            star:3.5,
        },
        {
            img:Doctor,
            name:"Dr. Rishi Keshari",
            email:"rishi22@gmail.com",
            star:3.5,
        },
        {
            img:Doctor,
            name:"Dr. Rishi Keshari",
            email:"rishi22@gmail.com",
            star:3.5,
        },
    ]
  return (
    <div className='bg-customGreen w-full'>
            
        <div className='m-8 mt-3 ml-0 h-[94vh] bg-customSkin rounded-3xl shadow-customShadow2 p-5 pl-7 pt-3'>
                {/* TOP SECTION  */}
            <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
                <div className='flex gap-2'>
                    <img className='object-contain' src={User}></img>
                    <div className='text-[0.85rem]'>
                        <p className='font-semibold'>Rahul</p>
                        <p className='text-customGrayText'>Admin account</p>
                    </div>
                </div>
                <p className='flex justify-center items-center customDashboard font-semibold text-customDashboard text-[1.8rem] mt-4 gap-5'>Doctors Available <span className='font-bold'><LiaStethoscopeSolid className='text-[2.5rem]'/></span> </p>
            </div>
            <img src={Logo}></img>
            </div>
                {/* ALL CARD SECTION  */}
            <div className='grid grid-cols-4 gap-5 m-10 h-[29rem] overflow-y-scroll pr-3'>
                {
                    allDoctor.map((doctor,index)=>(<DoctorCard key={index} doctor={doctor}/>))
                }
                
            </div>
        </div>
    </div>
  )
}

export default DoctorPage
