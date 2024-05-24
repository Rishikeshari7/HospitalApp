import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder,MdOutlineStarHalf } from "react-icons/md";

const DoctorCard = ({doctor}) => {
    const stars = [];
    const fullStars = Math.floor(doctor.star);
    const hasHalfStar = doctor.star % 1 !== 0;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<MdOutlineStar key={i} className="text-customGreen2" />);
    }
    if (hasHalfStar) {
      stars.push(<MdOutlineStarHalf key={fullStars} className="text-customGreen2" />);
    }
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<MdOutlineStar key={fullStars + i} className="text-gray-300" />);
    }
  
  return (
    <div className='bg-white flex justify-center items-center flex-col p-4 gap-1 rounded-2xl shadow-lg border-[1px] border-customText' >
        <img className='h-[7rem] object-contain border-2 border-customGreen rounded-full p-[0.2rem] pt-[0.3rem] pl-[0.45rem]' src={doctor.img}></img>
        <p className='text-customGreen2 font-medium text-[1.1rem]'>{doctor.name}</p>
        <p className='text-[0.7rem]'>E-mail: {doctor.email}</p>
        <p className='flex'>{stars}</p> 
    </div>

  )
}

export default DoctorCard
