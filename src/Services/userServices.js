import Axios from "./axiosServices";
const baseUrl = "https://localhost:5001/api/User/login"

const axios = new Axios();

export default class userServices {
    SignIn = (data) => {
        console.log(data,"data");
        return axios.Post(`${baseUrl}`, data);
    }

}