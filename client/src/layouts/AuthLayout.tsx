import { Outlet } from 'react-router-dom'

type Props = {}

export default function AuthLayout({ }: Props) {
    return (
        <>
            <Outlet />
        </>
    )
}