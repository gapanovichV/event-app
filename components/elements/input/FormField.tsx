import React, { FC } from "react"
import clsx from "clsx"
import styles from "./FormField.module.scss"
import { FieldError, UseFormRegister } from "react-hook-form"
import { TFormField } from "@/components/elements/input/formField.interface"
import { FormScheme } from "@/components/modules/eventForm/EventForm"

interface InputProps {
  type: string
  className?: string
  label: string
  register: UseFormRegister<FormScheme>
  error: FieldError | undefined
  name: TFormField
  placeholder: string
}

const FormField: FC<InputProps> = ({
  register,
  error,
  type,
  name,
  placeholder,
  label,
  className
}) => {
  return (
    <div className={clsx(styles.field)}>
      <label htmlFor={name} className={clsx(styles.label)}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        id={name}
        type={type}
        className={clsx(styles.input, className)}
        {...register(name)}
      />
      {error && <span className={clsx(styles.error)}>{error.message}</span>}
    </div>
  )
}

export default FormField
