import Home from "./components/Home/Home";
import Carrito from "./components/Carrito/Carrito";
import DataProvider from "./components/Context/DataContext";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
  return (
<DataProvider>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/carrito" element={<Carrito/>} />
      </Routes>
  </BrowserRouter>
</DataProvider>
  );
}

export default App;
