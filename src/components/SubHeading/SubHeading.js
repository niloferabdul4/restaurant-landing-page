import React from 'react'
import images from '../../constants/images'
const SubHeading = ({title}) => {
  return (
    <>
        <div style={{ marginBottom: '1rem' }}>
        <p className="p_cormorant">{title}</p>
        <img src={images.spoon} alt="spoon_image" className="spoon_img" />
  </div>
    </>
  )
}

export default SubHeading
