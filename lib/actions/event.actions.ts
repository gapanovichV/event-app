"use server"

import dbConnect from "@/lib/database/dbConnect"
import { ICreateEvent, IDeleteEvent, IUpdateEvent } from "@/types/event.actions.type"
import Event from "@/lib/database/models/event.nodel"
import { handleError } from "@/lib/utils"
import { revalidatePath } from "next/cache"

export async function createEvent({ userId, event, path }: ICreateEvent) {
  try {
    await dbConnect()
    const newEvent = await Event.create({...event })
    return JSON.parse(JSON.stringify(newEvent))
  } catch (error) {
    handleError(error)
  }
}

export async function getEventById(eventId: string ) {
  try {
    await dbConnect()
    const event = await Event.findById(eventId)
    if (!event) throw new Error(`Event not found`)
    return JSON.parse(JSON.stringify(event))
  } catch (error) {
    handleError(error)
  }
}

export async function updateEvent({ userId, event, path }: IUpdateEvent) {
  try {
    await dbConnect()
    const eventToUpdate = await Event.findById(event._id)
    if (!eventToUpdate) throw new Error("Event not found")

    const updateEvent = await Event.findByIdAndUpdate(event._id, {...event}, {new: true})
    return JSON.parse(JSON.stringify(updateEvent))
  } catch (error) {
    handleError(error)
  }
}

export async function deleteEvent({ eventId, path }: IDeleteEvent) {
  try {
    await dbConnect()
    const deletedEvent = await Event.findByIdAndDelete(eventId)
    if (deletedEvent) revalidatePath(path)
  } catch (error) {
    handleError(error)
  }
}

export async function getAllEvents() {
  try {
    await dbConnect()
    const events = await Event.find()
    return {
      data: JSON.parse(JSON.stringify(events))
    }
  } catch (error) {
    handleError(error)
  }
}