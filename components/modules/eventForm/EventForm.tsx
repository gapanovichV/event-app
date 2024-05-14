"use client"

import React, { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { router } from "next/client"
import type { z } from "zod"

import ErrorMassage from "@/components/elements/formField/errorMassage"
import FileUploader from "@/components/elements/formField/fileUploader"
import FormField from "@/components/elements/formField/formField"
import Input from "@/components/elements/formField/input"
import Label from "@/components/elements/formField/label"
import TextArea from "@/components/elements/formField/textArea"
import { EventDefaultValue } from "@/components/modules/eventForm/eventForm.data"
import { createEvent, updateEvent } from "@/lib/actions/event.actions"
import type { IEvent } from "@/lib/database/models/event.nodel"
import { handleError } from "@/lib/utils"
import { eventFormSchema } from "@/types/z.types"

interface EventFormProps {
  type: "Create" | "Update"
  eventId?: string
  event?: IEvent
  userId?: string
}

export type FormScheme = z.infer<typeof eventFormSchema>

const EventForm = ({ type, event, userId, eventId }: EventFormProps) => {
  const [files, setFiles] = useState<string>(event?.imageUrl || "")
  const initialValues =
    event && type === "Update"
      ? { ...event, startDate: new Date(event.startDate), endDate: new Date(event.endDate) }
      : EventDefaultValue

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<FormScheme>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initialValues
  })

  const onSubmit: SubmitHandler<FormScheme> = async (data) => {
    if (type === "Create") {
      try {
        const newEvent = await createEvent({
          event: {
            ...data,
            imageUrl: files,
            categoriesId: ""
          },
          path: "/"
        })
        if (newEvent) {
          reset()
          setFiles("")
        }
      } catch (error) {
        handleError(error)
      }
    }
    if (type === "Update") {
      if (!eventId) {
        router.back()
        return
      }
      try {
        const updatedEvent = await updateEvent({
          event: {
            ...data,
            imageUrl: files,
            categoriesId: "",
            _id: eventId
          },
          path: `/events/${eventId}`
        })
        if (updatedEvent) {
          reset()
          setFiles("")
        }
      } catch (error) {
        handleError(error)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <Label>Title:</Label>
        <Input type="text" register={register} name="title" />
        <ErrorMassage error={errors.title} />
      </FormField>
      <FormField>
        <FileUploader imageUrl={files} setFile={setFiles} />
      </FormField>
      <FormField>
        <Label>Description:</Label>
        <TextArea register={register} name="description" />
        <ErrorMassage error={errors.description} />
      </FormField>
      <FormField>
        <Label>Price:</Label>
        <Input type="text" register={register} name="price" />
        <ErrorMassage error={errors.price} />
      </FormField>
      <FormField>
        <Label>Location:</Label>
        <Input type="text" register={register} name="location" />
        <ErrorMassage error={errors.location} />
      </FormField>

      <button type="submit">Submit</button>
    </form>
  )
}

export default EventForm
