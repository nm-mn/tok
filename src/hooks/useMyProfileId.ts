import { useState } from 'react'

const useMyProfileId = () => {
  const [myProfileId, setMyProfileId] = useState("")

  return {
    myProfileId,
    setMyProfileId
  }
}

export default useMyProfileId