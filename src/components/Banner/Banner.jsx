import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//TODO: Add images to the slider

const Banner = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="header overflow-hidden">
            <Slider {...sliderSettings}>
{/* 
https://i.ibb.co/sgkNMdf/carbanner3.jpg
https://i.ibb.co/GCSPB2P/carbanner2.jpg
https://i.ibb.co/SwTfJX4/carbanner1.jpg
*/}
            <div className="relative">
                    <img className='w-full mx-auto bg-cover' src='https://i.ibb.co/GCSPB2P/carbanner2.jpg' alt="Car Toy 1" />
                    <div className="bg-black/80 w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold mb-4">Welcome to AutoSport</h1>
                        <p className="text-lg my-4">Uncover a diverse selection of car toys designed to kids of all age</p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white transition-all duration-300  focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="/get-started"
                            >
                                Get Started
                            </a>
                            <a
                                className="block w-full rounded border border-orange-600 px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto"
                                href="/about"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img className='w-full mx-auto bg-cover' src='https://i.ibb.co/sgkNMdf/carbanner3.jpg' alt="Car Toy 1" />
                    <div className="bg-black/80 w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold mb-4">Welcome to AutoSport</h1>
                        <p className="text-lg my-4">Uncover a diverse selection of car toys designed to kids of all age</p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white transition-all duration-300  focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="/get-started"
                            >
                                Get Started
                            </a>
                            <a
                                className="block w-full rounded border border-orange-600 px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto"
                                href="/about"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="relative">
                    <img className='w-full mx-auto bg-cover' src='https://i.ibb.co/SwTfJX4/carbanner1.jpg' alt="Car Toy 1" />
                    <div className="bg-black/80 w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold mb-4">Welcome to AutoSport</h1>
                        <p className="text-lg my-4">Uncover a diverse selection of car toys designed to kids of all age</p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white transition-all duration-300  focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="/get-started"
                            >
                                Get Started
                            </a>
                            <a
                                className="block w-full rounded border border-orange-600 px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto"
                                href="/about"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>

            </Slider>

        </div>
    );
};

export default Banner;