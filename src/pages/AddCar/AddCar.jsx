import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'
import useTitle from "../../hooks/useTitle";

const AddCar = () => {
    useTitle('Add Car')
    const {user} = useContext(AuthContext)

    const handleAddCar = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const newCar = {
            photo,
            name,
            seller,
            email,
            category,
            price,
            rating,
            quantity,
            details
        }
        // console.log(newCar)
        fetch('https://autosport-server.vercel.app/addcar',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Added successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
        })
    }
    return (
        <div data-aos="fade-up" className="lg:p-10 mt-10 rounded-lg lg:w-5/6 mx-auto">
        <h2 className="text-3xl font-extrabold text-center">Add a toy here</h2>
        <form onSubmit={handleAddCar} className="p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Toy name" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller</span>
                    </label>
                    <input type="text" name="seller" placeholder="Seller name" defaultValue={user?.displayName} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Enter email" defaultValue={user?.email} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Sub Category</span>
                    </label>
                    <input type="text" name="category" placeholder="Category eg.(trucks, sports)" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" placeholder="Amount in $" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name="rating" placeholder="Toy rating" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered" />
                </div>
            </div>
            <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea name="details" className="textarea textarea-bordered resize-none" placeholder="Short description"></textarea>
                </div>

            <div className="form-control mt-10">
                <input type="submit" value="Confirm" className="btn btn-accent" />
            </div>
        </form>
        <div className="card-body">
        </div>
        
    </div>
    );
};

export default AddCar;