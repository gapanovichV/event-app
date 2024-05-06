import clsx from "clsx"
import styles from "./Create.module.scss"
import EventForm from "@/components/modules/eventForm/EventForm"
import { auth } from "@clerk/nextjs/server"

interface CreateProps {
  className?: string
}

const Create = ({ className }: CreateProps) => {
  const { sessionClaims } = auth()
  const userId = sessionClaims?.sub as string
  return (
    <div className={clsx(styles.create)}>
      <div className={clsx("container", styles.create_container)}>
        <h2>Create Event</h2>
        <EventForm userId={userId} type={"Create"} />
      </div>
    </div>
  )
}

export default Create
