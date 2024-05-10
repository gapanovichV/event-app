import clsx from "clsx"
import { UseFormRegister } from "react-hook-form"
import { FormScheme } from "@/components/modules/eventForm/EventForm"
import { TFormField } from "@/components/elements/formField/formField.interface"
import styles from "./FormField.module.scss"

interface InputProps {
  className?: string
  type: string
  placeholder?: string
  register: UseFormRegister<FormScheme>
  name: TFormField
}

const Input = ({ type, placeholder, register, name, className }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className={clsx(styles.input, className)}
    />
  )
}

export default Input
