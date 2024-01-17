import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import './Navbar.css'
import images from '../../constants/images';
const Navbar = () => {
   const [toggleMenu,setToggleMenu]=useState(false)
    const nav_links=[{id:1,title:'Home',path:'#home'},
                    {id:2,title:'About',path:'#about'},  
                    {id:3,title:'Menu',path:'#menu'},
                    {id:4,title:'Awards',path:'#awards'},
                    {id:3,title:'Contact',path:'#contact'}
]

  return (
    <>
     <div className="navbar">
      <div className="navbar_wrapper">
        <div className="logo">            
          <img src={images.rest_logo}  alt='logo' />
        </div>
        <ul className='nav_links'>
            {nav_links.map((item,index)=>{return <>
              <li className='p_opensans' key={index}><a href={item.path}>{item.title} </a></li>
           
            </>})}
        </ul>
        <div className="nav_login">
          <li className='p_opensans'><a href='/login'>Login/Register </a></li>
          <div className='nav_divider' />
          <li className='p_opensans'><a href='/bookTable'>Book Table </a></li>
        </div>
       <div className="nav_smallscreen">
             <MenuIcon style={{ color: '#fff9c4' }} onClick={()=>{setToggleMenu(true)}}/>
             {toggleMenu && (<div className="nav_smallscreen_overlay flex__center slide-bottom">
                 <RestaurantMenuIcon className='close_overlay'  onClick={()=>{setToggleMenu(false)}} />
                 <ul className='nav_smallscreen_links'>
                    {nav_links.map((item,index)=>{return <>
                      <li className='p__opensans' key={index} onClick={()=>{setToggleMenu(false)}} ><a href={item.path}>{item.title} </a></li>
                  
                    </>})}
                </ul>
             </div>
             )}
       </div>
     </div>
     </div>
    </>
  )
}

export default Navbar
