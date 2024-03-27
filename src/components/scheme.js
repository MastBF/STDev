import * as yup from 'yup';

export const schemaCreate = yup.object().shape({
  title: yup.string().required().min(3).max(25),
  description: yup.string().required().min(10).max(100),
});

export const schemaLogin = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

export const schemaSignIn = yup.object().shape({
  name: yup.string().required().min(3).max(25),
  lastname: yup.string().required().min(3).max(25),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});
