import React, { useEffect, useState } from 'react'
import ProductoService from '../services/ProductoService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddProductoComponent = () => {

    const [codigo,setCodigo] = useState('');
    const [nombreProducto,setNombreProducto] = useState('');
    const [caracteristicas,setCaracteristicas] = useState('');
    const [nitempresa,setNitempresa] = useState('');

    const navigate = useNavigate();
    const {id} = useParams();


    const saveOrUpdateProducto = (e) => {
        e.preventDefault();
        const producto = {codigo, nombreProducto, caracteristicas, nitempresa}
        console.log(producto);
        if (id) {
            ProductoService.updateProducto(id,producto).then((response) => {
                console.log(response.data);
                navigate('/productos');
            }).catch((err) => {
                console.log(err);
            });
        } else {
            ProductoService.createProducto(producto).then((response) => {
                console.log(response.data);
                navigate('/productos');
            }).catch((err) => {
                console.log(err);
            });
        }
    };


    const title = () => {
        if (id) {
            return <h2 className='text-center'>Actualizar Producto</h2>
        } else {
            return <h2 className='text-center'>Registro de un Producto</h2>
        }
    }

    useEffect(() => {
        if (id){
            console.log("si tiene valor ... id");

            ProductoService.getProductoById(id).then((response) => {
                console.log("respuesta actualizar id");
                console.log(response);
                setCodigo(response.data.codigo);
                setNombreProducto(response.data.producto);
                setCaracteristicas(response.data.caracteristicas);
                setNitempresa(response.data.nitempresa);
            }).catch( error => {
                console.log(error);
            });
        } else {
            console.log("No tiene valor ... id");            
        }
    },[id]);


    const readOnly = () => {
        if (id) {
            return true;
        } else {
            return false;
        }
    }    

    return (

        <div className='container'>
          <div className='row'>
              <div className='card col-md-6 offset-md-3 offset-md-3'></div>
              { title() }
              <div className='card-body'>
  
              <form>
                  <div className='form-group mb-2'>
                      <label className='form-label'>Código: </label>
                      <input type='text' placeholder='Digite código' className='form-control'
                      name='codigo' value={ codigo }  onChange={ (e) => setCodigo(e.target.value) }  readOnly={readOnly()} />
                  </div>
                  <div className='form-group mb-2'>
                      <label className='form-label'>Nombre Producto: </label>
                      <input type='text' placeholder='Digite nombre' className='form-control'
                      name='nombreProducto' value={ nombreProducto }  onChange={ (e) => setNombreProducto(e.target.value) }/>
                  </div>
                  <div className='form-group mb-2'>
                      <label className='form-label'>Características: </label>
                      <input type='text' placeholder='Digite características' className='form-control'
                      name='caracteristicas' value={ caracteristicas }  onChange={ (e) => setCaracteristicas(e.target.value) }/>
                  </div>
                  <div className='form-group mb-2'>
                      <label className='form-label'>NIT Empresa: </label>
                      <input type='text' placeholder='Digite NIT empresa' className='form-control'
                      name='nitempresa' value={ nitempresa }  onChange={ (e) => setNitempresa(e.target.value) }/>
                  </div>                
                  <br/>
                  <button className='btn btn-success' onClick={ (e) => saveOrUpdateProducto(e) }>Guardar</button>
                  &nbsp; &nbsp;
                  <Link to='/productos' className='btn btn-danger'>Cancelar</Link>
                  
              </form>
  
              </div>
          </div>
        </div>
  
    );    
}

export default AddProductoComponent;