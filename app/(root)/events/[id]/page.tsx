import { getEventById } from "@/lib/actions/event.actions"

interface EventDetailProps {
  params: { id: string }
}

const EventDetail = async ({ params: { id } }: EventDetailProps) => {
  const event = await getEventById(id)
  return <div>EVENT DETAILS</div>
}

export default EventDetail
