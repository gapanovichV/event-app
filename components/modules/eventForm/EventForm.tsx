"use client"

import React, { useState } from "react"
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { IEvent } from "@/lib/database/models/event.nodel"
import { EventDefaultValue } from "@/components/modules/eventForm/eventForm.data"
import { eventFormSchema } from "@/types/z.types"
import { zodResolver } from "@hookform/resolvers/zod"
import FormField from "@/components/elements/formField/formField"
import Label from "@/components/elements/formField/label"
import Input from "@/components/elements/formField/input"
import ErrorMassage from "@/components/elements/formField/errorMassage"
import FileUploader from "@/components/elements/formField/fileUploader"
import TextArea from "@/components/elements/formField/textArea"
import { createEvent } from "@/lib/actions/event.actions"
import { router } from "next/client"

interface EventFormProps {
  type: "Create" | "Update"
  eventId?: string
  event?: IEvent
  userId: any
}

export type FormScheme = z.infer<typeof eventFormSchema>

const EventForm = ({ type, event, userId }: EventFormProps) => {
  const [files, setFiles] = useState<string>(event?.imageUrl || "")
  const initialValues =
    event && type === "Update"
      ? { ...event, startDate: new Date(event.startDate), endDate: new Date(event.endDate) }
      : EventDefaultValue

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormScheme>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initialValues
  })

  const onSubmit: SubmitHandler<FormScheme> = async (data) => {
    console.log("@data", data)
    console.log("@type: ", type)

    if (type === "Create") {
      console.log("@newEvent")
      try {
        console.log("@TRY")
        const newEvent = await createEvent({
          event: {
            ...data,
            imageUrl: files,
            categoriesId: ""
          },
          userId
        })

        console.log("@newEvent", newEvent)
        if (newEvent) {
          reset()
          setFiles("")
        }
      } catch (e) {
        console.log(e)
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
