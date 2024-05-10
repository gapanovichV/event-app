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
  path: string
}

export interface IUpdateEvent {
  userId: string
  event: {
    _id: string
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
  path: string
}

export interface IDeleteEvent {
  eventId: string
  path: string
}
