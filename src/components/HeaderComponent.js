import React from 'react'

const HeaderComponent = () => {
  return (
    <div> 
        <header>
            <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
            &nbsp; &nbsp; &nbsp; 
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href='/' className='navbar-brand'>Lista de Empresas</a>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp; 
              <li className="nav-item">
                <a href='/add-empresa' className='navbar-brand'>Nueva Empresa</a>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp; 
              <li className="nav-item">
                <a href='/productos' className='navbar-brand'>Lista de Productos</a>
              </li>   
              &nbsp; &nbsp; &nbsp; &nbsp; 
              <li className="nav-item">
                <a href='/add-producto' className='navbar-brand'>Nuevo Producto</a>
              </li>                          
            </ul>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent;
