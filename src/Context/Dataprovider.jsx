import React, { createContext, useState } from 'react'
export const dataContext=createContext(null)

const Dataprovider = ({children}) => {
    const [formdata,setformdata]=useState({url:"",type:'POST'})
    const [paramdata,setparamdata]=useState([])
    const [headerdata,setheaderdata]=useState([])
    const [jsonText,setjsontext]=useState("")
  return (
     <dataContext.Provider value={{
        formdata,
        setformdata,
        paramdata,
        setparamdata,
        headerdata,
        setheaderdata,
        jsonText,
        setjsontext




      
     }}>
        {children}

     </dataContext.Provider>
  )
}

export default Dataprovider