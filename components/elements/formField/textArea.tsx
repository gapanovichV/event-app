import type { UseFormRegister } from "react-hook-form"
import clsx from "clsx"

import type { TFormField } from "@/components/elements/formField/formField.interface"
import type { FormScheme } from "@/components/modules/eventForm/EventForm"

import styles from "./FormField.module.scss"

interface TextAreaProps {
  className?: string
  placeholder?: string
  register: UseFormRegister<FormScheme>
  name: TFormField
}

const TextArea = ({ placeholder, name, register, className }: TextAreaProps) => {
  return (
    <textarea
      className={clsx(styles.input, className)}
      placeholder={placeholder}
      {...register(name)}
    />
  )
}

export default TextArea
