import Link from "next/link"
import { RouteType } from "@/types/route"
import clsx from "clsx"
import styles from "@/styles/nav-link/index.module.scss"

interface NavLinkProps {
  className?: string
  text: string
  href?: RouteType
}

const NavLink = ({className, text, href}: NavLinkProps) => {
  return (
    <Link className={clsx(styles.nav_link, className)} href={href || RouteType.MAIN}>
      {text}
    </Link>
  )
}

export default NavLink