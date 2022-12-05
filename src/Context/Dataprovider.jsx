import React, { createContext, useState } from 'react'
export const dataContext=createContext(null)

const Dataprovider = ({children}) => {
    const [formdata,setformdata]=useState({url:"",type:'POST'})
    const [paramdata,setparamdata]=useState([])
    const [headerdata,setheaderdata]=useState([])
  return (
     <dataContext.Provider value={{
        formdata,
        setformdata,
        paramdata,
        setparamdata,
        headerdata,
        setheaderdata



      
     }}>
        {children}

     </dataContext.Provider>
  )
}

export default Dataprovider