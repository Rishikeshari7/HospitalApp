import React,{useState , useEffect} from 'react'
import verify from "../assets/verify.png"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const VerifyPage = ({email ,setLoginPage,setLoggedIn,isLoggedIn}) => {
    const navigate = useNavigate()
    console.log("Verigy page",email)
    const [OTP, setOtp] = useState(['', '', '', '']);

    const handleChange = (e, index) => {
        const { value } = e.target;
        if (!isNaN(value) && value.length <= 1) {
            const newOtp = [...OTP];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value !== '' && index < 3) {
                document.getElementById(`otp-${index + 1}`).focus();
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("otp = ",OTP.join(''))
        let otp =OTP.join('');
        const response = await fetch ("https://medamoove.rootski.live/api/verify_otp_login/",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({otp,email})
        })
        console.log("Response verify ",response)
        const data = await response.json();
        console.log("Data varify ",data);
        if(response.ok){
            console.log("TOken ",data.data.access);
            toast.success("OTP Varified");
            const token =data.data.access;
            localStorage.setItem("token",token);
            console.log("localStorage ",localStorage)
            setLoginPage(false);
            setLoggedIn(true);
            navigate("/dashboard")
        }
        else{
            toast.error("Invalid OTP")
            setOtp(['', '', '', ''])
        }
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
                    {OTP.map((digit, index) => (
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
       