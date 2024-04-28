import clsx from "clsx"
import styles from "@/styles/header/index.module.scss"
import Logo from "@/components/elements/Logo/Logo"

interface HeaderProps {}

const Header = () => {
  return (
    <header className={clsx(styles.header)}>
      <Logo />
    </header>
  )
}

export default Header
