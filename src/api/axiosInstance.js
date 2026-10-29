import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000",
    timeout:5000
})

// request interceptor : handling token append to headers
axiosInstance.interceptors.request.use(
    (config)=>{
        const token = sessionStorage.getItem("token")
        if(token){
            config.headers.Authorization = `bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

// response interceptor : Handling global errors 
axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("response received");
        return response        
    },
    (error)=>{
        if(error.response){
            const status = error.response.status
            if(status==401){
                console.log("Unauthorised Access");
            }else if(status==404){
                console.log("Api not found");
            }else if(status==500){
                console.log("Server Error");
            }else if(error.request){
                console.log("No response from server");
                return error.request.response
            }else{
                console.log(`Error ${error.message}`);
            }
            return Promise.reject(error)
        }
    }
)

export default axiosInstance