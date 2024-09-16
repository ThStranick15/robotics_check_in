import { useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom";

export default function Header() {  
    let location = useLocation();

    return(
        <header className="relative text-4xl bg-blue-500 p-3 text-white text-center">
        {location.pathname !== '/' ? <NavLink to="/" className="absolute top-1 left-1 border p-2 my-1 mx-2 text-white bg-blue-600 hover:bg-blue-500 rounded text-xl">Back to Home</NavLink> : ""}
            <h1 className="">1234 Robotics Team Check In</h1>
            {location.pathname !== '/admin' ? <NavLink to={'/admin'} className="absolute top-1 left-1 border p-2 my-1 mx-2 text-white bg-blue-600 hover:bg-blue-500 rounded text-xl">Go to Admin</NavLink> : ""}
        </header>
    )
}