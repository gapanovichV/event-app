import clsx from "clsx"

import EventForm from "@/components/modules/eventForm/EventForm"

import styles from "./Update.module.scss"

interface UpdateProps {
  params: {
    id: string
  }
  className?: string
}

const UpdatePage = ({ className, params: { id } }: UpdateProps) => {
  return (
    <div className={clsx(styles.create, className)}>
      <div className={clsx("container", styles.update_container)}>
        <h2>Update Event</h2>
        <EventForm type={"Update"} />
      </div>
    </div>
  )
}

export default UpdatePage
