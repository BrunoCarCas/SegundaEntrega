import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";


const CartTotal = () => {
      const { cart } = useContext(dataContext);

      const total = cart.reduce((acc,el) => acc + el.precio * el.quanty, 0);
      return <div className="cartTotal">
            <Link className="finalizar" to={"/finalizarCompra"}><h3>FinalizarCompra</h3> </Link>
         <h3 className="total"> Total : $ {total} </h3>
         
      </div>
   
}

export default CartTotal;