import axios from "axios";

export default function axiosServices() {


}
axiosServices.prototype.post = function (url, data, header, isHeaderReq = false) {
	console.log(url);
	return axios.post(url, data, header && isHeaderReq)
}
axiosServices.prototype.get = function (url,  isHeaderReq = false) {
	return axios.get(url, isHeaderReq)
}
axiosServices.prototype.put = function (url, data, header, isHeaderReq = false) {
	return axios.put(url, data, header && isHeaderReq)
}
axiosServices.prototype.Delete = function (url, header,isHeaderRequired = false) {
	return axios.delete(url, header && isHeaderRequired);
};



