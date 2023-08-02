import { Outlet } from "react-router-dom"
import AuthWrapper from "../util/AuthWrapper"

type Props = {}
function DiscoverLayout({ }: Props) {
    return (
        <>
            <Outlet />
        </>
    )
}



export default AuthWrapper(DiscoverLayout);