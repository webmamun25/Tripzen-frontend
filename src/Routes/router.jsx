
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import MainLayout from "../Layout/Main";
import AllTrip from "../Pages/Trip/AllTrip";
import TripDetails from "../Pages/Trip/TripDetails/TripDetails";
import Login from "../Components/Registration/Login/Login";
import Register from "../Components/Registration/Login/Register";

import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Components/Dashboard/Cart/Cart";
import AllUsers from "../Components/Dashboard/AllUsers/AllUsers";
import AddItems from "../Components/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import Payment from "../Components/Payment/Payment";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
import AdminHome from "../Components/AdminHome/AdminHome";
import UserHome from "../Components/UserHome/UserHome";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/Trip',
        element: <AllTrip></AllTrip>
      },
      {
        path: '/signin',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Register></Register>
      },
      {
        path: '/secret',
        element: <PrivateRoute><div>Hello world</div></PrivateRoute>
      },
      {
        path: '/Trip/:id',
        element: <PrivateRoute> <TripDetails></TripDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/trip/${params.id}`)
      },

    ]


  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'users',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'additems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute> 
      },
      {
        path: 'adminhome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute> 
      },
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      },
      {
        path: 'paymenthistory',
        element: <PaymentHistory></PaymentHistory> 
      },


    ]
  }

]);

export default router