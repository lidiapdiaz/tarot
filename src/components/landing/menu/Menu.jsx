//Menu navegación
import { NavLink } from "react-router-dom";
import { useContext } from 'react';

function Menu() {

    return (
    <nav>
        <ul>
            <li><NavLink to="#">Tirada de cartas</NavLink></li>
            <li><NavLink to="#">Ver cartas</NavLink></li>
            <li><NavLink to="#">Arcano del dia</NavLink></li>
        </ul>
    </nav>
    )

}


export default Menu;