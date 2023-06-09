import { Rating } from '@smastrom/react-rating';
import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Card = ({ car }) => {
    const { user } = useContext(AuthContext)
    const { _id, photo, name, price, rating } = car
    const handleAlert = () => {
        if (!user) {
            // Swal.fire('You have to login first to view details')
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'You have to login first to view details',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }
    return (
        <div data-aos="zoom-in-down" className="card bg-neutral-900/40 shadow-xl">
            <figure className='relative'>
            <img
                                    src={photo}
                                    className="w-full relative z-10 transition-all scale-100 hover:scale-110 duration-300"
                                    alt=""
                                />
                                <div className="border-4 border-orange-500 absolute top-10 bottom-10 left-10 right-10 z-0" />
                </figure>
            <div className="card-body">
                <h2 className="card-title text-orange-400 mb-4">{name}</h2>
                <p className="card-title text-base">Price : ${price}</p>
               <div className='flex'>
               <p className="card-title text-base">Rating : {rating}</p>
                <Rating style={{ maxWidth: 120 }} value={Math.round(rating || 0)} readOnly/>
               </div>
                <div className="card-actions justify-end cursor-pointer mt-4">
                    <div className="svg-wrapper w-full font-bold ">
                        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                            <rect id="shape" height="40" width="150" />
                        </svg>
                        <Link onClick={handleAlert} to={`/car/${_id}`}>
                        <div className="text" id="see_all_btn">
                            <p className="flex justify-center items-center whitespace-nowrap mt-1">
                                View Details
                            </p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;