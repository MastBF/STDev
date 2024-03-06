import request from "utils/request";

export const reqSignUp = async (data) => {
  return request.post(`/user/sign-up/`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const reqSignIn = (data) => {
  return request.post(`/user/sign-in/`, data);
};

export const reqGetMe = async () => {
  try{

    return await request("/user/me/");
  }catch(err){
    console.log(err)
  }
};
