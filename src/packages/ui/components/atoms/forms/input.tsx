import { TextField, type TextFieldProps } from "@mui/material";
import { useEffect } from "react";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import type { InputType } from "./types";

// Interface de tipo para cualquier tipo de formulario
interface TextFieldUIProps<T extends FieldValues>
  extends Omit<TextFieldProps, "name"> {
  name: Path<T>;
  control: Control<T>;
  type?: InputType;
  helpText?: string;
  disabled?: boolean;
  size?: "small" | "medium";
}

// Componente reutilizable
export const TextFieldUI = <T extends FieldValues>({
  name,
  control,
  type = "text",
  helpText,
  disabled,
  size = "small",
  ...rest
}: TextFieldUIProps<T>) => {
  // Registrar con valor como número si es tipo NUMBER
  useEffect(() => {
    if (type === "number" && control && name) {
      control.register(name, { valueAsNumber: true });
    }
  }, [name, type, control]);

  // Si no hay control o nombre, renderizar TextField normal
  if (!control || !name) {
    return <TextField {...rest} disabled={disabled} type={type} />;
  }
  console.log(rest, "❤️❤️❤️❤️❤️❤️");
  return (
    // Usar Controller de react-hook-form para manejar el estado del campo
    // Controller es un componente que conecta el campo de formulario con react-hook-form
    // Permite manejar el estado del campo, validaciones y errores de manera más sencilla
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        console.log(field, error);
        return (
          <TextField
            {...field}
            {...rest}
            disabled={disabled}
            fullWidth
            size={size}
            type={type}
            error={!!error}
            helperText={error?.message || helpText}
            onBlur={(e) => {
              field.onBlur();
              rest.onBlur?.(e);
            }}
            onChange={(e) => {
              field.onChange(e);
              rest.onChange?.(e);
            }}
          />
        );
      }}
    />
  );
};
