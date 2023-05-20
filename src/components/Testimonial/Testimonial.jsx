import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Testimonial = () => {
    return (
   
            <div data-aos="zoom-in-up" className="bg-zinc-800">
                <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                            Testimonials
                        </h2>
                        <p className="mb-8 lg:mb-16 sm:text-xl text-gray-400">
                            Find out what our customers are saying about us.
                        </p>
                    </div>
                    <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
                        <figure className="flex flex-col justify-center items-center p-8 text-center border-b md:p-12 lg:border-r bg-zinc-900 border-gray-700">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
                                <h3 className="text-lg font-semibold text-white">
                                 "Speechless with how it was so easy to order"
                                </h3>
                                <p className="my-4">
                                
                                  Amazing customer service. I was speechless with how it was so easy to order and how fast it was delivered. I will definitely be ordering from them again.
                                  
                                </p>
                              
                                <p className="my-4">
                                    If you care for your time, I hands down would go with this."
                                </p>
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">
                                <img
                                    className="w-9 h-9 rounded-full"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                                    alt="profile picture"
                                />
                                <div className="space-y-0.5 font-medium text-white text-left">
                                    <div>Bonnie Green</div>
                                  
                                </div>
                            </figcaption>
                        </figure>
                        <figure className="flex flex-col justify-center items-center p-8 text-center border-b  md:p-12 bg-zinc-900/90 border-gray-700">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
                                <h3 className="text-lg font-semibold text-white">
                                   "Solid Work and Great Support"
                                </h3>
                                <p className="my-4">
                                Got my order in 2 days. I was so happy with the service. I will definitely be ordering from them again.
                                </p>
                                <p className="my-4">
                                You have many toys to choose from for your kids. I love the fact that 
                                    you can use the cars as toys and as a collection. I am very happy with the service.

                                </p>
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">
                                <img
                                    className="w-9 h-9 rounded-full"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                                    alt="profile picture"
                                />
                                <div className="space-y-0.5 font-medium text-white text-left">
                                    <div>Roberta Casas</div>
                                  
                                </div>
                            </figcaption>
                        </figure>
                        <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b lg:border-b-0 md:p-12 lg:border-r bg-zinc-900/90 border-gray-700">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
                                <h3 className="text-lg font-semibold text-white">
                                   "Mindblowing workflow and variants"
                                </h3>
                                <p className="my-4">
                                   Nice and easy to order. I was so happy with the service. I will definitely be ordering from them again.
                                </p>
                                <p className="my-4">
                                    Everything is so well structured and clean .I've learnt so
                                    much about cars and toys.
                               
                                
                                    Aesthetically, the well designed toys are beautiful and will
                                    undoubtedly will last for years to come.
                                </p>
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">
                                <img
                                    className="w-9 h-9 rounded-full"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                    alt="profile picture"
                                />
                                <div className="space-y-0.5 font-medium text-white text-left">
                                    <div>Jese Leos</div>
                                   
                                </div>
                            </figcaption>
                        </figure>
                        <figure className="flex flex-col justify-center items-center p-8 text-center md:p-12 bg-zinc-900 border-gray-700">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
                                <h3 className="text-lg font-semibold text-white">
                                    "Efficient and quantity service"
                                </h3>
                                <p className="my-4">
                                    "This is a very complex and beautiful set of elements. Under the
                                    hood it comes with the best things from 2 different worlds Cars and toys
                                </p>
                                <p className="my-4">
                                    You have many toys to choose from for your kids. I love the fact that 
                                    you can use the cars as toys and as a collection. I am very happy with the service.
                                </p>
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">
                                <img
                                    className="w-9 h-9 rounded-full"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                                    alt="profile picture"
                                />
                                <div className="space-y-0.5 font-medium text-white text-left">
                                    <div>Joseph McFall</div>
                                  
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            </div>
       

    );
};

export default Testimonial;