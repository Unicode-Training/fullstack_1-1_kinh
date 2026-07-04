import axios from "axios";
import { env } from "../configs/env";
export const axiosInstance = axios.create({
    baseURL: env.BACKEND_URL
})