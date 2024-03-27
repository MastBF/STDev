import React, { useEffect } from 'react';
import 'assets/styles/index.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createPost, editPost } from 'api/posts';
import { reqCategory } from 'api/category';
import { useNavigate } from 'react-router-dom';
import { schemaCreate } from 'components/scheme';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { setShowSuccess } from 'store/Success/action';
import defaultImage from 'assets/images/CreatePost.png';
import PropTypes from 'prop-types';

function Create({ image, category, title, description, id }) {
  const [file, setFile] = useState('');
  const [images, setImage] = useState(image || '');
  const [imageValid, setImageValid] = useState(true);
  const [categorys, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(category || '');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      title: title || '',
      description: description || '',
    },
    resolver: yupResolver(schemaCreate),
  });

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await reqCategory();
        setCategory(response.data);
      } catch (error) {
        console.error('Err', error);
      }
    };

    fetchCategory();
  }, []);

  const handleFormSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('category', selectedCategory);
      formData.append('image', file);
      if (title) {
        await editPost(formData, id);
      } else {
        await createPost(formData);
      }
      navigate('/posts?page=1');
      setTimeout(() => {
        dispatch(setShowSuccess(true));
      }, 400);
      setTimeout(() => {
        dispatch(setShowSuccess(false));
      }, 1800);
    } catch (error) {
      console.log('Error:', error?.response?.data);
    }
  };

  const handleImage = (e) => {
    setFile(e.target.files[0] || image);
    setImage(URL.createObjectURL(e.target.files[0]));
    setImageValid(true);
  };

  return (
    <div className="create">
      <h1>New Post</h1>
      <label htmlFor="image">
        <img src={images ? images : defaultImage} />
      </label>

      <input type="file" id="image" onChange={handleImage} value={''} />
      {imageValid ? '' : <p className="error">Image not found</p>}
      <img src={file} alt="" className="invalid" />
      <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form">
          <Input
            type="text"
            placeholder="Title"
            name="title"
            register={register}
            errors={errors}
          />
          <Input
            type="textarea"
            placeholder="Description"
            name="description"
            register={register}
            errors={errors}
          />
          <select
            value={selectedCategory || category}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categorys.map((el) => {
              return (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              );
            })}
          </select>
        </div>
        <button>{title ? 'Edit' : 'Create'}</button>
      </form>
    </div>
  );
}

Create.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Create;
