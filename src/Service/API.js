import axios from "axios";


let API=axios.create({
    baseURL:"https://sms-backend-pwiz.onrender.com"
})
export default API;