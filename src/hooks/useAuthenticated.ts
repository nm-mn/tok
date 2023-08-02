import { useState } from 'react'

const useAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return {
    isAuthenticated,
    setIsAuthenticated
  }
}

export default useAuthenticated
