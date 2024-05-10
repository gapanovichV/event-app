export interface ICreateEvent {
  userId: string
  event: {
    title: string
    description?: string
    location?: string
    imageUrl: string
    startDate: Date
    endDate: Date
    price: string
    isFree: boolean
    categoriesId: string
  }
}
