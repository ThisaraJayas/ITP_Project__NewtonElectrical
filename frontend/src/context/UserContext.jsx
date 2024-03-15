import React, { createContext, useState } from 'react'

export const UserContext = createContext({})

export default function UseContextProvider({children}) {
    const [userData, setUserData] = useState(null)

  return (
    <UserContext.Provider value={{userData,setUserData}}>
        {childrens}
    </UserContext.Provider>
  )
}
