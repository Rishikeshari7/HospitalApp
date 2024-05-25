import { useState } from 'react';
import { MdDashboardCustomize } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { RiContactsBookUploadLine } from "react-icons/ri";
import { IoShareSocial } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import MainDashboard from './pages/MainDashboard';
import { Routes , Route , NavLink } from 'react-router-dom';
import DoctorPage from './pages/DoctorPage';
import LoginPage from './pages/LoginPage';
import VerifyPage from './pages/VerifyPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("DASHBOARD");
  const [atLoginPage,setLoginPage]=useState(true);
  const [isLoggedIn,setLoggedIn]=useState(false);
  const [email, setEmail] = useState('');
  return (
    <>
    <div className='flex'>
    {
      !atLoginPage&&
      <nav className='bg-customGreen h-[100vh] w-[16rem]'>
        <div className='flex flex-col justify-between h-full text-customText pt-[7rem] pb-10 text-[1.1rem] pl-3 font-medium'>
          <ul className='flex flex-col gap-2'>
            <NavLink to="/dashboard"
              className={`flex items-center gap-3 p-3 rounded-3xl rounded-r-sm cursor-pointer ${activeItem === 'DASHBOARD' ? 'bg-customSkin text-customGreen' : ''}`}
              onClick={() => setActiveItem('DASHBOARD')}
            >
               <MdDashboardCustomize /> DASHBOARD
            </NavLink>
            <NavLink to="/doctor"
              className={`flex items-center gap-3 p-3 rounded-3xl rounded-r-sm cursor-pointer ${activeItem === 'Doctor' ? 'bg-customSkin text-customGreen' : ''}`}
              onClick={() => setActiveItem('Doctor')}
            >
              <FaUserDoctor /> Doctor
            </NavLink>
            <li
              className={`flex items-center gap-3 p-3 rounded-3xl rounded-r-sm cursor-pointer ${activeItem === 'Uploads' ? 'bg-customSkin text-customGreen' : ''}`}
              onClick={() => setActiveItem('Uploads')}
            >
              <RiContactsBookUploadLine /> Uploads
            </li>
            <li
              className={`flex items-center gap-3 p-3 rounded-3xl rounded-r-sm cursor-pointer ${activeItem === 'Connection' ? 'bg-customSkin text-customGreen' : ''}`}
              onClick={() => setActiveItem('Connection')}
            >
              <IoShareSocial /> Connection
            </li>
          </ul>
          <ul className='flex flex-col gap-5 pb-5'>
            <li
              className={`flex items-center gap-3 p-3 rounded-3xl rounded-r-sm cursor-pointer ${activeItem === 'Setting' ? 'bg-customSkin text-customGreen' : ''}`}
              onClick={() => setActiveItem('Setting')}
            >
              <IoMdSettings /> Setting
            </li>
            <li
              className={`flex items-center gap-3 p-3 rounded-3xl rounded-r-sm cursor-pointer ${activeItem === 'Logout' ? 'bg-customSkin text-customGreen' : ''}`}
              onClick={() => {setActiveItem('Logout');setLoggedIn(false);navigate("/");setLoginPage(true);setActiveItem('DASHBOARD')}}
            >
              <MdOutlineLogout /> Logout
            </li>
          </ul>
        </div>
      </nav>
    }
   
      <Routes>
        <Route path ="/" element={<LoginPage email={email} setEmail={setEmail} setLoginPage={setLoginPage}/>} ></Route>
        <Route path="/verify" element={<VerifyPage setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} email={email} setEmail={setEmail} setLoginPage={setLoginPage}/>} ></Route>
        <Route path="/dashboard" element={<MainDashboard isLoggedIn={isLoggedIn}/>}></Route>
        <Route path ="/doctor" element={<DoctorPage isLoggedIn={isLoggedIn}/>} ></Route>
      </Routes>
      </div>
    <ToastContainer/>
    </>
  );
}

export default App;
