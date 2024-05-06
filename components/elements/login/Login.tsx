"use client"

import Link from "next/link"
import clsx from "clsx"
import { RouteEnum } from "@/types/route.interface"
import { SignedOut, SignedIn } from "@clerk/clerk-react"
import styles from "./Login.module.scss"
const Login = () => {
  return (
    <div className={clsx(styles.login)}>
      <SignedOut>
        <Link href={RouteEnum.SIGN_IN}>Login</Link>
      </SignedOut>
      <SignedIn>Profile</SignedIn>
    </div>
  )
}

export default Login
