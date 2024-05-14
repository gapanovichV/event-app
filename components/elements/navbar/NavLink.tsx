"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

import type { IMenuItem } from "@/components/elements/navbar/menu.interface"
import { RouteEnum } from "@/types/route.interface"

import styles from "./Navbar.module.scss"

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
