import Producto from "../Producto";

function ListaProductos(){
    return (
        [1, 2, 3].map((key) => <Producto key={key}/>)
    )
}

export default ListaProductos;