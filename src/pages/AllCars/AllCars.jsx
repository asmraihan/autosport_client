import { useLoaderData } from "react-router-dom";
import AllCarRow from "./AllCarRow";


const AllCars = () => {
    const allCars = useLoaderData()
    return (
        <div className="my-6 lg:my-12">
            <h3 className="text-2xl text-center my-8 font-semibold">Total number of toys in stock: <span className="text-orange-600"> {allCars?.length}</span></h3>
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
            </div>
        </div>
    );
};

export default AllCars;