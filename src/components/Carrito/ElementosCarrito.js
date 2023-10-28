import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";

import "./Carrito.css";
import React from 'react'

const ElementosCarrito = () => {
    const { cart, setCart } = useContext(dataContext);

const eliminarProducto = (id) => {
    const foundId = cart.find((elementos) => elementos.id === id);

    const newCart = cart.filter ((element) =>{
        return element !== foundId;
    });

    setCart(newCart);
}

    return cart.map((productos) =>{
        return (
            <div className="cartContent" key={productos.id}>
                <img src={productos.img}/>
                <h3 className="name">{productos.name}</h3>
                <CartItemCounter productos={productos}/>
                <h4 className="precio">${productos.precio}</h4>
                <h4 className="precio">${productos.precio * productos.quanty}</h4>
                <h3 className="eliminar" onClick={() =>eliminarProducto(productos.id)}>🗑️</h3>
            </div>
        );
    });
};

export default ElementosCarrito;