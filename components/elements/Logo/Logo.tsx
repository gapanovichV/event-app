import clsx from "clsx"
import Link from "next/link"
import { RouteType } from "@/types/route"
import style from "@/styles/logo/logo.module.scss"

interface LogoProps {
  className?: string
}
const Logo = ({className}: LogoProps) => {
  return (
    <Link className={clsx(style.logo)} href={RouteType.MAIN}>
      Eventhard
    </Link>
  )
}

export default Logo
