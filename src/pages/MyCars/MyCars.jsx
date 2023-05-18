import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import CarRow from "./CarRow";

const MyCars = () => {
    const { user } = useContext(AuthContext)
    const [myCars, setMyCars] = useState([])
    const url = `http://localhost:5000/mycars?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyCars(data))
    }, [])
    return (
        <div>
     
            <h3 className="text-2xl text-center my-6 font-semibold">Total number of toys added by {user?.displayName} : <span className="text-orange-600"> {myCars?.length}</span>  </h3>
            <div className="overflow-x-auto w-5/6 mx-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
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
                            ></CarRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCars;