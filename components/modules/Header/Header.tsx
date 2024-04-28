import clsx from "clsx"
import styles from "@/styles/header/index.module.scss"
import Logo from "@/components/elements/Logo/Logo"

interface HeaderProps {}

const Header = () => {
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx("container", styles.header__container)}>
        <Logo />
      </div>
    </header>
  )
}

export default Header
