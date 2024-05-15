import axios from "axios";

const PRODUCTO_BASE_REST_API_URL = "http://localhost:9191/api/v1/producto";


class ProductoService {

    getAllProductos() {
        return axios.get(PRODUCTO_BASE_REST_API_URL);
    }

    createProducto(producto) {
        return axios.post(PRODUCTO_BASE_REST_API_URL, producto);
    }

    getProductoById(IdProducto) {
        return axios.get(PRODUCTO_BASE_REST_API_URL + "/" + IdProducto);
    }

    updateProducto(IdProducto, producto) {
        return axios.put(PRODUCTO_BASE_REST_API_URL + "/" + IdProducto, producto);
    }    

    deleteProducto(IdProducto) {
        return axios.delete(PRODUCTO_BASE_REST_API_URL + "/" + IdProducto);
    }      

}

export default new ProductoService();