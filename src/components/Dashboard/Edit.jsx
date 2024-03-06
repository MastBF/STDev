import React, { useEffect, useState } from "react";
import Create from "./Create";
import { idPost, reqPosts } from "api/posts";
import { useParams } from "react-router-dom";

function Edit(props) {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const foundPost = idPost(id);
    foundPost.then((res) => {
      setName(res.data.title);
      setDescription(res.data.description);
      setCategory(res.data.category.id);
      setImage(res.data.image);
    });
  }, [id]);
  return !name ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Create
        title={name}
        description={description}
        image={image}
        category={category}
        id = {id}
      />
    </div>
  );
}

export default Edit;
