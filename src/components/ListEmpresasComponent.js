import React, { useEffect, useState } from 'react'
import EmpresaService from '../services/EmpresaService';
import { Link } from 'react-router-dom';

const ListEmpresasComponent = () => {

    const [empresas,setEmpresas] = useState([]);

    useEffect(() => {
        listarEmpresas();
    },[]);

    const listarEmpresas = () => {
        EmpresaService.getAllEmpresas().then(response => {
            setEmpresas(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    const deleteEmpresa = (idEmpresa) => {
        EmpresaService.deleteEmpresa(idEmpresa).then(response => {
            listarEmpresas();
        }).catch(error => {
            console.log(error);
        });
    };




    return (
        <div className='container'>
          <h2 className='text-center'>Lista de Empresas</h2>
          <table className="table table-striped" border = "1">
            <thead className="table-dark">
                <tr>
                <th>Id</th>
                <th>Nit</th>
                <th>Nombre</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    empresas.map(
                        empresa =>
                            <tr key={empresa.idempresa}>
                                <td>{ empresa.idempresa }</td>
                                <td>{ empresa.nit }</td>
                                <td>{ empresa.nombre }</td>
                                <td>{ empresa.direccion }</td>
                                <td>{ empresa.telefono }</td>
                                <td>
                                    <Link className='btn btn-info' to={`/edit-empresa/${empresa.idempresa}`} >Actualizar</Link>
                                    &nbsp; &nbsp;
                                    <button className='btn btn-danger' onClick={ () => deleteEmpresa(empresa.idempresa) }>Eliminar</button>
        
                                </td>
                            </tr>
                    )
                }
            </tbody>
          </table>
        </div>
      )
}

export default ListEmpresasComponent;
