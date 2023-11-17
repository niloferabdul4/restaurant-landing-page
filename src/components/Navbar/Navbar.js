import React from 'react'
import { Link } from 'react-router-dom'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const Navbar = () => {
    const nav_links=[{id:1,title:'Home',path:'#home'},
                    {id:2,title:'About',path:'#about'},  
                    {id:3,title:'Menu',path:'#menu'},
                    {id:4,title:'Awards',path:'#awards'},
                    {id:3,title:'Contact',path:'#contact'}
]

  return (
    <div>
     <div className="navbar">
        <div className="logo">            
           <RestaurantMenuIcon />
        </div>
        <ul>
            {nav_links.map((item,index)=>{return <>
            <Link to={item.path} key={index}>{item.title}</Link>
            </>})}
        </ul>
     </div>
    </div>
  )
}

export default Navbar
