import { useState } from 'react'

const useAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  return {
    isAuthenticated,
    setIsAuthenticated
  }
}

export default useAuthenticated
