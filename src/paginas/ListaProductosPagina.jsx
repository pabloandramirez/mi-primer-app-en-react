import BotonListar from "../componentes/BotonListar";
import ListaProductos from "../componentes/ListaProductos";
import Titulo from "../componentes/Titulo";
import React from "react";

class ListaProductosPagina extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: []
        }

        this.handleBotonListar = this.handleBotonListar.bind(this);
    }
    
    handleBotonListar (evento) {
        console.log(this.state)
    }
    render() {
        return (
        <section>
            <BotonListar onClick={this.handleBotonListar}/>
            <Titulo/>
            <ListaProductos/>
        </section>
        )
    }
}

export default ListaProductosPagina;