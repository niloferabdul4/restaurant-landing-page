import React from 'react'
import { images } from '../../constants'
import SubHeading from '../../components/SubHeading/SubHeading'
import './Chef.css'

const Chef = () => {
    return (
        <>
            <div className="chef wrapper flex_center section_padding" id='chef'>    {/**** 3 classnames  ****/}
                <div className="wrapper_image_reverse">
                    <img src={images.chef} alt='chef-image' />
                </div>
                <div className="wrapper_info">
                    <SubHeading title="Chef's Word" />
                    <h1 className="headtext__cormorant">What we believe in</h1>

                    <div className="chef_content">
                        <div className="chef_quote">
                            <img src={images.quote} alt="quote_image" />
                            <p className="p_opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
                        </div>
                        <p className="p_opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>                       
                    </div>

                    <div className="chef_sign">
                        <p>Kevin Lau</p>
                        <p className='p_opensans'>Chef & Founder</p>
                        <img src={images.sign} alt="sign_image" />
                    </div>

                </div>
            </div>
        </>

    )
}

export default Chef
