import React, { useState } from 'react';
import 'assets/styles/index.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { reqSignUp } from 'api/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSignIn } from 'components/scheme';
import SignUpPic from 'assets/images/signUpIMG.png';
import Success from 'components/Dashboard/Success';
import { useDispatch } from 'react-redux';
import { setShowSuccess } from 'store/Success/action';
import Input from 'pages/Input';
function SignUp() {
  const [image, setImage] = useState('');
  const [passInvalid, setPassInvalid] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schemaSignIn),
  });
  const navigate = useNavigate();
  const [file, setFile] = useState(SignUpPic);
  const [imageValid, setImageValid] = useState(true);
  const dispatch = useDispatch();
  const handleSignUp = async (data) => {
    try {
      const formData = new FormData();
      formData.append('first_name', data.name);
      formData.append('last_name', data.lastname);
      formData.append('password', data.password);
      formData.append('conPassword', data.conPassword);
      formData.append('email', data.email);
      formData.append('image', file);
      setPassInvalid(false);
      if (data.password !== data.conPassword) {
        setPassInvalid(true);
        return;
      }
      const response = await reqSignUp(formData);
      if (response.status === 200) {
        setTimeout(() => {
          dispatch(setShowSuccess(true));
        }, 400);
        setTimeout(() => {
          dispatch(setShowSuccess(false));
          navigate('/logIn');
        }, 1800);
      }
    } catch (error) {
      if (error?.response?.data.image) setImageValid(false);
      console.log('Error:', error?.response?.data);
    }
  };

  const handleImage = (e) => {
    setFile(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
    setImageValid(true);
  };
  return (
    <div className="fullscreen">
      <div className="signUp">
        <h2>Sign Up</h2>
        <Success />
        <label htmlFor="image" className="choosePic">
          <img src={image ? image : SignUpPic} />
        </label>
        <form className="input" onSubmit={handleSubmit(handleSignUp)}>
          <input type="file" id="image" onChange={handleImage} value={''} />
          {imageValid ? '' : <p className="error">Image not found</p>}
          <div className="inputs">
            <div className="test">
              <Input
                type="text"
                placeholder="Your name"
                name="name"
                register={register}
                errors={errors}
              />
            </div>
            <div className="test">
              <Input
                type="text"
                placeholder="Last name"
                name="lastname"
                register={register}
                errors={errors}
              />
            </div>
          </div>
          <div className="email1">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              register={register}
              errors={errors}
            />
          </div>

          <div className="passwords">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              register={register}
              errors={errors}
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              name="conPassword"
              register={register}
              errors={errors}
            />
          </div>
          <p className="errorMessage setting pass">
            {errors?.password?.message
              ? 'must have more than 6 characters'
              : ''}{' '}
          </p>
          <p className={passInvalid ? 'passInvalid' : 'passValid'}>
            Password mismatch
          </p>

          <div className="upBtn">
            {' '}
            <input type="submit" value="Sign Up" />
          </div>
        </form>
        <p>
          Already have an account? <Link to="/logIn">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
