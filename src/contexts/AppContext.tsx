import { ReactNode, createContext, useState } from 'react'

interface AppContextProps {
  children: ReactNode
}

interface IAppContext {
  isLoading: boolean
  finishLoading: () => void
}

export const AppContext = createContext({} as IAppContext)

export function AppContextProvider({ children }: AppContextProps) {
  const [isLoading, setIsLoading] = useState(true)

  function finishLoading() {
    setIsLoading(false)
  }

  const contextValue = {
    isLoading,
    finishLoading
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
