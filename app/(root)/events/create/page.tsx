import clsx from "clsx"

import EventForm from "@/components/modules/eventForm/EventForm"

import styles from "./Create.module.scss"

interface CreateProps {
  className?: string
}

const Create = ({ className }: CreateProps) => {
  return (
    <div className={clsx(styles.create)}>
      <div className={clsx("container", styles.create_container)}>
        <h2>Create Event</h2>
        <EventForm type={"Create"} />
      </div>
    </div>
  )
}

export default Create
