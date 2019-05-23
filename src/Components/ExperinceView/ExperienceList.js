
import React, { Component } from 'react';
import TourCard from "./ExperienceCard"

const TourExperinceList = props => {

    return (
        <div>
           { props.tours.map((tour,id)=> (
             <TourCard key={id} tour={tour} />
            ))}
</div>
    )

}






export default TourExperinceList