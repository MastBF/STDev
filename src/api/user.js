import request from "utils/request";

export const reqUser = async () => {
    return request('/user/me/')
};
