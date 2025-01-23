import { useRoutes } from "react-router-dom";

// module routers
import PageNotFound from "./page/NotFound";
import WelcomeRouter from "../modules/welcome/router";
import RoomRouter from "../modules/room/router";
import RoomList from "../modules/room/page/RoomList";

const AppRouter = () => {
    const router = [
        ...WelcomeRouter,
        ...RoomRouter,
        {
            path: "/",
            element: <RoomList />
        },
        {
            path: "*",
            element: <PageNotFound />
        }
    ]
    return useRoutes(router);
}

export default AppRouter;