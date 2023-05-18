
import { FaEdit, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CarRow = ({ singleCar,handleDelete }) => {
    const { _id, photo, name, seller, email, category, price, rating, quantity, details } = singleCar

  
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded bg-zinc-800 w-24 h-24">
                            {photo && <img className='p-4' src={photo} alt="photo" />}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <span className="">{name}</span>
            </td>
            <td>
                <span className="">Name : {seller}</span> <br />
                <span className="">Email : {email}</span>
            </td>
            <td>
                <span className="">{category}</span>
            </td>
            <td>
                <span className="">${price}</span>
            </td>
            <td>
                <span className="">{quantity}</span>
            </td>
            <td>
                <span className="">{rating}</span>
            </td>
            <td>
                <span className="whitespace-normal">{details}</span>
            </td>  
           
            <td>
               <Link to={`/updatecar/${_id}`}>
               <button  className="flex gap-1 items-center rounded-lg bg-[#fe9647] text-lg hover:scale-110 transition-all duration-300 p-2 font-bold text-white hover:bg-[#e26200] m-2 tooltip tooltip-right"
                data-tip="Edit">
                    <FaEdit></FaEdit>
                </button>
               </Link>
                <button onClick={()=>handleDelete(_id)} className="flex gap-1 items-center rounded-lg bg-[#ff5d5d] text-lg hover:scale-110 transition-all duration-300 p-2  font-bold text-white hover:bg-[#ad0000] m-2 tooltip tooltip-right"
                data-tip="Delete">
                    <FaTimesCircle></FaTimesCircle>
                </button>
            </td>
        </tr>
    );
};

export default CarRow;