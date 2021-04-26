import axios from "axios";

export default function axiosServices() {


}
axiosServices.prototype.post = function (url, data, isHeaderReq = false) {
	console.log(url,isHeaderReq);
	 return axios.post(url, data,  isHeaderReq)
}
axiosServices.prototype.get = function (url,  isHeaderReq = false) {
	return axios.get(url, isHeaderReq)
}
axiosServices.prototype.put = function (url,data, isHeaderReq = false) {
	return axios.put(url, data,  isHeaderReq)
}
axiosServices.prototype.Delete = function (url, isHeaderRequired = false) {
	return axios.delete(url,isHeaderRequired);
};



