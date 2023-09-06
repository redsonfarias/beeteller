import { AppContextProvider } from './contexts/AppContext'
import { Navbar } from './components/organisms/Navbar'
import { Home } from './pages/Home'

import styles from './App.module.css'

export function App() {
  return (
    <AppContextProvider>
      <Navbar />
      <div className={styles.content}>
        <Home />
      </div>
    </AppContextProvider>
  )
}
