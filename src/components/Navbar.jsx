import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-[#121212] h-16 flex items-center justify-between px-6">
            <NavLink to="/">
                <h1 className="font-cinzel font-bold opacity-90 text-2xl tracking-wide text-[#C43A3A] select-none">CineSky Next</h1>
            </NavLink>
            <div className="flex items-center gap-6">
                <NavLink className="text-[#EDEDED] hover:text-[#C43A3A] cursor-pointer" to="/favorites">Favorites</NavLink>
                <NavLink className="text-[#EDEDED] hover:text-[#C43A3A] cursor-pointer" to="/login">Sign In</NavLink>
            </div>
        </nav>
    )
}