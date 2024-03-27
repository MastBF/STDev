import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, placeholder, name, register, errors }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, { required: 'This field is required' })}
        className={errors && errors[name] ? 'invalid' : ''}
      />
      {errors && errors[name] && (
        <p className="errorMessage">{errors[name].message}</p>
      )}
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Input;
