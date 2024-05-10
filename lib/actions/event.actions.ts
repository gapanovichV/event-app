"use server"

import dbConnect from "@/lib/database/dbConnect"
import { ICreateEvent } from "@/types/event.actions.type"
import Event from "@/lib/database/models/event.nodel"
import { handleError } from "@/lib/utils"

export async function createEvent({ userId, event }: ICreateEvent) {
  try {
    await dbConnect()

    const newEvent = await Event.create({ ...event, userId })

    return JSON.parse(JSON.stringify(newEvent))
  } catch (error) {
    handleError(error)
  }
}
