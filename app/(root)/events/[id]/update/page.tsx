import clsx from "clsx"
import { auth } from "@clerk/nextjs/server"
import EventForm from "@/components/modules/eventForm/EventForm"
import styles from "./Update.module.scss"

interface UpdateProps {
  params: {
    id: string
  }
  className?: string
}

const Update = ({ className, params: { id } }: UpdateProps) => {
  const { sessionClaims } = auth()
  const userId = sessionClaims?.sub as string

  return (
    <div className={clsx(styles.create)}>
      <div className={clsx("container", styles.update_container)}>
        <h2>Update Event</h2>
        <EventForm userId={userId} type={"Update"} />
      </div>
    </div>
  )
}

export default Update
