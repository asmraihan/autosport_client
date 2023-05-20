import { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const AllCarRow = ({ singleCar }) => {
    const {user} = useContext(AuthContext)
    const { _id, photo, name, seller, email, category, price,  quantity } = singleCar
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
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded bg-zinc-800 w-24 h-24">
                            {photo && <img className="p-4" src={photo} alt="img" />}

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
                ${price}
            </td>
            <td>
                {quantity}
            </td>
            <td>
               <Link className="flex btn btn-accent btn-sm text-white flex-nowrap" onClick={handleAlert} to={`/car/${_id}`}>
               <button className="">View Details</button>
               <FaArrowRight className="ml-1"></FaArrowRight>
               </Link>
            </td>
        </tr>
    );
};

export default AllCarRow;