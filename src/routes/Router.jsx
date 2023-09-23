import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Products from "../Products/Products";

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
                path: "/products",
                element: <Products></Products>,
                loader: () => fetch("../../public/data.json")
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            }
        ]
    }
])


export default router;