import React, { useEffect, useState } from 'react'
import ProductoService from '../services/ProductoService';
import { Link } from 'react-router-dom';


const ListaProductosComponent = () => {

    const [productos,setProductos] = useState([]);

    useEffect(() => {
        listarProductos();
    },[]);
    

    const listarProductos = () => {
        ProductoService.getAllProductos().then(response => {
            setProductos(response.data);
        }).catch(error => {
            console.log(error);
        });        
    }


    const deleteProducto = (idproducto) => {
        ProductoService.deleteProducto(idproducto).then(response => {
            listarProductos();
        }).catch(error => {
            console.log(error);
        });
    }
    
    
    return (
        <div className="container">
            <h2 className="text-center">Lista de Productos</h2>
            <table className="table table-striped" border = "1">
                <thead className="table-dark">
                    <tr>
                        <th>Código</th> 
                        <th>Nombre</th> 
                        <th>Características</th> 
                        <th>Nit Empresa</th> 
                        <th>Acciones</th> 
                    </tr>
                </thead>
                <tbody>
                {
                    productos.map(
                        producto =>
                            <tr key={producto.idproducto}>
                                <td>{ producto.codigo }</td>
                                <td >{ producto.nombreProducto }</td>
                                <td style={{width: "450px"}}>{ producto.caracteristicas }</td>
                                <td>{ producto.nitempresa }</td>
                                <td>
                                    <Link className='btn btn-info' to={`/edit-producto/${producto.idproducto}`} >Actualizar</Link>
                                    &nbsp; &nbsp;
                                    <button className='btn btn-danger' onClick={ () => deleteProducto(producto.idproducto) }>Eliminar</button>
        
                                </td>
                            </tr>
                    )
                }                    
                </tbody>
            </table>

        </div>
    )

}

export default ListaProductosComponent;