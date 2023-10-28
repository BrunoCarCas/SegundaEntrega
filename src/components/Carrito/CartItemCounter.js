import { useContext } from "react";
import { dataContext } from "../Context/DataContext";



const CartItemCounter = ({productos}) => {
    const {cart, setCart, agregarProductos} = useContext(dataContext);

    const decrese = () => {
        const productosrepeat = cart.find((item) => item.id === productos.id);
    
        productosrepeat.quanty !== 1 &&
        setCart( cart.map ((item) => (item.id === productos.id ? {...productos, quanty: productosrepeat.quanty - 1 }: item)));
    }

    return (
    <>
    <p className="botonContador" onClick={decrese}>-</p>
    <p> {productos.quanty} </p>
    <p className="botonContador" onClick= {() => agregarProductos(productos)}>+</p>
    </>
    )
}

export default CartItemCounter