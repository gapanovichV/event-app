import clsx from "clsx"

import Login from "@/components/elements/login/Login"
import Logo from "@/components/elements/logo/Logo"
import Navbar from "@/components/elements/navbar/Navbar"

import styles from "./Header.module.scss"

interface HeaderProps {}
const Header = () => {
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx("container", styles.header__container)}>
        <Logo />
        <Navbar />
        <Login />
      </div>
    </header>
  )
}

export default Header
