import { useContext, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider';
import { FaUser } from 'react-icons/fa';


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='flex justify-between items-center h-24 w-11/12 lg:w-10/12 text-white mx-auto z-40'>
            <div className='flex justify-center items-center cursor-pointer nav-logo'>
              
                <div className="svg-wrapper w-full font-bold ">

                    <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                        <rect id="shape" height="40" width="150" />
                    </svg>

                    <div className="text" id="see_all_btn">

                        <p className="flex justify-center items-center text-2xl font-extrabold ">
                            AutoSport
                        </p>
                    </div>
                </div>
                <img className='w-16 lg:w-20 hover:translate-x-6 transition-all duration-200' src="https://i.ibb.co/b2jhr4G/logo.png" alt="" />
            </div>

            {/* <Link to='/' className='w-full text-3xl font-bold text-[#df6800]'>AutoSport</Link> */}
            <ul className='hidden md:flex font-semibold whitespace-nowrap'>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                <NavLink to='/allcars' className={({ isActive }) => (isActive ? 'active' : 'default')}>All Cars</NavLink>
                {
                    user && <>
                    <NavLink to='/mycars' className={({ isActive }) => (isActive ? 'active' : 'default')}>My Cars</NavLink>
                <NavLink to='/addcar' className={({ isActive }) => (isActive ? 'active' : 'default')}>Add Car</NavLink>
                    </>
                }
                <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
                {user && <div className='tooltip tooltip-bottom' data-tip={user.displayName ? user.displayName : 'User name unavailable'}>
                    <NavLink
                        to='/user'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        {user.photoURL ? <img className='w-8 h-8 mx-4 rounded-full' src={user.photoURL} alt="" /> : <FaUser className='text-lg w-6 h-6 mx-4'></FaUser>}


                    </NavLink>
                </div>}

                <div className='mt-5'>
                    {user ? <Link
                        onClick={handleLogOut}
                        className='inline-flex justify-center items-center py-2 px-5 font-medium text-center text-white btn btn-sm btn-accent normal-case ml-5 mt-1'
                    >
                        Logout
                    </Link> :
                        <Link
                            to='/login'
                            className='inline-flex justify-center items-center py-2 px-5 font-medium text-center text-white btn btn-sm btn-primary normal-case ml-5'
                        >
                            Login
                        </Link>}
                </div>

            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[80%] h-full z-50 border-r border-r-gray-900 bg-[#282828] ease-in-out duration-500 text-white font-semibold' : 'ease-in-out duration-500 fixed left-[-100%]'}>

            {user && 
            <div className='flex items-center'>
                    <NavLink
                        to='/user'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        {user.photoURL ? <img className='w-8 h-8 rounded-full' src={user.photoURL} alt="" /> : <FaUser className='text-lg w-6 h-6'></FaUser>}


                    </NavLink>
                    <h3 className='font-semibold'>{user.displayName}</h3>
                </div>}

                <li className='p-4  border-b border-gray-600'> <NavLink className='p-4' to='/' >Home</NavLink></li>
                <li className='p-4 border-b border-gray-600'><NavLink to='/allcars' className='p-4'>All Cars</NavLink></li>
               {
                     user && <>
                      <li className='p-4 border-b border-gray-600'><NavLink to='/mycars' className='p-4'>My Cars</NavLink></li>
                <li className='p-4 border-b border-gray-600'><NavLink to='/addcar' className='p-4'>Add Car</NavLink></li>
                     </>
               }
                <li className='p-4 border-b border-gray-600'><NavLink to='/blog' className='p-4'>Blog</NavLink></li>
                {/* <li className='p-4 border-b border-gray-600'><Link to='/login' className='p-4'>Login</Link></li> */}

               

                <div className='mt-5'>
                    {user ? <Link
                        onClick={handleLogOut}
                        className='inline-flex justify-center items-center py-2 px-5 font-medium text-center text-white btn btn-sm btn-accent normal-case ml-5 mt-1'
                    >
                        Logout
                    </Link> :
                        <Link
                            to='/login'
                            className='inline-flex justify-center items-center py-2 px-5 font-medium text-center text-white btn btn-sm btn-primary normal-case ml-5'
                        >
                            Login
                        </Link>}
                </div>


            </ul>
        </div>
    );
};

export default NavBar;