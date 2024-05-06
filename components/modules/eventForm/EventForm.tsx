"use client"

import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { IEvent } from "@/lib/database/models/event.nodel"
import { EventDefaultValue } from "@/components/modules/eventForm/eventForm.data"
import { eventFormSchema } from "@/types/z.types"
import { zodResolver } from "@hookform/resolvers/zod"
import FormField from "@/components/elements/input/FormField"

interface EventFormProps {
  type: "Create" | "Update"
  eventId?: string
  event?: IEvent
}

export type FormScheme = z.infer<typeof eventFormSchema>

const EventForm = ({ type, event }: EventFormProps) => {
  const initialValues =
    event && type === "Update"
      ? { ...event, startDate: new Date(event.startDate), endDate: new Date(event.endDate) }
      : EventDefaultValue

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormScheme>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initialValues
  })

  const onSubmit: SubmitHandler<FormScheme> = async (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        name={"title"}
        placeholder={"Title..."}
        register={register}
        error={errors.title}
        type={"text"}
        label={"Title:"}
      />
      <FormField
        type={"text"}
        label={"Description:"}
        register={register}
        error={errors.description}
        name={"description"}
        placeholder={"Description..."}
      />
      <FormField
        type={"text"}
        label={"Location:"}
        register={register}
        error={errors.location}
        name={"location"}
        placeholder={"Location..."}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default EventForm
