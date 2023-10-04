import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Productos.css"
const Productos = () => {
const {data} = useContext(dataContext);
  return data.map((productos) => { 
    return (
        <div className="card">
            <img src={productos.img}/>
            <h3>{productos.name}</h3>
            <h4>${productos.precio}</h4>
            <button>Comprar</button>
        </div>
    );

  });
};

export default Productos