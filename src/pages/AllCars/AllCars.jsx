
import AllCarRow from "./AllCarRow";
import useTitle from "../../hooks/useTitle";
import { useEffect, useState } from "react";


const AllCars = () => {
    useTitle('All Cars')
    const [allCars,setAllCars] = useState([]) 
    const [limit,setLimit] = useState(20)
    useEffect(() => {
        fetch(`http://localhost:5000/allcars/${limit}`)
            .then(res => res.json())
            .then(data => setAllCars(data))
    }, [limit])
    const handleLimit =()=>{
        console.log('limit test')
        setLimit()
    }
    return (
        <div className="my-6 lg:my-12">
            <h3 className="text-2xl text-center my-8 font-semibold">Total number of toys in stock : <span className="text-orange-600"> {allCars?.length}</span></h3>

           <div className="w-5/6 mx-auto my-6">
           <div className="form-control">
                <div className="input-group w-full">
                    <input type="text" placeholder="Search…" className="input input-bordered w-full" />
                    <button className="btn btn-square w-1/12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
           </div>

            <div className="overflow-x-auto w-5/6 mx-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            allCars?.map(singleCar => <AllCarRow
                                key={singleCar._id}
                                singleCar={singleCar}
                            ></AllCarRow>)
                        }

                    </tbody>
                </table>
                <div className="w-full mx-auto flex justify-center my-4">
                <button onClick={handleLimit} className="btn btn-accent text-white">Show All</button>
                </div>
            </div>
        </div>
    );
};

export default AllCars;