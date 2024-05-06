import { Schema, Document, model, models } from "mongoose"

export interface IEvent {
  _id: string
  title: string
  description?: string
  location?: string
  imageUrl: string
  createdAt: Date
  startDate: Date
  endDate: Date
  price: string
  isFree: boolean
  categories: { _id: string; name: string }
}

const eventSchema = new Schema<IEvent>({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean },
  categories: { type: Schema.Types.ObjectId, ref: "Categories" }
})

const Event = models.Event || model("Event", eventSchema)

export default Event
