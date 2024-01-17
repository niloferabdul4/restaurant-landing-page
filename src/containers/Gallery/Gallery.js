import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import { images } from '../../constants'
import './Gallery.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from './settings'

const Gallery = () => {

  return (
    <div className='gallery wrapper section_padding ' id='gallery'>
       <div className="gallery_info">
           <SubHeading title='Instagram' />
           <h1 className="headtext__cormorant">Photo Gallery</h1>
           <p className='p_opensans'  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
           <button className='custom_button'>View more</button>
       </div>
       <div className="gallery_images">
       <Slider {...settings}>
            <div className="image">
                  <img className='image' src={images.gallery01} alt='gallery1'  />
            </div>
            <div className="image">
                  <img className='image' src={images.gallery02} alt='gallery2'  />
            </div>
            <div className="image">
                  <img className='image' src={images.gallery03} alt='gallery3'  />
            </div>
           
            <div className="image">
                  <img className='image' src={images.gallery04} alt='gallery4'  />
            </div>
           
            <div className="image">
                  <img className='image' src={images.gallery03} alt='gallery5'  />
            </div>
           
            <div className="image">
                  <img className='image' src={images.gallery01} alt='gallery6'  />
            </div>
           
            <div className="image">
                  <img className='image' src={images.gallery02} alt='gallery7'  />
            </div>
        
       </Slider>
       </div>
    </div>
  )
}

export default Gallery
