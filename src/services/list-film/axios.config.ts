import axios from 'axios';


const BASE_URL = "https://domain.xyz/api";


export const axiosWithoutAuth = axios.create({
baseURL: BASE_URL,
timeout:180_000,
});


