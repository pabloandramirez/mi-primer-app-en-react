import { Grid } from "@mui/material";
import { Box, Container, Item } from "@mui/system";
import { useState } from "react";
import Buscador from "../componentes/general/Buscador";
import ListaPeliculas from "../componentes/peliculas/ListaPeliculas";


const BuscarPeliculasPagina = () => {
    const [busqueda, setBusqueda] = useState('');
    const onBuscar = (criterio) => {
        setBusqueda(criterio)
    }
    return (
        <Container maxWidth="md">
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Buscador onBuscar={onBuscar}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ListaPeliculas busqueda={busqueda}/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default BuscarPeliculasPagina;