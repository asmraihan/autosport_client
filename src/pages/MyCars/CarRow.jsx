
import { FaEdit, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CarRow = ({ singleCar,handleDelete }) => {
    const { _id, photo, name, seller, email, category, price, rating, quantity, details } = singleCar

  
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{seller}</div>
                        <div className="text-sm opacity-50">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {category} 
                <br />
                <span className="badge badge-ghost badge-sm">{quantity}</span>
            </td>
            <td>{email}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
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