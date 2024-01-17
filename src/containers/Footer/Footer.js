import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="footer wrapper flex_center section_padding">
                <div className="newsletter flex_center">
                    <SubHeading title='NewsLetter' />
                    <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
                    <p className='footer_text'>And never miss latest Updates!</p>
                    <span style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                        <input className='input' type='text' placeholder='Email Address' />
                        <button className='custom_button'>Subscribe</button>
                    </span>
                </div>
                <div className="footer_bottom">
                    <div className="footer_contact flex_center">
                        <p className='p_cormorant footer_subHeading'>Contact Us</p>
                        <p className='footer_text' >9 W 53rd St, New York, NY 10019, USA</p>
                        <p className='footer_text' >+1 212-344-1230 +1 212-555-1230</p>
                    </div>
                    <div className="footer_center">
                        <p className='footer_text'>2021 Gericht. All Rights reserved.</p>
                        <div className="social_icons flex_center">
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                        </div>
                    </div>

                    <div className="footer_workhours flex_center">
                        <p className='p_cormorant footer_subHeading'>Working Hours</p>
                        <p className='footer_text'>Monday-Friday: 08:00 am -12:00 am</p>
                        <p className='footer_text'>Saturday-Sunday: 07:00am -11:00 pm</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
