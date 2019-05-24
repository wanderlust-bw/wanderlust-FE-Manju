import React from 'react'



const TourCard = props => {
    return (

     <div>  

        {/* <div className='icon-top'>
        <i id='map' className="fas fa-map"></i>
        </div> */}
        <div className='guide-card'>
            <h3 className='title-name'>Name <span id='a'>{props.guide.title}</span></h3>
            <h3 className='guide-locations'>Location <span id='b'>{props.guide.location}</span></h3>
            <h3 className='guide-locations'> Description <span id='c'>{props.guide.description}</span></h3>
            <h3 className='guide-locations'>Tour Type <span id='d'>{props.guide.tourType}</span></h3>
            <div className='button-div'>
            <button id='guide-update' className='guide-buttons' onClick={e =>props.update(e,props.guide.id)}>Update</button>
            <button id='guide-delete' className='guide-buttons' onClick={e =>props.delete(e,props.guide.id)}>Delete</button>
            </div>
        </div>

      </div>  
    )
}

export default TourCard