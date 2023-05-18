
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateCar = () => {
    const car = useLoaderData()
    const { _id , price, quantity, details } = car

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const updatedPrice = form.price.value;
        const updatedQuantity = form.quantity.value;
        const updatedDetails = form.details.value;

        const updatedCar = {
            price: updatedPrice,
            quantity: updatedQuantity,
            details: updatedDetails
        }
        fetch(`http://localhost:5000/updatecar/${_id}`,{
            method: 'PATCH',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
      
    }

    return (
        <div className="card flex-shrink-0 w-5/6 lg:w-4/6 my-12 mx-auto shadow-2xl bg-base-100">
            <h3 className="text-2xl text-center my-8 font-semibold">Update <span className='text-orange-600'>{car.name}</span></h3>
            <div className="card-body">
                <form onSubmit={handleUpdate} className="p-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' defaultValue={quantity} placeholder="quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <textarea name="details" defaultValue={details} className="textarea textarea-bordered resize-none" placeholder="Short description"></textarea>
                    </div>
                    <div className="form-control mt-10">
                        <input type="submit" value="Update" className="btn btn-accent" />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default UpdateCar;