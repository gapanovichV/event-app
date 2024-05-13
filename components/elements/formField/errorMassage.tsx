import clsx from "clsx"
import { FieldError } from "react-hook-form"
import styles from "./FormField.module.scss"

interface ErrorMassageProps {
  className?: string
  error: FieldError | undefined
}

const ErrorMassage = ({ error, className }: ErrorMassageProps) => {
  return <>{error && <span className={clsx(styles.error, className)}>{error.message}</span>}</>
}

export default ErrorMassage