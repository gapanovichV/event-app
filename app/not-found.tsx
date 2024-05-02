import clsx from "clsx"
import styles from "@/styles/not-found/index.module.scss"

const NotFound = () => {
  return (
    <main className={clsx("container")}>
      <section className={clsx(styles.not_found)}>404</section>
    </main>
  )
}

export default NotFound
