import { useState } from 'react'

const useMyProfile = () => {
  const [email, setEmail] = useState("");

  return {
    email,
    setEmail
  }
}

export default useMyProfile