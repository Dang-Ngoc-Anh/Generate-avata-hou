import React from 'react'
import './box.css'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios';
export const Box = ({props}) => {
  const {
    id, userId,name , image , description ,createdAt
  } =  props;

  const navigate = useNavigate();
  
  const handleClick = (e)=>{
    e.preventDefault();
    navigate(`/create-avata/${id}`)
  }
  return (
    <div className='item'>
        <div className='img__box'>
            <img src={`http://localhost:4000/${image}`} alt='load img err'></img>
        </div>
        <div className='user__infor'>
            <p>Họ tên : {userId}</p>
            <p>Name: {name}</p>
            <p>description: {description}</p>
            <p>Ngày đăng : {createdAt}</p>
        </div>
            <button className='btn-test' onClick={handleClick}>
                {/* <Link to={`/create-avata${id}`} onClick={handleClick}>Lấy mẫu</Link> */}
                Lấy mẫu
            </button>
    </div>
  )
}
