import { useRoutes } from "react-router-dom";
import NotFound from "./views/NotFound";
import Home from "./views/home/Home";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";




export default function Router() {
    const routes = useRoutes([
        {
            path: "/",
            element: <Home />

        },
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/auth",
            element: <AuthLayout />,
            children: [
                { path: "signin", element: <Login /> },
                { path: "signup", element: <Register /> }
            ]
        }
    ])
    return routes;
}