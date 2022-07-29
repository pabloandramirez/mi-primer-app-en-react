import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//import Anchor from './componentes/Anchor';
//import Parrafo from './componentes/Parrafo';
//import Imagen from './componentes/Imagen';
import ListaProductosPagina from './paginas/ListaProductosPagina';
import BuscarPeliculasPagina from './paginas/BuscarPeliculasPagina';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='productos' element={< ListaProductosPagina/>}/>
        <Route path='peliculas' element={< BuscarPeliculasPagina/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
