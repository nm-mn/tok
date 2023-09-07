import { useState } from 'react'

const useMyProfile = () => {
  const [myProfileId, setMyProfileId] = useState("");
  const [email, setEmail] = useState("");

  return {
    myProfileId,
    email,
    setMyProfileId,
    setEmail
  }
}

export default useMyProfile