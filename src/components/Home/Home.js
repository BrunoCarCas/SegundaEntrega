import Navbar from "../Navbar/Navbar" 
import Banner from "../Banner/Banner"
import Productos from "../Productos/Productos"
import Footer from "../Footer/Footer"
import Filtros from "../Filtros/Filtros"

const Home = () => {
    return (
    <>
    <Navbar/>
    <Banner/>
    <Filtros/>
    <div className="cardsProductosContainer">
    <Productos/>
    </div>
    <Footer/>
    </>
    
    )
}

export default Home