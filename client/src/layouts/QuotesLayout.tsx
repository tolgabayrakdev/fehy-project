import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom"



export default function QuotesLayout() {
    const location = useLocation();
    const [pathnames, setPathnames] = useState(location.pathname);
    console.log(window.location.pathname);


    useEffect(() => {
        setPathnames(location.pathname);
    }, [location.pathname]);


    return (
        <div className="flex">
            <div className="w-2/12">
                <div className="flex flex-wrap mb-5">
                    <h1 className="text-xl font-medium">Hi, Tolga</h1>
                    <button className="border p-1 pr-3 pl-3 rounded-lg ml-4 bg-green-400 text-white hover:bg-green-500 duration-300">New Quote</button>
                    <p className="mt-1 w-full">Lets explore quotes</p>
                </div>


                <div className="bg-gray-100 h-36 mt-4 fixed w-52 rounded-md p-1">
                    <h4 className="text-center text-xl">Yan menu</h4>
                    <hr />
                    <Link to="/d" className={`${pathnames === "/d" ? "bg-blue-600 text-white flex" : "text-black"} justify-center mt-5 flex mb-1 hover:bg-blue-600 hover:cursor-pointer duration-300 hover:text-white p-1 rounded-md`}>Quotes</Link>
                    <Link to="/d/best-favs" className={`${pathnames === "/d/best-favs" ? "bg-blue-600 text-white flex" : "text-black"} flex justify-center mt-2 mb-1 hover:bg-blue-600 hover:cursor-pointer duration-300 p-1 hover:text-white rounded-md`}>Best favs</Link>
                </div>
            </div>

            <div className="mt-24 rounded-sm w-7/12">
                <div className=" bg-gray-50 ml-4 pt-12">
                    <Outlet />
                </div>
            </div>
            <div className="mt-24 pl-6 rounded-sm w-3/12">
                <div className="bg-gray-100 h-36 fixed w-60 rounded-md">
                    <h4>Diğer menu</h4>
                </div>
               

            </div>
        </div>
    )
}