import { useRoutes } from "react-router-dom";

// module routers
import PageNotFound from "./page/NotFound";
import WelcomeRouter from "../modules/welcome/router";


const AppRouter = () => {
    const router = [
        ...WelcomeRouter,
        {
            path: "*",
            element: <PageNotFound />
        }
    ]
    return useRoutes(router);
}

export default AppRouter;