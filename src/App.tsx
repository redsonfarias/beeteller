import { Navbar } from './components/organisms/Navbar'

import styles from './App.module.css'

export function App() {
  return (
    <>
      <Navbar />
      <div className={styles.content}></div>
    </>
  )
}
