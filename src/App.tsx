import { Navbar } from './components/organisms/Navbar'
import { Home } from './pages/Home'

import styles from './App.module.css'

export function App() {
  return (
    <>
      <Navbar />
      <div className={styles.content}>
        <Home />
      </div>
    </>
  )
}
