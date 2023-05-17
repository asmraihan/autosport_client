import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className='flex justify-between items-center h-24 w-10/12 text-white mx-auto z-40'>
           <div className='flex justify-center items-center cursor-pointer nav-logo'>
           <img className='w-16 hover:translate-x-6 transition-all duration-200' src="car.png" alt="" />
            <div className="svg-wrapper w-full  font-bold ">
                
        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
          <rect id="shape" height="40" width="150" />
        </svg>
        
        <div className="text" id="see_all_btn">
            
          <a to="/" className="flex justify-center items-center text-2xl font-extrabold ">
            AutoSport
          </a>
        </div>
      </div>
           </div>

            {/* <Link to='/' className='w-full text-3xl font-bold text-[#df6800]'>AutoSport</Link> */}
            <ul className='hidden md:flex font-semibold whitespace-nowrap'>
                <Link to='/' className='p-6'>Home</Link>
                <Link to='/allcars' className='p-6'>All Cars</Link>
                <Link to='/mycars' className='p-6'>My Cars</Link>
                <Link to='/addcar' className='p-6'>Add Car</Link>
                <Link to='/blog' className='p-6'>Blog</Link>
                <Link to='/login' className='p-6'>Login</Link>
                <Link to='/user' className='p-6'>User</Link>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#282828] ease-in-out duration-500 text-white font-semibold' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#df6800] m-4'>AutoSport</h1>
                <li className='p-4 border-b border-gray-600'> <Link to='/' >Home</Link></li>
                <li className='p-4 border-b border-gray-600'><Link to='/allcars' className='p-4'>All Cars</Link></li>
                <li className='p-4 border-b border-gray-600'><Link to='/mycars' className='p-4'>My Cars</Link></li>
                <li className='p-4 border-b border-gray-600'><Link to='/addcar' className='p-4'>Add Car</Link></li>
                <li className='p-4 border-b border-gray-600'><Link to='/blog' className='p-4'>Blog</Link></li>
                <li className='p-4 border-b border-gray-600'><Link to='/login' className='p-4'>Login</Link></li>
                <li className='p-4 '> <Link className='p-4' to='/user'>User</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;