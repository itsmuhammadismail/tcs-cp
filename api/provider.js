import axios from "axios";

export class Providers {
    
    BASEURL = "http://uatportal.tcs.com.pk:8000";

    get token() {
    const token = localStorage.getItem("token");
    return {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        }
    };
    }

    /**
     * 
     * @param {*} url 
     * @returns Promise
     */
    async get(url) {
        return axios.get(url, {...this.token}).then((res)=> res).catch((error)=> {console.error(error)});
    }
    /**
     * 
     * @param {*} url 
     * @param {*} params 
     * @returns Promise
     */
    async post(url, params) {
        return axios.post(url,params, {...this.token}).then((res)=> res).catch((error)=> {console.error(error)});
    }

    /**
     * 
     * @param {*} url 
     * @returns 
     */
    async put(url) {
        return axios.put(url, {...this.token}).then((res)=> res).catch((error)=> {console.error(error)});
    }

   async getOrigin(id) {
    return await this.get(`${this.BASEURL}/costcenters/${id}/`);
   }

   async fetchCancelBooking(payload){
    return await this.post(`${this.BASEURL}/bookingreport/`,payload);
   }

}
