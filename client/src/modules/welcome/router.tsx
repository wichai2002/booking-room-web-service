import { RouteObject } from "react-router-dom";

// page elements
import Login from "./page/Login";
import Register from "./page/Register";


const WelcomeRouter: RouteObject[] = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
]

export default WelcomeRouter;