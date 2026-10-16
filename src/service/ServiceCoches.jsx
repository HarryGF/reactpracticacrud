import axios from "axios"
import Global from "../Global"

export default class ServiceCoches {
    async getCoches() {
        let url = Global.urlApiCoches
        let request = "api/coches"
        let response = await axios.get(url + request)
        return response.data
    }
} 