import React , {useEffect, useRef} from 'react'
import "./header.scss";
import { Link, NavLink } from 'react-router-dom';
import CustemInput from '../Custeminput/CustemInput';
const Header = () => {
    const nav__link = [
        {
            path: '/home',
            display : 'Trang chủ',
            // icon: <i class="mdi mdi-home fa-fw"></i>
        },
        {
            path: '/create-avata',
            display : 'Tạo avata',
            // icon: <i class="bi bi-person-circle"></i>
        },
        {
            path: '/create-frame',
            display : 'Tạo frame',
            // icon: <i class="bi bi-person-bounding-box"></i>
        },
        {
            path: '/contact',
            display : 'Contact',
            // icon: <i class="bi bi-telephone-fill"></i>
        },
        {
            path: '/login',
            display : 'Đăng nhập'
        }
    ]
    const headerRef = useRef(null);
    const stickyHeaderFunc = ()=>{
        window.addEventListener("scroll" , ()=>{
            if(document.body.scrollTop > 96  || document.documentElement.scrollTop > 96 ){
                headerRef.current?.classList.add('sticky__header');
            }else{
                headerRef.current?.classList.remove('sticky__header');
            }
        })
    }
    useEffect(()=>{
        stickyHeaderFunc()
        return window.removeEventListener('scroll' , stickyHeaderFunc)
    } , )
  return (
    <>
    <div className='container__header' ref={headerRef} >
        
        {/* Logo */}
        <div className='container__right'>
            <div className='logo__img'>
                <img src='/logo_hou.png' alt='sdeaew'/>
            </div>
        </div>
        
        {/* <ul className='container__left'>
            {
                nav__link.map(item =>{
                    return <li className='container__left-item'>
                                <NavLink to={item.path} >{item.display}</NavLink>
                            </li>
                })
            } */}
            {/* <li className='container__left-item'>
                <button>
                    <Link to='/register'>Đăng Ký</Link>
                </button>
            </li> */}
            {/* <li className='container__left-item'>
                <button >
                    <Link to='login'>Đăng Nhập</Link>
                </button>
            </li> */}
        {/* </ul> */}
        <p id='title'>TÊN TRANG WEB</p>

        <CustemInput 
            type="text" 
            className="search__input"
            placeholder="Tìm kiếm khung"
        />
        <NavLink id='login' to='/login'>Đăng nhập</NavLink>
    </div>

    </>
  )
}

export default Header