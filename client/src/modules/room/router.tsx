import { RouteObject } from "react-router-dom";

// page
import RoomList from "./page/RoomList";

const RoomRouter: RouteObject[] = [
    {
        path: '/room',
        element: <RoomList />
    }
]

export default RoomRouter;