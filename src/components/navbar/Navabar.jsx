import './navbar.css'
import { NavLink } from "react-router-dom";


export function NavBar(){
    return(
        <>
            <div className='div-nav-bar'>
                <ul className="nav-ul">
                    <li>
                        <NavLink className={"nav-item"} to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={"nav-item"} to={"/about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink className={"nav-item"} to={"/steve"}>Steve</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}