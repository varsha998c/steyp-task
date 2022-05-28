import axios from "axios";

export const learnConfig = axios.create({
    baseURL: "https://developers-learn.talrop.com/api/v1/",
});
export const practiceConfig = axios.create({
    baseURL: "https://learn.steyp.com/api/v1/",
});
