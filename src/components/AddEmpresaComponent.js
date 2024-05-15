import React, { useEffect, useState } from 'react'
import EmpresaService from '../services/EmpresaService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddEmpresaComponent = () => {

    const [nit,setNit] = useState('');
    const [nombre,setNombre] = useState('');
    const [direccion,setDireccion] = useState('');
    const [telefono,setTelefono] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateEmpresa = (e) => {
        e.preventDefault();
        const empresa = {nit, nombre, direccion, telefono}
        console.log(empresa);
        if (id) {
            EmpresaService.updateEmpresa(id,empresa).then((response) => {
                console.log(response.data);
                navigate('/empresas');
            }).catch((err) => {
                console.log(err);
            });
        } else {
            EmpresaService.createEmpresa(empresa).then((response) => {
                console.log(response.data);
                navigate('/empresas');
            }).catch((err) => {
                console.log(err);
            });
        }
    };

    useEffect(() => {
        if (id){
            console.log("si tiene valor ... id");

            EmpresaService.getEmpresaById(id).then((response) => {
                console.log("respuesta actualizar id");
                console.log(response);
                setNit(response.data.nit);
                setNombre(response.data.nombre);
                setDireccion(response.data.direccion);
                setTelefono(response.data.telefono);
            }).catch( error => {
                console.log(error);
            });
        } else {
            console.log("No tiene valor ... id");            
        }
    },[id]);

    const title = () => {
        if (id) {
            return <h2 className='text-center'>Actualizar Empresa</h2>
        } else {
            return <h2 className='text-center'>Registro de una Empresa</h2>
        }
    }

    const readOnly = () => {
        if (id) {
            return true;
        } else {
            return false;
        }
    }

  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'></div>
            { title() }
            <div className='card-body'>

            <form>
                <div className='form-group mb-2'>
                    <label className='form-label'>NIT: </label>
                    <input type='text' placeholder='Digite NIT' className='form-control'
                    name='nit' value={ nit }  onChange={ (e) => setNit(e.target.value) }  readOnly={readOnly()} />
                </div>
                <div className='form-group mb-2'>
                    <label className='form-label'>Nombre: </label>
                    <input type='text' placeholder='Digite nombre' className='form-control'
                    name='nombre' value={ nombre }  onChange={ (e) => setNombre(e.target.value) }/>
                </div>
                <div className='form-group mb-2'>
                    <label className='form-label'>Direccion: </label>
                    <input type='text' placeholder='Digite dirección' className='form-control'
                    name='direccion' value={ direccion }  onChange={ (e) => setDireccion(e.target.value) }/>
                </div>
                <div className='form-group mb-2'>
                    <label className='form-label'>Telefono: </label>
                    <input type='text' placeholder='Digite telefono' className='form-control'
                    name='telefono' value={ telefono }  onChange={ (e) => setTelefono(e.target.value) }/>
                </div>                
                <br/>
                <button className='btn btn-success' onClick={ (e) => saveOrUpdateEmpresa(e) }>Guardar</button>
                &nbsp; &nbsp;
                <Link to='/empresas' className='btn btn-danger'>Cancelar</Link>
                
            </form>

            </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmpresaComponent;
