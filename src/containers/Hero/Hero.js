import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import images from '../../constants/images'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className=" hero wrapper flex_center section_padding" id='hero'>    {/**** 3 classnames  ****/}  

            <div className="wrapper_info">
                <SubHeading title='Chase the new Flavour'/>
                <h1 className='hero_title'>The Key To Fine dining</h1>
                <p className='p_opensans'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
                <button type='button' className="custom_button">Explore More</button>
            </div>
            <div className="wrapper_image">
               <img src={images.welcome} alt='' />
            </div>

      </div>
    </>
  )
}

export default Hero
