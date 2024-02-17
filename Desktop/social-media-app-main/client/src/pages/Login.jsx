import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Tb3DCubeSphere } from "react-icons/tb";
import { CustomButton, Loading, TextInput } from "../components";
import { BgImage } from "../assets";
import axios from "axios";

const Login = () => {  
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true); 
  
    try {
      const response = await axios.get(`http://localhost:3045/users?email=${data.email}`);

      const userData = response.data;
      
      if (!userData) {
        setErrMsg({ message: 'Email not found' });
        return;
      }


      userData.map(user => {
      if (user.password !== data.password) {
        setErrMsg({ message: 'Incorrect password' });
        return;
      }else{
        navigate('/home');
      }

      
      })

  
    } catch (error) {

      console.error('Login Error:', error);
      setErrMsg({ message: 'An error occurred while logging in. Please try again later.' });
    }

    setIsSubmitting(false);
  };


  return (
    <div className='bg-bgColor w-full h-[100vh] flex items-center justify-center p-6'>
      <div className='w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-xl overflow-hidden shadow-xl'>
        {/* LEFT */}
        <div className='w-full lg:w-1/2 h-full p-10 2xl:px-10 mt-6  flex-col justify-center items-center'>
          <div className='w-full flex gap-2 items-center justify-center mb-6'>
            <div className='p-2 bg-[#26737e] rounded text-white '>
              < Tb3DCubeSphere />
            </div>
            <span className='text-2xl text-[#26737e] font-semibold '>
              SocialApp
            </span>
          </div>

          <p className='text-ascent-1 text-base font-semibold flex justify-center items-center'>
            Log in to your account
          </p>
          <span className='text-sm mt-2 text-ascent-2 flex justify-center items-center'>Share memories with friends and the world.</span>

          <form
            className='py-8 flex flex-col gap-5= m-0'
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextInput
              name='email'
              placeholder='email@example.com'
              label='Email Address'
              type='email'
              register={register("email", {
                required: "Email Address is required",
              })}
              styles='w-full rounded-full'
              labelStyle='ml-2'
              error={errors.email ? errors.email.message : ""}
            />

            <TextInput
              name='password'
              label='Password'
              placeholder='Password'
              type='password'
              styles='w-full rounded-full'
              labelStyle='ml-2'
              register={register("password", {
                required: "Password is required!",
              })}
              error={errors.password ? errors.password?.message : ""}
            />

            <Link
              to='/reset-password'
              className='text-right text-slate font-semibold text-xs my-5'
            >
              Forgot Password ?
            </Link>

            {errMsg?.message && (
              <span
                className={`text-sm mb-4 ${
                  errMsg?.status == "failed"
                    ? "text-[#2ba150fe]"
                    : "text-[#f64949fe]"
                } mt-0.5`}
              >
                {errMsg?.message}
              </span>
            )}

            {isSubmitting ? (
              <Loading />
            ) : (
              <CustomButton
                type='submit'
                containerStyles={`inline-flex justify-center rounded-md bg-#26737e px-8 py-3 text-sm font-medium text-white outline-none`}
                title='Login'
              />
            )}
          </form>

          <p className='text-ascent-2 text-sm text-center'>
            Don't have an account?
            <Link
              to='/register'
              className='text-[#26737e] font-semibold ml-2 cursor-pointer'
            >
              Create Account
            </Link>
          </p>
        </div>
        {/* RIGHT */}
        <div className='hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-blue'>
          <div className='relative w-full flex items-center justify-center'>
            <img
              src={BgImage}
              alt='Bg Image'
              className='h-full w-full'
            />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
