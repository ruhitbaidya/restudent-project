import axios from "axios";

const fetchdata = axios.create({
    baseURL : "http://localhost:5000"
})
const Datafetch = () => {
    return fetchdata;
}

export default Datafetch