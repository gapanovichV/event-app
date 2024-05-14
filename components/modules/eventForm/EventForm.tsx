"use client"

import React, { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { router } from "next/client"
import type { z } from "zod"

import FileUploader from "@/components/elements/formField/fileUploader"
import FormField from "@/components/elements/formField/formField"
import Input from "@/components/elements/formField/input"
import { EventDefaultValue } from "@/components/modules/eventForm/eventForm.data"
import { createEvent, updateEvent } from "@/lib/actions/event.actions"
import type { IEvent } from "@/lib/database/models/event.nodel"
import { handleError } from "@/lib/utils"
import { eventFormSchema } from "@/types/z.types"
import { useUploadThing } from "@/lib/uploadthing"

interface EventFormProps {
  type: "Create" | "Update"
  eventId?: string
  event?: IEvent
  userId?: string
}

export type FormScheme = z.infer<typeof eventFormSchema>

const EventForm = ({ type, event, userId, eventId }: EventFormProps) => {
  const [files, setFiles] = useState<File[]>([])
  const initialValues =
    event && type === "Update"
      ? { ...event, startDate: new Date(event.startDate), endDate: new Date(event.endDate) }
      : EventDefaultValue

  const { startUpload } = useUploadThing("imageUploader")

  const form = useForm<FormScheme>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initialValues
  })

  const onSubmit: SubmitHandler<FormScheme> = async (data) => {
    console.log(data)

    let uploadedImageUrl = data.imageUrl

    if (files.length > 0) {
      const uploadedImages = await startUpload(files)

      if (!uploadedImages) {
        return
      }

      uploadedImageUrl = uploadedImages[0].url
    }

    if (type === "Create") {
      try {
        const newEvent = await createEvent({
          event: {
            ...data,
            imageUrl: uploadedImageUrl,
            categoriesId: ""
          },
          path: "/"
        })
        if (newEvent) {
          form.reset()
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
            imageUrl: uploadedImageUrl,
            categoriesId: "",
            _id: eventId
          },
          path: `/events/${eventId}`
        })
        if (updatedEvent) {
          form.reset()
        }
      } catch (error) {
        handleError(error)
      }
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FormField>
        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Input
                {...field}
                label="Title:"
                placeholder="Title..."
                type="text"
                {...(fieldState.error && { error: fieldState.error.message })}
              />
            </>
          )}
        />
      </FormField>
      <FormField>
        <Controller
          name="imageUrl"
          control={form.control}
          render={({ field, fieldState }) => (
            <FileUploader
              {...field}
              imageUrl={field.value}
              setFiles={setFiles}
              onFieldChange={field.onChange}
              {...(fieldState.error && { error: fieldState.error.message })}
            />
          )}
        />
      </FormField>
      <FormField>
        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Input
                {...field}
                label="description:"
                placeholder="description..."
                component="textarea"
                type="text"
                {...(fieldState.error && { error: fieldState.error.message })}
              />
            </>
          )}
        />
      </FormField>
      <FormField>
        <Controller
          name="price"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Input
                {...field}
                label="price:"
                placeholder="price..."
                type="text"
                {...(fieldState.error && { error: fieldState.error.message })}
              />
            </>
          )}
        />
      </FormField>
      <FormField>
        <Controller
          name="location"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Input
                {...field}
                label="location:"
                placeholder="location..."
                type="text"
                {...(fieldState.error && { error: fieldState.error.message })}
              />
            </>
          )}
        />
      </FormField>

      <button type="submit">Submit</button>
    </form>
  )
}

export default EventForm
