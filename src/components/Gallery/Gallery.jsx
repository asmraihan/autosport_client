import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Gallery = () => {

    return (
        <div data-aos="fade-up" data-aos-duration="500"  className="container mx-auto px-5 py-6 lg:px-32 lg:py-32">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">

          <div className="w-1/2 p-1 md:p-2 overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl cursor-pointer">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/MRwv0FK/serhii-kalyn-ZILK-6o-V6-M-unsplash.jpg"
              />
              <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 duration-200 text-white absolute inset-0 px-6 py-4 lg:flex flex-col justify-center items-center hidden'>
                    <p className="font-semibold my-4 my-4">Plymouth Barracuda</p>
                    
                    <p className="text-sm">The `68 Plymouth Barracuda Formula S is a sleek and fast muscle car that commands attention.</p>           
                </div>
            </div>

            <div className="w-1/2 p-1 md:p-2 overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl cursor-pointer">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/7n9mwd9/jeffrey-grospe-Rir-LE8-Ec-X4w-unsplash.jpg"
              />
              <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 duration-200 text-white absolute inset-0 px-6 py-4 lg:flex flex-col justify-center items-center hidden'>
                    <p className="font-semibold my-4">Chevy Custom Nomad</p>
                    
                    <p className="text-sm">The `55 Chevy Custom Nomad takes the classic Nomad wagon and gives it a customized twist.</p>           
                </div>
            </div>

            <div className="w-full p-1 md:p-2 overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl cursor-pointer">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/Gtvtq2t/i-nyoman-adi-wiraputra-6s-N-R1-Muspo-unsplash.jpg"
              />
               <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 duration-200 text-white absolute inset-0 px-6 py-4 lg:flex flex-col justify-center items-center hidden'>
                    <p className="font-semibold my-4">Corvette Racer</p>
                    
                    <p className="text-sm">The `69 Corvette Racer is a high-performance Hot Wheels model that embodies speed and precision. Its aerodynamic design, sleek curves, and racing livery make it a true contender, paying tribute to the rich racing heritage of the Corvette. </p>           
                </div>
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">

            <div className="w-full p-1 md:p-2 overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl cursor-pointer">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/XkxH7sh/ani-adigyozalyan-5-Ih37y-Zz-Lgs-unsplash.jpg"
              />
              <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 duration-200 text-white absolute inset-0 px-6 py-4 lg:flex flex-col justify-center items-center hidden'>
                    <p className="font-semibold my-4">Datsun Bluebird 510 </p>
                    
                    <p className="text-sm">The `71 Datsun Bluebird 510 Wagon combines vintage charm with a touch of practicality. With its retro styling, compact size, and versatile wagon body, this Hot Wheels model brings a cool and unique vibe to any collection.</p>           
                </div>
            </div>

            <div className="w-1/2 p-1 md:p-2 overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl cursor-pointer">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/hmWfrQ0/alex-zabavsky-WCQKa-C2ffjs-unsplash.jpg"
              />
            <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 duration-200 text-white absolute inset-0 px-6 py-4 lg:flex flex-col justify-center items-center hidden'>
                    <p className="font-semibold my-4">Ford Mustang Coupe</p>
                    
                    <p className="text-sm">The `67 Ford Mustang Coupe captures the essence of American muscle with its timeless design and legendary status.</p>           
                </div>
            </div>
            <div className="w-1/2 p-1 md:p-2 overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl cursor-pointer">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/BzdRJ7C/i-nyoman-adi-wiraputra-ID11-Bp-E0-REM-unsplash.jpg"
              />
           <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 duration-200 text-white absolute inset-0 px-6 py-4 lg:flex flex-col justify-center items-center hidden'>
                    <p className="font-semibold my-4">Dodge Charger R/T</p>
                    
                    <p className="text-sm">The `70 Dodge Charger R/T is an American muscle car icon known for its bold styling and high-performance capabilities.</p>           
                </div>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default Gallery;