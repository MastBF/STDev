import React from "react";
import "./Create.css";
import { useState } from "react";

function Create() {
  const [name, setName] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [Description, setDescription] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("name:", name);
    const regex = /[@#&]/;
    setIsInvalid(regex.test(name));
    setName("");
    setDescription("")
  };

  const handleNameChange = (event) => {
    const enteredName = event.target.value;
    setName(enteredName);
  };
  const handlDescriptionChange = (event) => {
    const enteredDescription = event.target.value;
    setDescription(enteredDescription);
  };
  console.log(isInvalid);

  return (
    <div className="create">
      <h1>New Post</h1>
      <img
        src="https://s3-alpha-sig.figma.com/img/2c1d/ec99/45e3a9e1f4215d94629bd5243ebe27ca?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a5-zD6gJxpg8Ud1Lltvi52fvPKm~HQQBTIbwpWsSttLiO6BABYZVSn8tn9-fndtLyVur1p6Xe2Kfl83HrI55R9sTm4e4AHzmS3W~F2nK4ThYIyzdcfX4BwfC-UQpi-qA~jSH-~aeFM8b81eOB1zEekAbv8xVti6pfOveume1xz5HLtrx5VNRRs-~pg~8ios77BC-Gv45XuPFFX2KcuyhLY3TOWLnEqovHFqwirkRqyEbSTd9ZLLGBmt5LPucBlb~eMF4V-5gKMEX-Fm0rpvwUioQj1HIe2PXAyKS1kIPkRuvyrjkfc7kJjYVS2ksB-LEXGEGENLvW7cAyBPoNopOEg__"
        alt=""
      />
      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          className={isInvalid ? "invalid" : ""}
        />
        <p className={`${isInvalid ? "errMessage" : ""}`}>
          This filed is required
        </p>
        <textarea
          type="text"
          value={Description}
          onChange={handlDescriptionChange}
          placeholder="Description"
          className={isInvalid ? "invalid" : ""}
        />
        <p className={`${isInvalid ? "errMessage" : ""}`}>
          This filed is required
        </p>
        <select value="" className={isInvalid ? "invalid" : ""}>
          <option value="" hidden disabled selected>
            Category
          </option>
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </select>
        <p className={`${isInvalid ? "errMessage" : ""}`}>
          This filed is required
        </p>
      </div>
      <button onClick={handleFormSubmit}>Create</button>
    </div>
  );
}

export default Create;
