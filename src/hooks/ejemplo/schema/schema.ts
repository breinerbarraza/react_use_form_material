import * as yup from "yup";

// Definimos el esquema de validación usando yup
export const schema = yup.object({
  name: yup.string().required("El nombre es obligatorio"),
  surname: yup.string().required("El apellido es obligatorio"),
  email: yup
    .string()
    .email("Correo electrónico inválido")
    .required("El correo es obligatorio"),
  address: yup.string().required("La dirección es obligatoria"),
});
