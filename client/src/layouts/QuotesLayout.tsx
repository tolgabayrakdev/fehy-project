import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom"



export default function QuotesLayout(pathname: any) {
    const location = useLocation();
    const [pathnames, setPathnames] = useState(location.pathname);
    console.log(window.location.pathname);


    useEffect(() => {
        setPathnames(location.pathname);
    }, [location.pathname]);

    
    return (
        <div>
            <h1 className="text-2xl font-medium">Hi, Tolga</h1>
            <p className="mt-1">Lets explore quotes</p>

            <div className="flex mt-8">
                <div className="w-2/12 bg-gray-100">
                    <h4 className="text-center text-xl">Yan menu</h4>
                    <hr />
                    <Link to="/d" className={`${pathnames === "/d" ? "bg-blue-600 text-white flex": "text-black"} justify-center mt-5 flex mb-1 hover:bg-blue-600 hover:cursor-pointer duration-300 hover:text-white p-1 rounded-md`}>Quotes</Link>
                    <Link to="/d/best-favs" className="flex justify-center mt-2 mb-1 hover:bg-blue-600 hover:cursor-pointer duration-300 p-1 hover:text-white rounded-md">Best favs</Link>
                </div>
                <div className="w-10/12 bg-gray-100 ml-4">
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}