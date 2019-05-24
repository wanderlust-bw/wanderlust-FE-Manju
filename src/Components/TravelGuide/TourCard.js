import React from 'react'
import './guide.css'

const TourCard = props => {
    return (
        <div className='guide-card'>

            <h3 className='title-name'><span className='guide-title'>Name :</span> {props.guide.title}</h3>
            <h3><span className='guide-locations'>Location :</span> {props.guide.location}</h3>
            <h3><span className='guide-about'>About :</span> {props.guide.description}</h3>
            <h3><span className='guide-tour-type'>Tour Type :</span> {props.guide.tourType}</h3>
            <button className='guide-buttons' onClick={e =>props.delete(e,props.tour.id)}>Delete</button>

        </div>
    )
}

export default TourCard