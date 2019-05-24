import React from "react"
import "./view.css"

const TourCard = props =>{
    return (
        <div className="card">
            <h1>{props.tour.id}</h1>
            <h3>{props.tour.title}</h3>
            <h3>{props.tour.location}</h3>
            <h3>{props.tour.description}</h3>
            <button onClick={e =>props.delete(e,props.tour.id)}>Delete</button>
           
        </div>
    )
}

export default TourCard ;