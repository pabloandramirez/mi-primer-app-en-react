const PRODUCTOS_URL = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

//funcion para buscar los productos del servicio
export const buscarProductos = async () => {
    //Llamo con el metodo del navegador fetch
    const productos = await fetch(PRODUCTOS_URL);
    return productos.json();
};