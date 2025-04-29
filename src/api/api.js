import axios from "axios";

export const apiDB = axios.create({
    baseURL: "https://dragonball-api.com/api/"
})