import clsx from "clsx"
import styles from "@/styles/header/index.module.scss"
import Logo from "@/components/elements/Logo/Logo"
import NavLink from "@/components/elements/NavLink/NavLink"
import { RouteType } from "@/types/route"

interface HeaderProps {}

const Header = () => {
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx("container", styles.header__container)}>
        <Logo />
        <NavLink text={"Category"} />
      </div>
    </header>
  )
}

export default Header
