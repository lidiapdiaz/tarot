//Menu navegación
import { useState } from "react";
import { NavLink } from "react-router-dom";


function Menu() {

    const [menu, setMenu] = useState (false);

    const toggleMenu = () =>{
    setMenu(!menu)
    }

    return (
    <>
    <nav>
    <button onClick={toggleMenu}>
    <svg className="icon-menu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
    </svg>
    </button>
        <ul className={`MenuHamburguesa ${menu ? 'activo' : ''}`}>
            <li><NavLink to="#">Tirada de cartas</NavLink></li>
            <li><NavLink to="#">Ver cartas</NavLink></li>
            <li><NavLink to="#">Arcano del dia</NavLink></li>
        </ul>
    </nav>
    </>
    )

}


export default Menu;