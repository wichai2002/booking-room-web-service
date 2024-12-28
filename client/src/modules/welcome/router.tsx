import { RouteObject } from "react-router-dom";

// page elements
import Login from "./page/Login";


const WelcomeRouter: RouteObject[] = [
    {
        path: "/login",
        element: <Login />
    }
]

export default WelcomeRouter;