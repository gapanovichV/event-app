import clsx from "clsx"
import styles from "@/styles/header/index.module.scss"
import Logo from "@/components/elements/Logo/Logo"
import Login from "@/components/elements/Login/Login"
import Navbar from "@/components/elements/navbar/Navbar"

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
