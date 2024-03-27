import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, placeholder, name, register, errors }) {
  const Component = type === 'textarea' ? 'textarea' : 'input';

  return (
    <>
      <Component
        type={type !== 'textarea' ? type : undefined}
        placeholder={placeholder}
        {...register(name, { required: `${name} is required` })}
        className={errors && errors[name] ? 'invalid' : ''}
      />
      {errors && errors[name] && (
        <p>{errors[name].message || `${name} Error`}</p>
      )}
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

export default Input;
