import BotonListar from "../componentes/BotonListar";
import ListaProductos from "../componentes/ListaProductos";
import Titulo from "../componentes/Titulo";
import React from "react";
import { buscarProductos } from "../servicios/productos";
import { useState } from "react";
import { useEffect } from "react";

const ListaProductosPagina = () => {
    const [productos, setProducto] = useState([]);
    const [loading, setLoading] = useState(false)
    //states
    //funciones de events y effects
    //effects
    //events
    //logica del renderizado

    
    const handleBotonListar = async () => {
        setLoading(true);
        const productos = await buscarProductos();
        setProducto(productos);
        setLoading(false);
    }

    useEffect(() => {
        if(!productos.length) {
            handleBotonListar();
        }
    }, [productos])
    
    if(loading) return <div>Cargando productos...</div>

    const miComponente = productos.length > 0
        ? <ListaProductos productos = {productos}/> 
        : <p> Click en buscar </p> //para comprobar la variable que almacena elementos y logica para renderizar componente


    return (
        <section>
            <BotonListar onClick={handleBotonListar}/>
            <Titulo/>
            { miComponente } 
        </section>
    )
    
}

export default ListaProductosPagina;