import { Link } from "react-router-dom";

export function Menu() {
    return (
        <div>
            <li>
                <lu><Link to='/' >Inicio</Link> </lu>
                <lu><Link to='/login' >Login</Link> </lu>
            </li>
        </div>
    )
}