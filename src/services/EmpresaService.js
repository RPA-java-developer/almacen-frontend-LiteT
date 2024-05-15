import axios from "axios";

const EMPRESA_BASE_REST_API_URL = "http://localhost:9191/api/v1/empresa";


class EmpresaService {

    getAllEmpresas() {
        return axios.get(EMPRESA_BASE_REST_API_URL);
    }

    createEmpresa(empresa) {
        return axios.post(EMPRESA_BASE_REST_API_URL, empresa);
    }

    getEmpresaById(IdEmpresa) {
        return axios.get(EMPRESA_BASE_REST_API_URL + "/" + IdEmpresa);
    }

    updateEmpresa(IdEmpresa, empresa) {
        return axios.put(EMPRESA_BASE_REST_API_URL + "/" + IdEmpresa, empresa);
    }    

    deleteEmpresa(IdEmpresa) {
        return axios.delete(EMPRESA_BASE_REST_API_URL + "/" + IdEmpresa);
    }      

}

export default new EmpresaService();