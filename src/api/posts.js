import request from "utils/request";

export const reqPosts = async () => {
  return request("/post/crud/");
};

export const createPost = async (data) => {
  return request.post("/post/crud/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const editPost = async (data, id) => {
  return request.put(`/post/crud/${id}/`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};


export const idPost = async (id) => {
  return request(`/post/crud/${id}/`)
}