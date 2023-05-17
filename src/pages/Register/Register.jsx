import { FaGoogle } from "react-icons/fa";

const Register = () => {
    return (
        <section className="min-h-screen flex items-stretch text-white ">
        <div
          className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/gDmTmYy/bgcar2.jpg)"
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0" />
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Keep it special
            </h1>
            <p className="text-3xl my-4">
              Capture your personal memory in unique way, anywhere.
            </p>
          </div>
        </div>
        <div
          className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
          style={{ backgroundColor: "#161616" }}
        >
          <div
            className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/gDmTmYy/bgcar2.jpg)"
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0" />
          </div>
          <div className="w-full py-6 z-20">
            <h1 className="my-6">
             <h2 className="text-3xl font-bold">Please Login</h2>
            </h1>
          
            <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
              <div className="pb-2 pt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              
              <div className="mt-4">
                <button className="btn btn-block">
                  sign in
                </button>
              </div>
            </form>
            <p className="text-gray-100 my-6">__________OR__________</p>
            <div className="space-x-2 flex justify-center items-center btn btn-outline btn-info sm:w-2/3 w-full mx-auto">
             <h2>Login with Google</h2>
              <FaGoogle></FaGoogle>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Register;