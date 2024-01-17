import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import { data } from '../../constants'
import {images} from '../../constants'
import './SpecialMenu.css'
const SpecialMenu = () => {
  return (
  
      <div className="menu flex_center wrapper section_padding">
            <div className="menu_title">
                    <SubHeading title="Menu that fits your palatte" />
                    <h1 className="headtext__cormorant">Today's Special</h1>
            </div>
     
          <div className="menu_content ">
            <div className="menu_content_left p_cormorant">
               <h2 className="subTitle">Wine & Beer</h2>
             
                  {data.wines.map(item=>{return <>
                    <div className="menu_items  ">
                    <span style={{width:'100%',display:'flex' ,alignItems:'center',margin:'0.5em 0em',justifyContent:'space-between'}}>
                      <p className='menu_items_title p_cormorant' >{item.title}</p>
                      <div className="menuitem-dash" />
                      <p>{item.price}</p>
                  </span>
                  <small style={{fontWeight:'300'}} >{item.tags}</small>
                 </div>
                  </>})}
               
            </div>


            <div className="menu_image">
                <img src={images.menu} alt="menu"  />
            </div>


            <div className="menu_content_right  p_cormorant ">
               <h2 className="subTitle">Cocktails</h2>
               {data.cocktails.map(item=>{return <>
                    <div className="menu_items   ">
                    <span style={{width:'100%',display:'flex' ,alignItems:'center',margin:'0.5em 0em',justifyContent:'space-between'}}>
                      <p className='menu_items_title p_cormorant' >{item.title}</p>
                      <div className="menuitem-dash" />
                      <p>{item.price}</p>
                  </span>
                  <small style={{fontWeight:'300'}} >{item.tags}</small>
                 </div>
                  </>})}
            </div>


          </div>
          <button className="custom_button">View More</button>
      </div>

  )
}

export default SpecialMenu
