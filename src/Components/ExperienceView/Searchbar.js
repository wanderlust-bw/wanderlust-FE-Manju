import React from "react"
import {Link} from "react-router-dom"
import "./view.css"


const SearchBar = props => {
    return(
        <div className="package">
          <div className="header">    
      <h1>Wanderlust</h1>
      </div>
      <div className="stuff">
      <input  className="searchbox" type="text" placeholder="Search" onKeyDown={props.searchToursHandler}/>
      <Link  className="together" to="/ExperienceView">ExperienceView</Link>
      <Link  className="together" to="/ExperienceProfile">ExperienceProfile</Link>
      <Link className="together" to="ProfilePage">ProfilePage</Link>
      </div>
        </div>
    )
}

export default SearchBar ;

