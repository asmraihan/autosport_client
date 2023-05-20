
import { FaEnvelope, FaPaperPlane, FaUser } from 'react-icons/fa';

const Contact = () => {

    return (
        <div className='lg:w-4/6 w-5/6 mx-auto my-20'>
            <form>
                <h1 className="text-4xl font-bold">Contact</h1>
                <p className="text-sm mt-1 text-gray-500">
                    <FaEnvelope className='inline-block my-4'></FaEnvelope> autosport@mail.com
                </p>

                <div className="mb-6">
                    <label
                        htmlFor="name"
                        className={`block mb-4 text-sm font-medium text-white`}
                    >
                        User name
                    </label>
                    <input
                        type="name"
                        id="name"
                        className="relative flex p-2.5  dark:text-white rounded-lg bg-gray-400/10 dark:bg-gray-500/5 dark:hover:bg-gray-500/10 hover:bg-gray-400/20 outline-none border-2 border-white/0 w-full transition-all duration-200 ease-in-out sm:text-sm sm:leading-5  focus:bg-gray-400/20 focus:border-orange-600/70"
                        placeholder="User name"

                        required=""
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className={`block mb-4 text-sm font-medium text-white`}
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="relative flex p-2.5  text-white rounded-lg bg-gray-400/10 dark:bg-gray-500/5 dark:hover:bg-gray-500/10 hover:bg-gray-400/20 outline-none border-2 border-white/0 w-full transition-all duration-200 ease-in-out sm:text-sm sm:leading-5  focus:bg-gray-400/20 focus:border-orange-600/70"
                        placeholder="Enter your email"
                        required=""
                    />
                </div>

                <div className="flex items-start flex-col mb-6">
                    <label
                        htmlFor="message"
                        className={`block mb-4 text-sm font-medium text-white`}
                    >
                        Your message
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        className="relative flex p-2.5  text-white rounded-lg bg-gray-500/5 hover:bg-gray-500/10  outline-none border-2 border-white/0 w-full transition-all duration-200 ease-in-out sm:text-sm sm:leading-5  focus:bg-gray-400/20 focus:border-orange-600/70 resize-none"
                        placeholder="Leave a message..."
                        defaultValue={""}
                    />

                </div>
                <button
                    type="submit"
                    className="btn"
                > <FaPaperPlane className='inline-block mr-2'></FaPaperPlane>
                    Send
                </button>
            </form>

        </div>
    );
};

export default Contact