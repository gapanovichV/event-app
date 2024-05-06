import { FC } from "react"
import clsx from "clsx"
import styles from "./Create.module.scss"

interface CreateProps {
  className?: string
}

const Create = ({ className }: CreateProps) => {
  return (
    <div className={clsx(styles.create)}>
      <div className={clsx("container", styles.create_container)}>Create</div>
    </div>
  )
}

export default Create
