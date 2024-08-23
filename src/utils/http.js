import axios from "axios"

const apiBase = "https://eat.vincent.0nline.tech/"
const http = axios.create({
    baseURL: apiBase
})

export {http};

export default http;