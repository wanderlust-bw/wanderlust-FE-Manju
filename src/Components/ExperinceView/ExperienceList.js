
import React, { Component } from 'react';
import TourCard from "./ExperienceCard"
import "./view.css"

const TourExperinceList = props => {

    return (
        <div className="cardlist">
           { props.tours.map((tour,id)=> (
             <TourCard key={id} tour={tour} delete={props.delete} />
            
            ))}
           
</div>
    )

}






export default TourExperinceList