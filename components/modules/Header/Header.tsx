import clsx from "clsx"
import styles from "@/styles/header/index.module.scss"
import Logo from "@/components/elements/Logo/Logo"
import NavLink from "@/components/elements/NavLink/NavLink"
import { RouteType } from "@/types/route"
import Login from "@/components/elements/Login/Login"

interface HeaderProps {}

const Header = () => {
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx("container", styles.header__container)}>
        <Logo />
        <nav className={clsx(styles.header__links)}>
          <NavLink text={"Home"} href={RouteType.MAIN} />
          <NavLink text={"Create Event"} href={RouteType.CREATE_EVENT} />
          <NavLink text={"My Profile"} href={RouteType.PROFILE} />
        </nav>
        <Login />
      </div>
    </header>
  )
}

export default Header
