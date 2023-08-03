import { Outlet } from "react-router-dom"
import Navbar from "../components/d/Navbar";

type Props = {}
function DiscoverLayout({ }: Props) {
    return (
        <>
            <Navbar />
            <div className="ml-6 pt-20">
                <div className="p-5 ml-10 mr-10">
                    <Outlet />
                </div>
            </div>
        </>
    )
}



export default DiscoverLayout;