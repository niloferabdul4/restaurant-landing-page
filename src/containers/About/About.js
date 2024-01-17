import React from 'react'
import './About.css'
import images from '../../constants/images'
const About = () => {
  return (
    <div className='about wrapper section_padding  flex_center app_bg' id='about'>
      <div className="about_overlay flex_center">
        <img src={images.G}  alt='g-letter' />
      </div>
      <div className="about_content flex_center">
      <div className="about_left">
           <h1 className='headtext__cormorant'>About Us </h1>
           <img src={images.spoon} className='spoon_img' alt='spoon' />
           <p className="p_opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
           <button className="custom_button">Know More</button>
      </div>
    <div className="about_knife_image">
        <img src={images.knife} alt='knife' />
    </div>
      <div className="about_right">
      <h1  className='headtext__cormorant'>Our History </h1>
           <img src={images.spoon} className='spoon_img' alt='spoon' />
           <p className="p_opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
           <button className="custom_button">Know More</button>
      </div>
    </div>
    </div>
  )
}

export default About
