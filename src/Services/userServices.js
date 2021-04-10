import Axios from "./axiosServices";

const baseUrl = process.env.REACT_APP_API
//const axios = new Axios();

export default class userServices {
    constructor() {
        this.axiosService=new Axios();
        this.header = {
            headers: {
                'token': "xyz"
            }
        }
    }
     SignIn(data) {
         return this.axiosService.post(`${baseUrl}/Api/Controller`, data);
     }

}


