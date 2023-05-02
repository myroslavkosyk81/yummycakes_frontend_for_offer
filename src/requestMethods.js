import axios from "axios";


const BASE_URL = process.env.REACT_APP_API_URL;

//Sorry, I can't show all code. But don't worry, it works!
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)
// console.log((JSON.parse(localStorage.getItem("persist:root")).user))

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
});