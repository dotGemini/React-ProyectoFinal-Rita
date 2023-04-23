import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'
import { Link } from "react-router-dom"


function NavBar() {

    return(
        <div className='container'>
            
            <h2>
                <Link to="/">VDH Remeras</Link>
            </h2>

            <nav className='navBar'>
                <ul>
                    <li>
                        <Link to="/category/Hombres">Hombres</Link>    
                    </li>
                    <li>
                        <Link to="/category/Mujeres">Mujeres</Link>
                    </li>
                    <li>
                    <Link to="/category/Niños">Niños</Link> 
                    </li>
                </ul>
            </nav>

            <CartWidget />
        </div>
    )
}

export default NavBar;