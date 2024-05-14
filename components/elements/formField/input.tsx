import React from "react"
import clsx from "clsx"

import styles from "./FormField.module.scss"

type InputProps<
  Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = "input"
> = {
  className?: string
  label?: string
  error?: string
  component?: Component
} & React.ComponentProps<Component>

const Input = React.forwardRef(
  (
    { label, className, component, error, id: externalId, ...props }: InputProps<"input">,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const internalId = React.useId()
    const id = externalId ?? internalId

    const Component = component || "input"

    return (
      <>
        {label && <label htmlFor={id}>{label}</label>}
        <Component className={clsx(styles.input, className)} id={id} {...props} ref={ref} />
        {error && <span className={clsx(styles.error, className)}>{error}</span>}
      </>
    )
  }
) as <Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = "input">(
  props: InputProps<Component> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => React.ReactElement

export default Input
