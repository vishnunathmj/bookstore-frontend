import apiService from "../api/apiService";

// register : auth component when register button is clicked 
export const registerAPI = async(userData)=>{
    return await apiService("POST","/register",userData)
}

// Login : auth component when login button is clicked 
export const loginAPI = async(userData)=>{
    return await apiService("POST","/login",userData)
}

// google login api : auth component when clicking on google login button
export const googleLoginAPI = async(userData)=>{
    return await apiService("POST","/google-login",userData)
}

// edit user api : edit component when clicking on edit button
export const userupdateAPI = async (userId,userData)=>{
    return await apiService("PUT",`/user/${userId}`,userData)
}

// add book api : upload api component when clicking on add book button
export const addBookAPI = async (bookDetails)=>{
    return await apiService("POST",`/book`,bookDetails)
}

// get home book api : home components when page loads
export const getHomeBooksAPI = async ()=>{
    return await apiService("GET",`/home-books`,{})
}

// get all book api : book components when page loads
export const getAllBooksAPI = async ()=>{
    return await apiService("GET",`/all-books`,{})
}