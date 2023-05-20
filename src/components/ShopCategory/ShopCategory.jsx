import { useEffect, useState } from 'react';
import Card from './Card';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const ShopCategory = () => {

    const [cars, setCars] = useState([])
    const [activeTab, setActiveTab] = useState("Sports");
    // console.log(activeTab)
    const url = `https://autosport-server.vercel.app/allcars/${activeTab}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [activeTab,url])

    const handleTab = (categoryName) => {
        setActiveTab(categoryName);
    };
    return (
        <div data-aos="zoom-in-up" className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
            <div className="mx-auto max-w-screen-sm">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">
                    Shop by Category
                </h2>
                <p className="lg:text-xl text-gray-400">
                    Explore the whole collection of Toy cars with just a click of a button.
                </p>
            </div>
            {/* tabs */}
            <div className='my-8 lg:my-16'>
                <div className="tabs flex justify-center items-center">
                    <div
                        onClick={() => handleTab("Muscles")}
                        className={`m-2 px-3 py-1 lg:px-6 lg:py-2 text-lg rounded font-semibold cursor-pointer transition-all duration-300 ${activeTab == "Muscles" ? " bg-orange-500 text-white" : "bg-zinc-800"
                            }`}
                    >
                       Muscles
                    </div>
                    <div
                        onClick={() => handleTab("Sports")}
                        className={`m-2 px-3 py-1 lg:px-6 lg:py-2 text-lg rounded font-semibold cursor-pointer transition-all duration-300 ${activeTab == "Sports" ? " bg-orange-500 text-white" : "bg-zinc-800"
                            }`}
                    >
                      Sports
                    </div>
                    <div
                        onClick={() => handleTab("Trucks")}
                        className={`m-2 px-3 py-1 lg:px-6 lg:py-2 text-lg rounded font-semibold cursor-pointer transition-all duration-300  ${activeTab == "Trucks" ? " bg-orange-500 text-white" : "bg-zinc-800"
                            }`}
                    >
                        Trucks
                    </div>
                </div>
            </div>
            {/* cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full mx-auto'>
                {
                    cars.map(car => <Card
                        key={car._id}
                        car={car}
                    ></Card>)
                }
            </div>

        </div>
    );
};

export default ShopCategory;