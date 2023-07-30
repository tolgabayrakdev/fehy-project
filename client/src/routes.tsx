import { useRoutes } from "react-router-dom";
import NotFound from "./views/NotFound";
import Home from "./views/home/Home";



export default function Router() {
    const routes = useRoutes([
        {
            path: "/",
            element: <Home />

        },
        {
            path: "*",
            element: <NotFound />
        }
    ])
    return routes;
}