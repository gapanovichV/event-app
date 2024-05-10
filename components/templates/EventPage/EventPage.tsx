import clsx from "clsx"
import { getAllEvents } from "@/lib/actions/event.actions"

const MainPage = async () => {
  const events = await getAllEvents()
  console.log(events?.data)
  return<main className={clsx("container")}>55</main>
}

export default MainPage
