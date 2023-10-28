import { useContext } from "react";
import { dataContext } from "../Context/DataContext";


const Numerito = ( ) => {
    const { cart } = useContext(dataContext);

    const productosEnCarrito = cart.reduce((acc, el)=> acc + el.quanty, 0)
  return <span className="contador">{productosEnCarrito}</span>
}

export default Numerito