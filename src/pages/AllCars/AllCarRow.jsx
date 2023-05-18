import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const AllCarRow = ({ singleCar }) => {
    const { _id, photo, name, seller, email, category, price, rating, quantity, details } = singleCar
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {photo && <img src={photo} alt="img" />}

                        </div>
                    </div>

                </div>
            </td>
            <td>
                <span className="">Name : {seller}</span>
                <br />
                <span className="">Email : {email}</span>
            </td>
            <td>{name}</td>
            <td>
                <span className="">{category}</span>
            </td>
            <td>
                {price}
            </td>
            <td>
                {quantity}
            </td>
            <td>
               <Link to={`/car/${_id}`}>
               <button  className="btn btn-accent btn-sm text-white">View Details <FaArrowRight className="ml-1"></FaArrowRight></button>
               </Link>
            </td>
        </tr>
    );
};

export default AllCarRow;