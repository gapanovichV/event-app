import { model, models, Schema } from "mongoose"

export interface ICategories {
  _id: string
  name: string
}

const categoriesSchema = new Schema<ICategories>({
  name: { type: String, required: true, unique: true }
})

const Categories = models.Categories || model("Categories", categoriesSchema)

export default Categories
