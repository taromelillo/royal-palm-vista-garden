import { object, string } from 'yup';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const authSchema = object().shape({
  user: string()
    .required('Required.')
    .min(4, 'Must be at least 4 characters.')
    .max(24, 'Must be less than 4 characters.')
    .matches(emailRegex, { message: 'Email is not valid.' }),

  password: string()
    .required('Required.')
    .min(8, 'Must be at least 8 characters.')
    .max(24, 'Must be less than 4 characters.'),
});
