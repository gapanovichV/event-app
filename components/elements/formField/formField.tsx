import React from "react"
import clsx from "clsx"
import styles from "./FormField.module.scss"

interface FormFieldProps {
  className?: string
  children?: React.ReactNode
}

const FormField = ({ children, className }: FormFieldProps) => {
  return <div className={clsx(styles.field, className)}>{children}</div>
}

export default FormField
