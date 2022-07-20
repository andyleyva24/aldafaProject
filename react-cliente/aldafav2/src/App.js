import './App.css';

import Listar from "./componentes/Listar";
import Crear from "./componentes/Crear";
import Editar from "./componentes/Editar";
import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";



function App() {
  return (
    



    <div>
    <nav className="navbar navbar-expand navbar-light bgpiano">
          <div className="nav navbar-nav">
              <a className="nav-item nav-link active" href="/">Inicio <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="/crear">Nuevo Trabajador</a>
              <a className="nav-item nav-link" href="/editar">Editar Trabajador</a>
          </div>
      </nav>    
      <br></br>  
      <div className="container">
        <Router>
          <Routes>
          <Route path='/' element={<Listar></Listar>}> </Route>
          <Route path='/crear' element={<Crear></Crear>}> </Route>
          <Route path='/editar/:nTrabajador' element={<Editar></Editar>}> </Route>
          </Routes>
        </Router>
        </div>
    </div>
    
     );
}

export default App;
