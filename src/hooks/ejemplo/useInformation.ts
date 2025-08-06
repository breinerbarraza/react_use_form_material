import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
// Trabajamos con hooks para evitar mucho parámetro en el componente
export const useInformation = () => {
  // Usamos useForm de react-hook-form para manejar el formulario
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    // Usamos yupResolver para validar el esquema de yup
    resolver: yupResolver(schema),
    // Inicializamos el formulario con valores por defecto
    values: {
      name: "",
      surname: "",
      email: "",
      address: "",
    },
  });
  // Función para manejar el envío del formulario
  const handle = handleSubmit((data) => {
    console.log(data, "❤️❤️❤️❤️");
  });
  // Retornamos el control, errores y la función de manejo
  return { control, errors, handle };
};
