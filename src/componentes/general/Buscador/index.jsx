import { TextField, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import './Buscador.css'

const Buscador = (props) => {
    const [texto, setTexto] = useState('');
    const onTextoChange = (evento) => {
        setTexto(evento.target.value)
    }

    const onBuscarClick = () => {
        if(texto.length > 3){
            props.onBuscar(texto)
        }
    }

    return ( //fragment permite retornar
             // una lista o colecccion
             // de elementos de react
        <section className="buscador">
            <TextField
                label="Buscar Peliculas" 
                variant="outlined" 
                value ={texto}
                onChange={onTextoChange} 
            />
            <Button variant="contained" onClick={onBuscarClick}> Buscar </Button>
        </section>

    )
}

export default Buscador;