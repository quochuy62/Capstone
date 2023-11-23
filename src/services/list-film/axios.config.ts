import axios from 'axios';


const BASE_URL = "https://movienew.cybersoft.edu.vn/api";


export const axiosWithoutAuth = axios.create({
baseURL: BASE_URL,
timeout:180_000,
});


axiosWithoutAuth.interceptors.request.use(
    (config)=>{
        config.headers.TokenCybersoft=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwOSIsIkhldEhhblN0cmluZyI6IjE0LzA0LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMzA1MjgwMDAwMCIsIm5iZiI6MTY4MzczODAwMCwiZXhwIjoxNzEzMjAwNDAwfQ.Y0q3MDoDxNMpVtvUf90Wwp7z6n8VL07u_x3J58CmzQ0`
        return config;
    }
)

