import React from 'react';
import { FaCarSide, FaTools } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Services = () => {
    return (
            <section data-aos="zoom-in-up" className="text-gray-200 bg-zinc-900">
                <div className="max-w-6xl mx-auto px-5 py-12 lg:py-16 ">
                    <div className="text-center mb-20">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                           Services
                        </h2>
                        <p className="mb-8 lg:mb-16 sm:text-xl text-gray-400">
                            Learn more about our services and policies. 
                        </p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:flex-row  sm:-m-4 -mx-4 -mb-10 -mt-4 ">
                        <div className="lg:p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div className="pattern-dots-md gray-light">
                                <div className="rounded bg-zinc-800 p-4 transform translate-x-4 -translate-y-4  ">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                            />
                                        </svg>{" "}
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className=" text-xl title-font font-medium mb-3">
                                            Toy design
                                        </h2>
                                        <p className="leading-relaxed text-sm text-justify">
                                            Team of experts who are very good at designing toys. We have a wide range of toys for children of all ages. We have toys for all ages. Follow us on  for more.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div className="pattern-dots-md gray-light">
                                <div className="rounded bg-zinc-800 p-4 transform translate-x-4 -translate-y-4 ">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                                      <FaTools className='w-5 h-5'></FaTools>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className=" text-xl title-font font-medium mb-3">
                                        Toy manufacturing
                                        </h2>
                                        <p className="leading-relaxed text-sm text-justify">
                                           We have a team of experts who are very good at manufacturing toys. We have a wide range of toys for children of all ages. We also have toys for adults.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div className="pattern-dots-md gray-light">
                                <div className="rounded bg-zinc-800 p-4 transform translate-x-4 -translate-y-4 ">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                                    <FaCarSide className='w-6 h-6'></FaCarSide>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className=" text-xl title-font font-medium mb-3">
                                           Doorstep delivery
                                        </h2>
                                        <p className="leading-relaxed text-sm text-justify">
                                           Our delivery service is very fast and reliable. To your doorstep in less than 24 hours. We also have a return policy if you are not satisfied with our products.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


    );
};

export default Services;