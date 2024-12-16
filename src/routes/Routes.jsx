import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Navbar from "../components/Navbar/Navbar";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import Footer from "../components/Footer/Footer";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import PrivateRoutes from "./PrivateRoutes";
import Allproduct from "../pages/Allproduct";
import ProductWear from "../pages/ProductWear";




const route = createBrowserRouter([
    {
        path: "/",
        element:  <App />,
        children:[

            {
                path:"/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <LogIn />
            },
            {
                path: "/",
                element: <Main />
            },
            {
                path: "/",
                element: <Navbar />
            },
            {
                path: "/",
                element: <Footer />
            },
            {
                path: "/allproduct",
                element:<PrivateRoutes>
                         <Allproduct />
                      </PrivateRoutes>
            },
            {
                path: "/productWear",
                element:
                         <ProductWear />

            },
            {
                path: "/profile",
                element:<PrivateRoutes>
                            <Profile />
                        </PrivateRoutes>
            }
        ]
    }

]);

export default route;