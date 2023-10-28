import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./Navbar.css";

import { Link } from "react-router-dom";
import Numerito from "../Carrito/Numerito";



const Navbar = () => {
  const { cart } = useContext(dataContext);

  return (
    <div className="navContainer">
        <nav className="navbar">
            <Link className="navbar-logo" to={"/"}><h1>BruShop</h1> </Link>
            <div className="navbarIzquierda">
                <Link className="carrito" to={"/carrito"}>🛒
                </Link> {cart.length > 0  ? <Numerito /> :null }
            </div>
        </nav>
    </div>
  )
}

export default Navbar