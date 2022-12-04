import React from 'react'
import { makeStyles } from '@mui/styles';
const useStyles=makeStyles({
    logo:{
        width:200,
    }
})
const Home = () => {
    const classses=useStyles()
    const logo="https://cdn.shopify.com/s/files/1/0057/5668/2355/files/Postman-logo-orange-2021_1155x.png?v=1637252529";
  return (
    <div>
        <img src={logo} alt='logo' className={classses.logo}/>
    </div>
  )
}

export default Home