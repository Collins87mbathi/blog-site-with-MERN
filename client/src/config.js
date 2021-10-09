import axios from "axios";

export  const axiosInstance = axios.create({
    
    baseUrl : "https://collo.herokuapp.com/api/blog",

});