import request from "utils/request";

// export const controller = new AbortController();
// export const signal = controller.signal;

export const reqPosts = async (pageCount, offset = 0) => {
  return request(`post/crud/?limit=${pageCount}&offset=${offset}`)
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
