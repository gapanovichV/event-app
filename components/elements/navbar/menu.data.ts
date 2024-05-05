import { IMenuItem } from "@/components/elements/navbar/menu.interface"
import { RouteType } from "@/types/route"

export const menu: IMenuItem[] = [
  {
    name: "Home",
    link: RouteType.MAIN
  },
  {
    name: "Create Event",
    link: RouteType.CREATE_EVENT
  },
  {
    name: "My Profile",
    link: RouteType.PROFILE
  }
]
