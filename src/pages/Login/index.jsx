import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAccessToken, setRefreshToken } from 'utils/storage';
import { reqSignIn } from 'api/auth';
import 'assets/styles/index.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginSuccess } from 'store/Auth/actions';
import { schemaLogin } from 'components/scheme';
import { setShowSuccess } from 'store/Success/action';
import Input from 'pages/Input';

function Login() {
  const dispatch = useDispatch();
  const registrationState = useSelector((state) => state.registration);
  const navigate = useNavigate();
  const [isInvalid, setIsInvalid] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schemaLogin),
  });
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('email', data.email);
      formData.append('password', data.password);
      const response = await reqSignIn(formData);
      if (response.status === 200) {
        const responseData = response.data;
        setIsInvalid(false);
        setAccessToken(responseData.token.access);
        setRefreshToken(responseData.token.refresh);
        navigate('/posts');
        dispatch(loginSuccess(response));
        setTimeout(() => {
          dispatch(setShowSuccess(true));
        }, 400);
        setTimeout(() => {
          dispatch(setShowSuccess(false));
        }, 1800);
        setAccessToken(registrationState.user.data.access);
        setRefreshToken(registrationState.user.data.refresh);
      }
    } catch (er) {
      console.error('Error:', er);
      setIsInvalid(true);
      dispatch(loginFailure(er));
    }
  };
  return (
    <div className="fullscreen">
      <div className="logIn">
        <h2>Sign In</h2>

        <form className="input" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            errors={errors}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            register={register}
            errors={errors}
          />
          {isInvalid && <p className="invalid">Email or Password not valid</p>}
          <div className="upBtn">
            {' '}
            <input type="submit" value="Sign In" />{' '}
          </div>
        </form>

        <p>
          Need an account?<Link to="/signUp">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
