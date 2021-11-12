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

    async patch(url) {
        return axios.patch(url, {...this.token}).then((res)=> res).catch((error)=> {console.error(error)});
    }

    /**
     * 
     * @param {*} endPoint 
     * @param {*} params 
     * @returns 
     */
   async callApiPost(endPoint, params) {
    return await this.post(`${this.BASEURL}/${endPoint}/`, params);
   }

   /**
    * 
    * @param {*} endpoint 
    * @returns 
    */
   async callApiGet(endpoint) {
    return await this.get(`${this.BASEURL}/${endpoint}`);
   }

   /**
    * 
    * @param {*} endpoint 
    * @param {*} id 
    * @returns 
    */
   async callApiGetById(endpoint, id) {
    return await this.get(`${this.BASEURL}/${endpoint}/${id}`);
   }

   /**
    * 
    * @param {*} endpoint 
    * @param {*} id 
    * @returns 
    */
   async callApiPut(endpoint, id) {
    return await this.put(`${this.BASEURL}/${endpoint}/${id}`);
   }

   /**
    * 
    * @param {*} endpoint 
    * @param {*} id 
    * @returns 
    */
   async callApiPatch(endpoint, id) {
    return await this.patch(`${this.BASEURL}/${endpoint}/${id}`);
   }

   
}
