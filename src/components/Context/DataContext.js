import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const dataContext = createContext();

const DataProvider = ({children}) => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        
        axios("productos.json") .then((respuesta) => setData(respuesta.data));
        }, []);

    return <dataContext.Provider value={{data}}>{children}</dataContext.Provider>
};

export default DataProvider;