import Link from "next/link"
import clsx from "clsx"
import { RouteEnum } from "@/types/route.interface"
import styles from "./Login.module.scss"

const Login = () => {
  return (
    <div className={clsx(styles.login)}>
        <Link href={RouteEnum.SIGN_IN}>Login</Link>
    </div>
  )
}

export default Login
