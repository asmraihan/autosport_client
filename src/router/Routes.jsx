import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import MyCars from "../pages/MyCars/MyCars";
import AddCar from "../pages/AddCar/AddCar";
import AllCars from "../pages/AllCars/AllCars";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/allcars',
            element : <AllCars></AllCars>,
            loader: ()=> fetch('http://localhost:5000/allcars')
        },
        {
            path : '/mycars',
            element : <PrivateRoute><MyCars></MyCars></PrivateRoute>

        },
        {
            path : '/addcar',
            element : <AddCar></AddCar>
        },
        {
            path : '/blog',
            element : <Blog></Blog>
        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/register',
            element : <Register></Register>
        },
      
      ]
    },
  ]);

  export default router