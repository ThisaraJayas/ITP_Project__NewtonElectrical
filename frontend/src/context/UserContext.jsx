import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext({})

export default function UseContextProvider({children}) {
    const [userData, setUserData] = useState(()=>{
      const storedUserData = localStorage.getItem('userData')
      return storedUserData ? JSON.parse(storedUserData):null;
    })
    useEffect(()=>{
      localStorage.setItem('userData',JSON.stringify(userData))
    },[userData])
    

  return (
    <UserContext.Provider value={{userData,setUserData}}>
        {children}
    </UserContext.Provider>
  )
}
