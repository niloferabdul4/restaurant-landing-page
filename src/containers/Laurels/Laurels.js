import React from 'react'
import './Laurels.css'
import { images } from '../../constants'
import { data } from '../../constants'
import SubHeading from '../../components/SubHeading/SubHeading'
const Laurels = () => {
    return (
        <div className='laurels wrapper flex_center section_padding'>
            <div className="wrapper_info">
                <SubHeading title='Awards & recognition' />
                <h1 className="headtext__cormorant">Our Laurels</h1>
                <div className="awards">
                    {data.awards.map((item, index) => {
                        return <>
                            <div key={index} className="awards_card">
                                <div className="awards_logo">
                                    <img src={item.imgUrl} alt='awards_logo' />
                                </div>
                                <div className="awards_info">
                                    <p className='p_cormorant' style={{ color: '#DCCA87' }}>{item.title}</p>
                                    <p className='p_opensans'>{item.subtitle}</p>
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
            <div className="wrapper_image">
                <img src={images.laurels} alt='laurels' />
            </div>
        </div>
    )
}

export default Laurels
