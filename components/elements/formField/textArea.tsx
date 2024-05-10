import clsx from "clsx"
import { UseFormRegister } from "react-hook-form"
import { FormScheme } from "@/components/modules/eventForm/EventForm"
import { TFormField } from "@/components/elements/formField/formField.interface"
import styles from "./FormField.module.scss"

interface TextAreaProps {
  className?: string
  placeholder?: string
  register: UseFormRegister<FormScheme>
  name: TFormField
}

const TextArea = ({ placeholder, register, name, className }: TextAreaProps) => {
  return (
    <textarea
      placeholder={placeholder}
      {...register(name)}
      className={clsx(styles.input, className)}
    />
  )
}

export default TextArea
