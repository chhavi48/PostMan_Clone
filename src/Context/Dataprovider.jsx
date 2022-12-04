import React, { createContext, useState } from 'react'
export const dataContext=createContext(null)

const Dataprovider = ({children}) => {
    const [formdata,setformdata]=useState({url:"",type:'POST'})
  return (
     <dataContext.Provider value={{
        formdata,
        setformdata
      
     }}>
        {children}

     </dataContext.Provider>
  )
}

export default Dataprovider