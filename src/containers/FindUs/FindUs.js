import React from 'react'
import { images } from '../../constants'
import SubHeading from '../../components/SubHeading/SubHeading'
import './FindUs.css'
const FindUs = () => {
    return (

        <>
            <div className="findUs wrapper flex_center section_padding" id='findus'>    {/**** 3 classnames  ****/}

                <div className="wrapper_info">
                    <SubHeading title="Contact" />
                    <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
                    <div className="findUs_content">
                        <p className='p_opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                        <div className="timings">
                        <p className="p_cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
                        <p className="p_opensans" >Mon - Fri: 10:00 am - 02:00 am</p>
                        <p className="p_opensans">Sat - Sun: 10:00 am - 03:00 am</p>
                        </div>
                        <button className='custom_button'>Visit Us</button>
                    </div>
                </div>
                <div className="wrapper_image">
                    <img src={images.findus} alt='findus' />
                </div>
            </div>
        </>
    )
}

export default FindUs
