export interface ICreateEvent {
  event: {
    title: string
    description?: string
    location?: string
    imageUrl: string
    createdAt: Date
    startDate: Date
    endDate: Date
    price: string
    isFree: boolean
    categoriesId: string
  }
}
