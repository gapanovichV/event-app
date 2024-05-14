import React from "react"
import clsx from "clsx"

import styles from "./FormField.module.scss"

interface LabelProps {
  className?: string
  children: React.ReactNode
}

const Label = ({ className, children }: LabelProps) => {
  return <label className={clsx(styles.label, className)}>{children}</label>
}

export default Label
