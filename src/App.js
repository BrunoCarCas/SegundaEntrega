import Home from "./components/Home/Home";
import Carrito from "./components/Carrito/Carrito";
import FinalizarCompra from "./components/Carrito/FinalizarCompra"
import DataProvider from "./components/Context/DataContext";
import { BrowserRouter, Routes,Route } from "react-router-dom";



function App() {
  return (
<DataProvider>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/finalizarCompra" element={<FinalizarCompra/>} />
      </Routes>
  </BrowserRouter>
</DataProvider>
  );
}

export default App;
