import Link from "next/link"
import { RouteType } from "@/types/route"

const Login = () => {
  return <Link href={RouteType.SIGN_IN}>Sign-in</Link>
}

export default Login
