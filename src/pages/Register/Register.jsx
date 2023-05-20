import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const Register = () => {
  useTitle('Register')
  const { createUser,userProfileUpdate } = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()


  const handleRegistration = (event) => {
    event.preventDefault();
    // console.log(name, email, password)
   
    if ( email && password) {
      if (!/[0-9a-zA-Z]{6,}/.test(password)) {
        setError("Password must be at least 6 character");
        return
      }
      createUser(email, password)
      .then(result=>{
        const createdUser = result.user
        // console.log(createdUser)
        userProfileUpdate(name, photo)
        .then(()=>{
          console.log('User profile updated successfully')
        })
        .catch((err)=>{
          console.log('Failed to update user profile', err)
        })
        navigate('/')
      })
      .catch(error=>{
        setError(error.message)
        console.log(error.message)
      })
    }else{
      setError("Please input email & password")
    }
  }


    return (
        <section className="min-h-screen flex items-stretch text-white ">    
        <div
          className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
          style={{ backgroundColor: "#161616" }}
        >
          <div
            className="absolute lg:hidden mt-24 min-h-full z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/gDmTmYy/bgcar2.jpg)"
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0" />
          </div>
          <div className="w-full py-6 z-20">
            <div className="my-6">
             <h2 className="text-3xl font-bold">Sign Up</h2>
            </div>
          
            <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
              <div className="pb-2 pt-4">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  onChange={(e) => setPhoto(e.target.value)}
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="Photo URL"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                />
              </div>
              <div className="mt-4">
                <button onClick={handleRegistration} className="btn btn-block">
                  Sign Up
                </button>
              </div>
            </form>
           
            <div className='flex justify-center my-2 text-red-500'>
            <p >{error}</p>
          </div>
          <div className='flex justify-center mt-4'>
            <p

              className="text-gray-400"
            >
              Already have an account? <Link className='hover:underline hover:text-orange-600' to='/login'>Please Login</Link>
            </p>
          </div>
          </div>
        </div>
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
      </section>
    );
};

export default Register;