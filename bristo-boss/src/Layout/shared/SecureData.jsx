import axios from "axios"
import { useContext } from "react";
import { contextProvide } from "../../AuthContext/UserContext";


const axiosSecure = axios.create({
    baseURL : "http://localhost:5000"
})


const SecureData = () => {
    const {logOut} = useContext(contextProvide)
    axiosSecure.interceptors.request.use(function (config) {
        const tokens = localStorage.getItem("token");
        config.headers.authorization = tokens;
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

      axiosSecure.interceptors.response.use(function (response) {
        return response;
      }, function (error) {
        if(error){
            
            logOut();
        }
        return Promise.reject(error);
      });
  return axiosSecure
}

export default SecureData