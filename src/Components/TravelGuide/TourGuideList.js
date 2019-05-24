import React from 'react'
import TourCard from '../TravelGuide/TourCard'

const TourGuideList = props => {
    return (
        <div className='guide-list'>
          {props.guides.map((guide,id) => (
            <TourCard key={id} guide={guide} delete={props.delete} />
          ))} 
        </div>
    )
}

export default TourGuideList;