import CardWidget from "./CardWidget"

function Navbar(){
   return(
    <><p>PUMA| Bienvenidos</p>
    
   <ul>
      <li className="nav-item" aria-label="Nuevo">
        <a className="nav-link" href="./pages/productos.html">Nuevo</a>
      </li>
      <li className="nav-item" aria-label="Niños">
        <a className="nav-link" href="#">Niños</a>
      </li>
      <li className="nav-item" aria-label="Deportes">
        <a className="nav-link" href="#">Deportes</a>
      </li>
      <li className="nav-item" aria-label="Outlet">
        <a className="nav-link" href="#">Outlet</a>
      </li>
    </ul>
    <CardWidget></CardWidget>
    </>
   )
}
export default Navbar 