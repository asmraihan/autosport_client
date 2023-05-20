import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import CarRow from "./CarRow";
import Swal from 'sweetalert2'
import useTitle from "../../hooks/useTitle";


const MyCars = () => {
    useTitle('My Cars')
    const { user } = useContext(AuthContext)
    const [myCars, setMyCars] = useState([])
    const [sortOrder, setSortOrder] = useState('')
    const url = `https://autosport-server.vercel.app/mycars?email=${user?.email}&sort=${sortOrder}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyCars(data))
    }, [url])

    // sorting function 
    const handleSort = (e) => {
        let order = e.target.value
        setSortOrder(order)
    }

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
                fetch(`https://autosport-server.vercel.app/deletecar/${id}`, {
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
        <div data-aos="fade-up" className="my-6 lg:my-12">

            <h3 className="text-2xl text-center my-8 font-semibold mx-10">Total number of toys added by {user?.displayName} : <span className="text-orange-600"> {myCars?.length}</span>  </h3>

          <div className="w-5/6 mx-auto flex justify-end my-4">
          <select onChange={handleSort} defaultValue="" hidden className="select select-accent">
                <option value="" disabled hidden>Sort by Price</option>
                <option value="Ascending" className="font-semibold">Price Low to High</option>
                <option value="Descending" className="font-semibold">Price High to Low</option>
            </select>
          </div>

            <div className="overflow-x-auto w-full mx-auto">
                <table className="table table-zebra mx-auto w-11/12">
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