import React from 'react';
import {Link} from 'react-router-dom';
class Listar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
      datosCargados:false,
      empleados:[] 
    
    }
  }

borrar =(nTrabajador)=> {
  console.log(nTrabajador);
  
  fetch("http://127.0.0.1/aldafa/?borrar"+"="+nTrabajador)
      .then(respuesta=>respuesta.json())
      .then((datosRespuesta)=>{
        
        
        console.log(datosRespuesta);
        this.cargarData();
      
      })
      .catch(console.log)
      
}


  cargarData(){
      fetch("http://127.0.0.1/aldafa/")
      .then(respuesta=>respuesta.json())
      .then((datosRespuesta)=>{
        
        
        console.log(datosRespuesta);
        this.setState({datosCargados:true , empleados:datosRespuesta})
      
      })
      .catch(console.log)
  }
  componentDidMount(){
    this.cargarData()
  }

  render() { 
    const{datosCargados, empleados}=this.state

      if(!datosCargados){
        return(<div>Cargando...!</div>);
      }else{


    return (
    <div className="card">
      <div className="card-header">
        <h3>Todos Los Trabajadores:</h3>
      </div>
      <div className="card-body">
      <table className="table">
    <thead>
      <tr>
        <th scope="col">Numero Trabajador: </th>
        <th scope="col">Nombre: </th>
        <th scope="col">Fecha Ingreso: </th>
        <th scope="col">Privilegios: </th>
        <th scope="col">Opciones: </th>
      </tr>
    </thead>
    <tbody>

        {
          empleados.map(
            (empleados)=>(
              <tr key={empleados.nTrabajador}>
              <th>{empleados.nTrabajador}</th>
              <td>{empleados.nombre}</td>
              <td>{empleados.fechaEntrada}</td>
              <td>{empleados.privilegios}</td>
              <td>
                  <div className="btn-group" role="group" aria-label="">
                  <button className='btn btn-danger' onClick={()=>this.borrar(empleados.nTrabajador)}>Eliminar</button>
                  <Link className='btn btn-primary' to={'/editar/'+empleados.nTrabajador}>Editar</Link>
      
                  </div>
              </td>
            </tr>
            )
          )}


      
      
    </tbody>
  </table>    
      </div>
      <div className="card-footer text-muted">
      <a className='btn btn-primary' href='/crear'>Nuevo Trabajador</a>
        
      </div>
    </div>
    
    
    );
  }
}
}
 
export default Listar;
