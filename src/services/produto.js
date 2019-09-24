import {http} from './config'

export default {
    listar: (categoria, pagina) => {
        return http.get("/product/list/"+categoria+"/"+pagina);
    }
}