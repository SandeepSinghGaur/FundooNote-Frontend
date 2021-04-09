import Axios from "./axiosServices";

const baseUrl =process.env.REACT_APP_API
const axios = new Axios();

export default class userServices {
    constructor(){
        //this.axiosService=new axiosService();
        this.header={
            headers:{
                'token':"xyz"
            }
        }
    }
    SignIn(data){
        return this.axios.post(`${baseUrl}/Api/Controller`,data);
    }
    // SignIn = (data) => {
    //     console.log(data,"data");
    //     return axios.Post(`${baseUrl}`, data);
    // }

}