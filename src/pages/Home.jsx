import React from 'react'
import "../styles/home.css"
import { Box } from '../components/Box/Box'
import data from '../data/User.json'
import CustemInput from '../components/Custeminput/CustemInput'
const Home = () => {
  return (
    <>
        {/* <CustemInput 
                type="text" 
                className="search__input"
                placeholder="Tìm kiếm khung"
                /> */}
        {/* Trang chu , generate avata , contact  */}
        
      <div className='container'>
        {data.map(user => <Box props={user}/>)}
    </div>
    </>
    
  )
}

export default Home