import Paginado from '../../general/Paginado';
import Loading from '../../general/Loading';
import Pelicula from '../Pelicula'
import './ListaPeliculas.css'

const ListaPeliculas = (props) => {
    console.log(props.busqueda)
    const peliculas = [1,2,3].map(val => <Pelicula />)
    return (
        <>
            <section className='lista-peliculas'>
                { peliculas }
            </section>
            <Paginado />
            <Loading />
        </>
    )
};

export default ListaPeliculas;