import clsx from "clsx"
import styles from "./Navbar.module.scss"
import { menu } from "@/components/elements/navbar/menu.data"
import NavLink from "@/components/elements/navbar/NavLink"

const Navbar = () => {
  return (
    <nav className={clsx(styles.navbar)}>
      {menu.map((item) => (
        <NavLink item={item} key={item.name} />
      ))}
    </nav>
  )
}

export default Navbar
