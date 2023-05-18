import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const CarDetails = () => {
    const singleCar = useLoaderData()
    const { _id, photo, name, seller, email, category, price, rating, quantity, details } = singleCar
    return (
        <>
            <div className="min-w-screen min-h-screen bg-zinc-800 flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div className="w-full max-w-6xl rounded bg-neutral-800 shadow-xl p-10 lg:p-20 mx-auto text-white relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <h1 className="font-bold uppercase text-2xl  px-10">
                                {name}
                            </h1>
                            <div className="relative">

                                <img
                                    src={photo}
                                    className="w-full relative z-10 transition-all scale-100 hover:scale-110 duration-300"
                                    alt=""
                                />
                                <div className="border-4 border-orange-500 absolute top-10 bottom-10 left-10 right-10 z-0" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-10">

                                <h1 className="font-semibold text-lg mb-5">
                                    Seller : {seller}
                                </h1>
                                <h1 className="font-semibold text-lg mb-5">
                                    Email : {email}
                                </h1>
                                <h1 className="font-semibold text-lg mb-5">
                                    Price : ${price}
                                </h1>
                                <h1 className="font-semibold text-lg mb-5">
                                    Quantity : {quantity}
                                </h1>

                                <div className='flex items-center mb-5 gap-2'>
                                    <h1 className="font-semibold text-lg">
                                        Rating : {rating}
                                    </h1>
                                    <Rating style={{ maxWidth: 120 }} value={Math.round(rating || 0)} readOnly/>
                                </div>

                                <p className="">
                                    {details}...{" "}

                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>

                </div>
            </div>
        </>

    );
};

export default CarDetails;