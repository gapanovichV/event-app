import clsx from "clsx"
import Link from "next/link"
import { RouteEnum } from "@/types/route.interface"
import style from "./Logo.module.scss"

interface LogoProps {
  className?: string
}
const Logo = ({ className }: LogoProps) => {
  return (
    <Link className={clsx(style.logo)} href={RouteEnum.MAIN}>
      Eventhard
    </Link>
  )
}

export default Logo
