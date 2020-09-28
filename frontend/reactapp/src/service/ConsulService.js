import axios from 'axios';

export class ConsulService {
    baseUrl = "http://localhost:8080/api/v1/";

    getAll(){
        return axios.get(this.baseUrl + "consultations").then(res => res.data);
    }
/*
    save(persona) {
        return axios.post(this.baseUrl + "patients", persona).then(res => res.data);
    }

    delete(idPatient) {
        return axios.delete(this.baseUrl + "patients/"+ idPatient).then(res => res.data);
    }
    */
}