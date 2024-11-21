import joi from "joi-oid";

const schema = joi.object({
  name: joi.string().alphanum().required().messages({
    'string.base': 'El nombre debe ser un texto.',
    'string.alphanum': 'El nombre no debe contener caracteres especiales ni números.',
    'any.required': 'El nombre es obligatorio.',
  }),
  lastname: joi.string().alphanum().required().messages({
    'string.base': 'El apellido debe ser un texto.',
    'string.alphanum': 'El apellido no debe contener caracteres especiales ni números.',
    'any.required': 'El apellido es obligatorio.',
  }),
  email: joi.string().email().required().messages({
    'string.base': 'El correo debe ser un texto.',
    'string.email': 'El correo debe tener un formato válido.',
    'any.required': 'El correo es obligatorio.',
  }),
  password: joi.string().required().messages({
    'string.base': 'La contraseña debe ser un texto.',
    'any.required': 'La contraseña es obligatoria.',
  }),
  photo: joi.string().uri().required().messages({
    'string.base': 'La foto debe ser un texto.',
    'string.uri': 'La foto debe ser un enlace válido.',
    'any.required': 'La foto es obligatoria.',
  }),
  country: joi.string().required().messages({
    'string.base': 'El país debe ser un texto.',
    'any.required': 'El país es obligatorio.',
  }),
});

export default schema;
