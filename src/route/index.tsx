import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import Detail from "../pages/detail/detail";

export const router = createBrowserRouter([
    {
    path:'/',
    element: <Home/>,
    },
    {
    path: '/detail',
    element: <Detail/>,
    }
]);