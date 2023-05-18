
const Gallery = () => {
    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">

            <div className="w-1/2 overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
              <div className='bg-red-500/50 bg-opacity-75 opacity-0 hover:opacity-100 duration-200 text-white absolute inset-0 px-6 py-4 lg:flex flex-col hidden '>
                    <p>Image title</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate reprehenderit eaque suscipit dolorem? Enim exercitationem nostrum at voluptatem quam?...</p>           
                </div>
            </div>

            <div className="w-1/2 p-1 md:p-2 overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl cursor-pointer">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
              <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 duration-200 text-gray-300 absolute inset-0 px-6 py-4 lg:flex flex-col hidden'>
                    <p>Image title</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate reprehenderit eaque suscipit dolorem? Enim exercitationem nostrum at voluptatem quam?...</p>           
                </div>
            </div>

            <div className="w-full p-1 md:p-2 overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl cursor-pointer">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
               <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 duration-200 text-gray-300 absolute inset-0 px-6 py-4 lg:flex flex-col hidden'>
                    <p>Image title</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate reprehenderit eaque suscipit dolorem? Enim exercitationem nostrum at voluptatem quam?...</p>           
                </div>
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">

            <div className="w-full p-1 md:p-2 overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl cursor-pointer">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
               <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 duration-200 text-gray-300 absolute inset-0 px-6 py-4 lg:flex flex-col hidden'>
                    <p>Image title</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate reprehenderit eaque suscipit dolorem? Enim exercitationem nostrum at voluptatem quam?...</p>           
                </div>
            </div>

            <div className="w-1/2 p-1 md:p-2 overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl cursor-pointer">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
              <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 duration-200 text-gray-300 absolute inset-0 px-6 py-4 lg:flex flex-col hidden'>
                    <p>Image title</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate reprehenderit eaque suscipit dolorem? Enim exercitationem nostrum at voluptatem quam?...</p>           
                </div>
            </div>
            <div className="w-1/2 p-1 md:p-2 overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl cursor-pointer">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
              <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 duration-200 text-gray-300 absolute inset-0 px-6 py-4 lg:flex flex-col hidden'>
                    <p>Image title</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate reprehenderit eaque suscipit dolorem? Enim exercitationem nostrum at voluptatem quam?...</p>           
                </div>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default Gallery;