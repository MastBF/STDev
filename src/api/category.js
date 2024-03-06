import request from "utils/request";

export const reqCategory = async () => {
    return request('/category/')
};
