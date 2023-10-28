
import "./Filtros.css"



const Filtros = () => {
  return (
    <div>
        <nav className="filtrosContainer">
            <h2 className="tituloFiltro">NUESTROS PRODUCTOS</h2>
            <div className="filtros">
            <button className="hombre"><h4>Hombres</h4></button>
            <button className="mujer"><h4>Mujeres</h4> </button>
            </div>
        </nav>

    </div>
  )
}

export default Filtros