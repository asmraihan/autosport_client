import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import CarRow from "./CarRow";
import Swal from 'sweetalert2'
import useTitle from "../../hooks/useTitle";

const options = [
    { value: 'ascending', label: 'Ascending' },
    { value: 'descending', label: 'Descending' },
]

const MyCars = () => {
    const [selectedOption, setSelectedOption] = useState(options[0])
    useTitle('My Cars')
    const { user } = useContext(AuthContext)
    const [myCars, setMyCars] = useState([])
    const url = `http://localhost:5000/mycars?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyCars(data))
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deletecar/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myCars.filter(car => car._id !== id)
                            setMyCars(remaining)
                        }
                    })

            }
        })
    }

    return (
        <div className="my-6 lg:my-12">

            <h3 className="text-2xl text-center my-8 font-semibold">Total number of toys added by {user?.displayName} : <span className="text-orange-600"> {myCars?.length}</span>  </h3>

          <div className="w-5/6 mx-auto flex justify-end my-4">
          <select className="select select-accent">
                <option disabled selected>Sort by Price</option>
                <option className="font-semibold">Ascending</option>
                <option className="font-semibold">Descending</option>
            </select>
          </div>

            <div className="overflow-x-auto w-5/6 mx-auto">
                <table className="table table-zebra w-full overflow-hidden">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Seller</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available quantity</th>
                            <th>Rating</th>
                            <th>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            myCars?.map(singleCar => <CarRow
                                key={singleCar._id}
                                singleCar={singleCar}
                                handleDelete={handleDelete}
                            ></CarRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCars;