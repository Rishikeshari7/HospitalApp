import React,{useState} from 'react'
import verify from "../assets/verify.png"

const VerifyPage = ({setLoginPage}) => {
    setLoginPage(true)
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleChange = (e, index) => {
        const { value } = e.target;
        if (!isNaN(value) && value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value !== '' && index < 3) {
                document.getElementById(`otp-${index + 1}`).focus();
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Entered OTP is " + otp.join(''));
    };
  return (
    <div className='w-[100vw] h-[100vh] bg-customGreen2 flex justify-evenly items-center'>
        <img className='scale-90' src={verify}></img> 
        <div className='bg-customSkin flex flex-col justify-center w-[600px] h-[700px] gap-5 mr-10  rounded-3xl shadow-customShadow2'>
            <div className='mx-auto flex flex-col gap-2'>
                <p className='text-customGreen2 text-[1.7rem] font-semibold'>OTP Verification </p>
                <p className='font-medium'>Enter OTP sent on your E-mail</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mt-10">
            <label className='font-medium text-[1.1rem] mb-1 mr-[9rem]'>Enter Code</label>
            <div className='flex gap-4 '>
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            className="w-[3rem] h-[3rem] border-2 border-green-600 rounded-lg pl-4"
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                        />
                    ))}
            </div>    
            <p className='mt-7'>Didn’t receive OTP? <span className='font-semibold cursor-pointer text-customGreen2 hover:text-customGreen'>Resend</span></p>    
            <button className="bg-customGreen2 hover:bg-customGreen text-white mt-5 p-2 rounded-3xl w-[19rem]">Verify OTP</button>
        </form>
        </div>     
    </div>
  )
}

export default VerifyPage
       