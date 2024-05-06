import * as z from "zod"

export const eventFormSchema = z.object({
  title: z.string().min(3, "Tittle must be more than 3 characters"),
  description: z
    .string()
    .min(3, "Description must be more than 3 characters")
    .max(500, "Description must be less than 500 characters"),
  location: z.string().min(3, "Location must be more than 3 characters"),
  imageUrl: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  price: z.string(),
  isFree: z.boolean()
})
