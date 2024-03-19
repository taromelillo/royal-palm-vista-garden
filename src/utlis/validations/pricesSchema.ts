import { object, string } from 'yup';

export const pricesSchema = object().shape({
  name: string()
    .required('Required.')
    .min(4, 'Must be at least 4 characters.')
    .max(20, 'Must be less than 20 characters.'),

  price: string()
    .required('Required.')
    .matches(/^[0-9]+$/, { message: 'Only numbers allowed.' }),
});
