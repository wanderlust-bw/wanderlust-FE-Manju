import React from "react"

const TourCard = props =>{
    return (
        <div>
            <h1>Hello</h1>
            <h1>{props.tour.id}</h1>
            <h3>{props.tour.title}</h3>
            <h3>{props.tour.description}</h3>
            <h3>{props.tour.location}</h3>
           
        </div>
    )
}

export default TourCard ;