import dbConnect from "@/lib/database/dbConnect"
import { ICreateEvent } from "@/types/event.actions.type"
import Event from "@/lib/database/models/event.nodel"

export const createEvent = async ({ event, userId }: ICreateEvent) => {
  try {
    await dbConnect()
    const newEvent = await Event.create({ ...event })
    return JSON.parse(JSON.stringify(newEvent))
  } catch (error) {
    console.error("@createEvent", error)
  }
}
