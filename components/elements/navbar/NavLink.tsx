"use client"

import Link from "next/link"
import { RouteEnum } from "@/types/route.interface"
import clsx from "clsx"
import styles from "./Navbar.module.scss"
import { IMenuItem } from "@/components/elements/navbar/menu.interface"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  item: IMenuItem
}

const NavLink = ({ item }: NavLinkProps) => {
  const pathname = usePathname()

  return (
    <Link
      className={clsx(styles.nav_link, pathname === item.link ? styles.nav_link__selected : "")}
      href={item.link || RouteEnum.MAIN}
    >
      {item.name}
    </Link>
  )
}

export default NavLink
