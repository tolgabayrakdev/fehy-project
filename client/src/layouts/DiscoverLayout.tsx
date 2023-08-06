import { Outlet } from "react-router-dom"
import Navbar from "../components/d/Navbar";

type Props = {}
function DiscoverLayout({ }: Props) {
    return (
        <>
            <Navbar />
            <div className="ml-3 pt-16">
                <div className="p-3 ml-10 mr-10 h-screen overflow-auto">
                    <Outlet />
                </div>
            </div>
        </>
    )
}



export default DiscoverLayout;