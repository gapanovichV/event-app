import { IMenuItem } from "@/components/elements/navbar/menu.interface"
import { RouteEnum } from "@/types/route.interface"

export const menu: IMenuItem[] = [
  {
    name: "Home",
    link: RouteEnum.MAIN
  },
  {
    name: "Create Event",
    link: RouteEnum.CREATE_EVENT
  },
  {
    name: "My Profile",
    link: RouteEnum.PROFILE
  }
]
