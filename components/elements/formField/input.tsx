import React, { useId } from "react"
import clsx from "clsx"

import styles from "./FormField.module.scss"

type InputProps<
  Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = "input"
> = {
  label?: string
  className?: string
  error?: string
  component?: Component
} & React.ComponentProps<Component>

const Input = ({ label, component, id: externalId, error, className, ...props }: InputProps) => {
  const internalId = useId()
  const id = externalId && internalId

  const Component = component || "input"

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Component className={clsx(styles.input, className)} id={id} {...props} />
      {error && <span className={clsx(styles.error, className)}>{error}</span>}
    </>
  )
}

export default Input
