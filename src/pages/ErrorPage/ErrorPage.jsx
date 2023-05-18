
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 mt-10 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div>
                <img className='opacity-5 z-0 w-[60vw] top-40 absolute ' src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0 z-10">

                <div className="">
                    <h1 className="my-4 text-white font-bold text-2xl">
                        Looks like you've found the doorway to the great nothing
                    </h1>
                    <p className="my-4 text-gray-400">
                        Sorry about that! Please visit our home page to get where you need to
                        go.
                    </p>
                    <Link>
                        <button
                            className="w-full rounded border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white transition-all duration-300  focus:outline-none focus:ring active:text-opacity-75 my-4 sm:w-auto"
                            href="/"
                        >
                            Go Back
                        </button>
                    </Link>
                </div>


            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>

    );
};

export default ErrorPage;