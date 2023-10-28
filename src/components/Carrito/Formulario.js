import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import {useForm} from "react-hook-form";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {db} from "../Context/DataContext";
import Swal from 'sweetalert2';

function Formulario() {
 
 const {cart, total, limpiarCarrito} = useContext(dataContext)
 
 const {register, handleSubmit} = useForm(); 

const comprar = (data) => {
    const orden = {
        cliente: data,
        productos: cart,
        precioTotal: total()
    } 
    console.log(orden);
}
const sendOrder = () => {

    const db = getFirestore();
    const ordersCollection = collection(db,"ordenes");
    addDoc(ordersCollection,{...cart, date: new Date()}).then(({id}) => Swal.fire("Tu compra a sido exitosa", `tu codigo de compra es: ${id}`, "success"));
    limpiarCarrito();
  }
  

    return (
        <div>
            <div className='formulario'>
                <h1>FINALIZAR COMPRA</h1>
                <form onSubmit={handleSubmit(comprar)}>
                <p>Nombre</p>
                <input type='text' placeholder="Juan pedro" {...register("nombre")}/>
                <p>Tel.</p>
                <input type='tel' placeholder="xxx xxx xxx"{...register("tel")}/>
                <p>Correo</p>
                <input type='email' placeholder="ejemplo@gmail.com"{...register("email")}/>
                <button type="submit" onClick={()=>sendOrder()} >Finalizar Compra</button>
                </form>
            </div>
        </div>
   
  )
}

export default Formulario