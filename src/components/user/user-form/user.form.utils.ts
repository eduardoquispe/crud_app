import * as yup from 'yup';

import {User} from '../../../interfaces/user';

export const userFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .matches(/^[a-zA-Z\s]+$/, 'El nombre solo debe contener letras'),
  lastName: yup
    .string()
    .required('El apellido es obligatorio')
    .min(2, 'El apellido debe tener al menos 2 caracteres')
    .matches(/^[a-zA-Z\s]+$/, 'El apellido solo debe contener letras'),
  age: yup
    .number()
    .required('La edad es obligatoria')
    .typeError('La edad debe ser un número')
    .positive('La edad debe ser un número positivo')
    .integer('La edad debe ser un número entero')
    .min(18, 'Debes tener al menos 18 años')
    .max(99, 'La edad no puede superar los 99 años'),
  email: yup
    .string()
    .required('El correo electrónico es obligatorio')
    .email('Debe ser un correo electrónico válido'),
});

export const defaultValues = (defaultData?: User) => ({
  firstName: defaultData?.firstName ?? '',
  lastName: defaultData?.lastName ?? '',
  email: defaultData?.email ?? '',
  age: defaultData?.age ?? 0,
});
