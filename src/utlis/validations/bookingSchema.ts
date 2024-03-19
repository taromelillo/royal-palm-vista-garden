import { object, string } from 'yup';

export const bookingSchema = object().shape({
  name: string()
    .required('Required.')
    .min(4, 'Name must be at least 8 characters.')
    .max(18, 'Name must be less than 18 characters.'),
  day: string()
    .required('Required.')
    .min(2, '31')
    .max(2, '31')
    .matches(/^[0-9]+$/, {
      message: 'Characters not allowed.',
    }),

  month: string()
    .required('Required.')
    .min(2, '12')
    .max(2, '12')
    .matches(/^[0-9]+$/, {
      message: 'Characters not allowed.',
    }),

  year: string()
    .required('Required.')
    .min(4, '2024')
    .max(4, '2024')
    .matches(/^[0-9]+$/, {
      message: 'Characters not allowed.',
    }),
});
