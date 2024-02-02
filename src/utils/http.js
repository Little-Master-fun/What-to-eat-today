import axios from "axios"

const apiBase = "https://simple-bbs.api.lnkkerst.me/"
const http = axios.create({
    baseURL: apiBase
})

export {http};

export default http;