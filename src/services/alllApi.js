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
export const getAllBooksAPI = async (searchKey)=>{
    return await apiService("GET",`/all-books?search=${searchKey}`,{})
}

// get user books api : bookstatus component when page opens 
export const getUserBooksAPI = async ()=>{
    return await apiService("GET",`/user-books`,{})
}

// get user brought books api : book component when page loads 
export const getUserBroughtBooksAPI = async ()=>{
    return await apiService("GET",`/brought-books`,{})
}

// delete user uploaded books : bookstatus component when delete button clicked
export const deleteUserBooksAPI = async (bookId)=>{
    return await apiService("DELETE",`/book/${bookId}`,{})
}

// get a single book details api : when view more buttn is clicked
export const viewBookAPI = async (id)=>{
    return await apiService("GET",`/view-book/${id}`,{})
}

// buy book api
export const buyBookAPI = async (id)=>{
    return await apiService("PUT",`/books/${id}/buy`,{})
}

// edit admin api : admin settings components when clicked on edit button
export const adminUpdateAPI = async (adminId,adminData)=>{
    return await apiService("PUT",`/admin/${adminId}`,adminData)
}

// get all users : admin resourses components user tab
export const userListAPI = async ()=>{
    return await apiService("GET",`/user-list`,{})
}