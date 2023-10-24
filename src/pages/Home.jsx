import React, { useEffect, useState } from 'react'
import "../styles/home.css"
import { Box } from '../components/Box/Box'
// import data from '../data/User.json'
import CustemInput from '../components/Custeminput/CustemInput'
import axios from 'axios'
const Home = () => {
  const [frame , setFrame] = useState([]);
  const [loading , setLoading] = useState(false);
  const url = "http://localhost:4000/api/v1/frame/upload";
 useEffect(()=>{
  axios
        .get(url)
        .then((res) => {
            setFrame(res.data.data)
        })
        .catch(err => {alert(err)});
 } ,[])

  return (
    <>
        {/* <CustemInput 
                type="text" 
                className="search__input"
                placeholder="Tìm kiếm khung"
                /> */}
        {/* Trang chu , generate avata , contact  */}
        
      <div className='container'>
        {frame.map(user => <Box props={user}/>) }
    </div>
    </>
    
  )
}

export default Home