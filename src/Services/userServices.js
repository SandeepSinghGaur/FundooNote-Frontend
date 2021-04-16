import axiosServices from "./axiosServices";
const axiosService=new axiosServices();
export default class userServices {
    constructor() {
        this.header = {
            headers: {
                'Authorization': localStorage.getItem("token"),
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
    GetAllNotes=()=>{
        console.log(`Bearer ${localStorage.getItem('token')}`);
        return axiosService.get("https://localhost:5001/api/Note",{ headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}`}});
           
    }
    GetAllTrashNotes=()=>{
        console.log(`Bearer ${localStorage.getItem('token')}`);
        return axiosService.get("https://localhost:5001/api/Note/GetAllTrashNote",{ headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}`}});
           
    }
    GetAllArchiveNotes=()=>{
        console.log(`Bearer ${localStorage.getItem('token')}`);
        return axiosService.get("https://localhost:5001/api/Note/GetAllArchiveNote",{headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}});

    }

}


