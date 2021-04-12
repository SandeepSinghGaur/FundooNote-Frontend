import axiosServices from "./axiosServices";
//const baseUrl = process.env.REACT_APP_API
const axiosService=new axiosServices();
export default class userServices {
    constructor() {
        this.header = {
            headers: {
                'token': localStorage.getItem("token")
            }
        }
    }
     SignIn(data) {
        console.log("This is SignIn part", data);
         return axiosService.post(`https://localhost:5001/api/User/login`, data,null);
     }
     SignUp = (data) => {
        console.log("This is SignUp part", data);
		return axiosService.post(`https://localhost:5001/api/User`,data,null);
	};
    ForgetPassword = (data) => {
        console.log("This is forgot password part", data);
		return axiosService.get(`https://localhost:5001/api/User/ForgotPassword/${data}`);
        
	};

}


