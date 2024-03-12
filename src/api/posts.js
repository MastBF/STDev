import request from "utils/request";

export const reqPosts = async (num) => {
  const count = await request(`post/crud/?limit=${4}&offset=0`).then(
    (json) => json.data.count
  );
  return request(`post/crud/?limit=${count}&offset=0`);
};

export const createPost = async (data) => {
  return request.post("/post/crud/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deletePost = async (id) => {
  return request.delete(`/post/crud/${id}/`);
};

export const editPost = async (data, id) => {
  return request.put(`/post/crud/${id}/`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const idPost = async (id) => {
  return request(`/post/crud/${id}/`);
};
