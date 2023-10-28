import { useContext } from "react";
import { dataContext } from "../Context/DataContext";


import ElementosCarrito from './ElementosCarrito';
import Navbar from '../Navbar/Navbar';
import CartTotal from './CartTotal';


const Carrito = () => {
  const { cart } = useContext(dataContext);

  return  cart.length > 0 ? (
  <>
  <Navbar/>
  <ElementosCarrito/>;
  <CartTotal/>
  
  </>
  ) : ( 
    <>
    <Navbar/>
    <h2 className="carritoVacio">Tu carrito esta vacio ☹️</h2>
    </>
  )
};

export default Carrito