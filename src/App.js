import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmpresasComponent from './components/ListEmpresasComponent';
import ListProductosComponent from './components/ListProductosComponent';
import AddPoductoComponent from './components/AddProductoComponent';
import AddEmpresaComponent from './components/AddEmpresaComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                <HeaderComponent />
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={ <ListEmpresasComponent />}></Route>
                        <Route path='/empresas' element={ <ListEmpresasComponent />}></Route>
                        <Route path='/add-empresa' element={ <AddEmpresaComponent />}></Route>
                        <Route path='/edit-empresa/:id' element={ <AddEmpresaComponent />}></Route>
                        
                        <Route exact path='/productos' element={ <ListProductosComponent />}></Route>
                        <Route path='/add-producto' element={ <AddPoductoComponent />}></Route>
                        <Route path='/edit-producto/:id' element={ <AddPoductoComponent />}></Route>                        

                    </Routes>

                </div>
            </BrowserRouter>


            <br/><br/><br/><br/>
            <FooterComponent />
        </div>
    );
}

export default App;