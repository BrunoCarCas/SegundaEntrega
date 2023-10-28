import React from 'react'
import { addDoc, collection,getFirestore } from 'firebase/firestore'
import Navbar from '../Navbar/Navbar';
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import Swal from 'sweetalert2';
import Formulario from './Formulario';

function FinalizarCompra() {

  const { cart } = useContext(dataContext);





  return (
    <>
    <Navbar/>
    <Formulario/>
    </>
  )
}

export default FinalizarCompra