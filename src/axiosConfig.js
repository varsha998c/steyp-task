import axios from "axios";

// DEVELOPER SERVER CONFIG
export const learnConfig = axios.create({
    baseURL: "https://developers-learn.talrop.com/api/v1/",
});
