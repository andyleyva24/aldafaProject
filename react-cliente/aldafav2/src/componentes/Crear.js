import React from 'react';
import { useNavigate } from 'react-router-dom';
class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            nTra:"",
           nomb:"",
           fech:"",
           priv:""
        }
    }
    camboValor = (e)=>{
        
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({ state });
    }


    guardar = (e)=>{
        e.preventDefault();
        console.log("form enviado");
        const{nTra,nomb,fech,priv} = this.state;
        console.log(priv);
        console.log(nomb);
        var datos = {nTrabajador:nTra,nombre:nomb,fechaEntrada:fech,privilegios:priv};
        fetch("http://127.0.0.1/aldafa/?insertar=1", {
            method:"POST",
            body:JSON.stringify(datos),

        })
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
          
          
          console.log(datosRespuesta);
          alert("datos del trabajador guardados");
          window.location.href="/";
        
        })
        .catch(console.log)


    }
    render() { 
        const{nTra,nomb,fech,priv} = this.state;
        return (  
            <div className="card">
                <div className="card-header">
                    <h3>Nuevo Trabajador:</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={this.guardar}>
                        <div className="container">
                            <div className="row">
                                <div className='col-sm-12'>
                                    <label>Numero de Trabajador:</label>
                                    <input name='nTra' value={nTra} onChange={this.camboValor} className='form-control' placeholder='Ej: 234' type='number' />
                                </div>
                                <div className='col-sm-6'>
                                    <label>Nombre del Trabajador:</label>
                                    <input name='nomb' value={nomb} onChange={this.camboValor} className='form-control' placeholder='Ej: Pepe' type='text' />
                                </div>
                                <div className='col-sm-6'>
                                    <label>Fecha de Ingreso:</label>
                                    <input name='fech' value={fech} onChange={this.camboValor} className='form-control' type='date' />
                                </div>
                                <div className='col-sm-12'>
                                    <label>Privilegios del Trabajador:</label>
             
                                    <select name='priv' value={this.props.arrayOfOptionValues} onChange={this.camboValor} className='form-control' multiple>
                                        <option value={"Administrador"}>Administrador</option>
                                        <option value={"Contabilidad"}>Contabilidad</option>
                                        <option value={"Root"}>Root</option>
                                        <option value={"RH"}>RH</option>
                                        <option value={"Sistemas"}>Sistemas</option>
                                        <option value={"Mercadotecnia"}>Mercadotecnia</option>
                                    </select>
                                </div>
                                <div className='col-sm-6'></div>
                                <div className='col-sm-3'>
                                    <button type='submit' className='btn btn-primary btn-size'>Agregar Trabajador</button>
                                </div>
                                <div className='col-sm-3'>
                                    <a href='/' className='btn btn-danger btn-size'>Cancelar</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>

        );
    }
}
 
export default Crear;