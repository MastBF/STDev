import React, { useEffect } from "react";
import "assets/styles/index.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPost, editPost } from "api/posts";
import { reqCategory } from "api/category";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  title: yup.string().required().min(3).max(25),
  description: yup.string().required().min(10).max(100),
});
function Create(props) {
  const [file, setFile] = useState("");
  const [image, setImage] = useState(props.image || "");
  const [imageValid, setImageValid] = useState(true);
  const [category, setCategory] = useState([]);
  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    props.category || ""
  );

  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      title: props.title || "",
      description: props.description || "",
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reqCategory().then((res) => setCategory(res.data));
  }, []);

  const handleFormSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", selectedCategory);
      formData.append("image", file );
      console.log("111");
      if (props.title) {
        const editResponse = await editPost(formData, props.id);
        console.log(editResponse);
      } else {
        const response = await createPost(formData);
        console.log(response);
      }
      navigate("/posts");
    } catch (error) {
      console.log("Error:", error?.response?.data);
    }
  };

  const handleImage = (e) => {
    setFile(e.target.files[0] || props.image);
    setImage(URL.createObjectURL(e.target.files[0]));
    setImageValid(true);
  };
  console.log(name);
  return (
    <div className="create">
      <h1>New Post</h1>
      <label htmlFor="image">
        <img
          src={
            image
              ? image
              : "https://s3-alpha-sig.figma.com/img/2c1d/ec99/45e3a9e1f4215d94629bd5243ebe27ca?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QoygVYxj8zPr0QW1-35XQa-uYt7EVVL~LRFYd2sXAmAdG~y8A~JZ6OQUqrP-lDmF5DYnoITJ5kDD97aIe9HCWSnZ-1feT03z88gUFRsUHh3un1hqFamvFPYoHclWHbEseGpMCdISymnlgmwVULANmXdcsumO0SfLqyrPMkjLlS9MpNyAx4QEkHCPmxTv9pd36Vsd~J-n~8vEBH59S3mxJV15vInRlNceW4oeEFoz9D62jIRYC-FIg-eCaeH3HklasfAUFnNzg0hYJjztBo-ZuOQjOYiJtVcSjI69uiq6-Hq961VBDoBJhhLo9tlX2Ru9AssiSTpj5hKyyh62rU7waQ__"
          }
        />
      </label>

      <input type="file" id="image" onChange={handleImage} value={""} />
      {imageValid ? "" : <p className="error">Image not found</p>}
      <img src={file} alt="" className="invalid" />
      <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form">
          <input
            type="text"
            placeholder="Name"
            {...register("title", { required: "This filed is required" })}
            className={errors?.title ? "invalid" : ""}
          />
          {errors?.title && <p>{errors?.title?.message || "Error"}</p>}{" "}
          <textarea
            type="text"
            placeholder="Description"
            {...register("description", { required: "This filed is required" })}
            className={errors?.description ? "invalid" : ""}
          />
          {errors?.description && (
            <p>{errors?.description?.message || "Error"}</p>
          )}{" "}
          <select
            value={selectedCategory || props.category}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {category.map((el) => {
              return (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              );
            })}
          </select>
        </div>
        <button>{props.title ? "Edit" : "Create"}</button>
      </form>
    </div>
  );
}

export default Create;
