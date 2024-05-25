import React, { useEffect } from 'react'
import Logo from "../assets/Logo.png"
import User from "../assets/User.png"
import Doctor from "../assets/Doctor.png"
import { useNavigate } from 'react-router-dom'
const MainDashboard = ({isLoggedIn}) => {
    const navigate = useNavigate()
    useEffect(()=>{
        if(!isLoggedIn)
            navigate("/")
    },[])
    const doctors=[
        {
            profile:Doctor,
            name:"Dr. Rishi Keshari",
            Speciality:"Neurosurgeon",
            connections:"87",
        },
        {
            profile:Doctor,
            name:"Dr. Shashank Sharma",
            Speciality:"Surgeon",
            connections:"54",
        },
        {
            profile:Doctor,
            name:"Dr. Rahul Tevatiya",
            Speciality:"Cardiologist",
            connections:"69",
        },
    ]
    const patients=[
        {
            profile:Doctor,
            name:"Rahul Joshi",
            Speciality:"Aids",
            connections:"2",
        },
        {
            profile:Doctor,
            name:"Shiddhant Bhaghel",
            Speciality:"Cancer",
            connections:"1",
        },
        {
            profile:Doctor,
            name:"Rohit Kumar",
            Speciality:"Fever",
            connections:"4",
        },
    ]
    const recentsConnection = [
        {
            Doctor:"Dr. Rishi Keshari",
            Patient:"Rahul Joshi",
            Date_start:"01/01/24",
            Last_meet:"28/03/24",
            Concern:"Aids"
        },
        {
            Doctor:"Dr. Tanishq Jaiswal",
            Patient:"Shiddhant Bhaghel",
            Date_start:"01/11/23",
            Last_meet:"05/01/24",
            Concern:"Cancer"
        },
        {
            Doctor:"Dr. Raj Mishra",
            Patient:"Rohit Kumar",
            Date_start:"01/01/24",
            Last_meet:"28/01/24",
            Concern:"Goiter"
        },
    ]
  return (
    <div className='bg-customGreen w-full'>
            
      <div className='m-8 mt-2 ml-0 h-[94vh] bg-customSkin rounded-3xl shadow-customShadow2 p-5 pl-7 pt-3'>
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
                <p className='text-customGreen text-[1rem] font-semibold mt-1'>Welcome back!</p>
                <p className='customDashboard font-semibold text-customDashboard text-[1.7rem] -mt-2'>Dashboard</p>
            </div>
            <img src={Logo}></img>
        </div>

                {/* DOCTOR & Patients */}
        <div className='flex mt-1 gap-10'>
            <div className='bg-white rounded-3xl shadow-xl p-4 pl-6 pb-7'>
            <p className='text-[1.2rem] font-semibold'>Doctors</p>
            <table className="table-auto border-collapse border-2  mt-4 text-[0.7rem]">
            <thead className="border-2">
            <tr className="text-gray-700">
                <th className="px-4 py-2">Profile</th>
                <th className="px-4 py-2">Doctor</th>
                <th className="px-4 py-2">Speciality</th>
                <th className="px-4 py-2">Connection</th>
            </tr>
            </thead>
            <tbody >
            {doctors.map((doctor, index) => (
                <tr key={index} className="text-gray-700">
                <td className="px-4 py-1  flex justify-center items-center"><img className=" flex justify-center h-10 items-center border-2 border-customGreen rounded-full " src={doctor.profile} alt="Profile" /></td>
                <td className="px-4 py-1 text-gray-400">{doctor.name}</td>
                <td className=" px-4 py-1">{doctor.Speciality}</td>
                <td className="px-4 py-1">{doctor.connections}</td>
                </tr>
            ))}
            </tbody>
        </table>
            </div>
            {/* Patients */}
            <div className='bg-white rounded-3xl shadow-xl p-4 pl-6 pb-7'>
            <p className='text-[1.2rem] font-semibold'>Patients</p>
            <table className="table-auto border-collapse border-2  mt-4 text-[0.7rem]">
            <thead className="border-2">
            <tr className="text-gray-700">
                <th className="px-4 py-2">Profile</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Problem</th>
                <th className="px-4 py-2">Connections</th>
            </tr>
            </thead>
            <tbody >
            {patients.map((patient, index) => (
                <tr key={index} className="text-gray-700">
                <td className="px-4 py-1  flex justify-center items-center"><img className=" flex justify-center h-10 items-center border-2 border-customGreen rounded-full " src={patient.profile} alt="Profile" /></td>
                <td className="px-4 py-1 text-gray-400">{patient.name}</td>
                <td className=" px-4 py-1">{patient.Speciality}</td>
                <td className="px-4 py-1">{patient.connections}</td>
                </tr>
            ))}
            </tbody>
        </table>
            </div>
            </div>
                {/* Recents Connection  */}
            <div className='bg-white rounded-3xl shadow-2xl p-5 mt-7 pb-7 flex flex-col'>
            <p className='text-[1.2rem] font-semibold'>Recent connections</p>
            <table className="table-auto border-collapse border-2  mt-4 text-[0.8rem]">
            <thead className="border-2">
            <tr className="text-gray-700">
                <th className="pr-[5rem] py-2">Doctor</th>
                <th className="pr-[7rem] py-2">Patient</th>
                <th className="pr-10 py-2">Date start</th>
                <th className="pr-10 py-2">Last meet</th>
                <th className="pr-10 py-2">Concern</th>
            </tr>
            </thead>
            <tbody >
            {recentsConnection.map((rctconn, index) => (
                <tr key={index} className="text-gray-700">
                
                <td className="px-14 py-2 text-gray-400">{rctconn.Doctor}</td>
                <td className=" px-14 py-2">{rctconn.Patient}</td>
                <td className=" px-14 py-2">{rctconn.Date_start}</td>
                <td className=" px-14 py-2">{rctconn.Last_meet}</td>
                <td className="px-14 py-2">{rctconn.Concern}</td>
                </tr>
            ))}
            </tbody>
        </table>
            </div>
        </div>
    </div>
  )
}

export default MainDashboard
