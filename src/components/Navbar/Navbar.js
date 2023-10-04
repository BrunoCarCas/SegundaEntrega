import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navContainer">
        <nav className="navbar">
            <h1 className="navbar-logo">BruShop</h1>
            <div className="navbarIzquierda">
                <Link className="carrito" to={"/carrito"}>🛒</Link>
                <p className="contador">4</p>
            </div>
        </nav>
    </div>
  )
}

export default Navbar