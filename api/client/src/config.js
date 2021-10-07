import axios from "axios"

export  const axiosInstance = axios.create({
    baseUrl : "https://pedre.herokuapp.com/api/blog"
})