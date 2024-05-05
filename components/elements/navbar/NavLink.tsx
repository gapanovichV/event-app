import Link from "next/link"
import { RouteType } from "@/types/route"
import clsx from "clsx"
import styles from "./Navbar.module.scss"
import { IMenuItem } from "@/components/elements/navbar/menu.interface"

interface NavLinkProps {
  item: IMenuItem
}

const NavLink = ({ item }: NavLinkProps) => {
  return (
    <Link className={clsx(styles.nav_link)} href={item.link || RouteType.MAIN}>
      {item.name}
    </Link>
  )
}

export default NavLink
