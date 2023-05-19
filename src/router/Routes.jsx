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
import UpdateCar from "../pages/UpdateCar/UpdateCar";
import CarDetails from "../pages/CarDetails/CarDetails";

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
            element : <AllCars></AllCars>
        },
        {
            path : '/car/:id',
            element : <CarDetails></CarDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/car/${params.id}`)
        },
        {
            path : '/mycars',
            element : <PrivateRoute><MyCars></MyCars></PrivateRoute>

        },
        {
          path : 'updatecar/:id',
          element: <UpdateCar></UpdateCar>,
          loader: ({params})=> fetch(`http://localhost:5000/car/${params.id}`)
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