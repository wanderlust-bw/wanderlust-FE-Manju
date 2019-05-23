import React from "react"
import {Link} from "react-router-dom"


const SearchBar = props => {
    return(
        <div>
      <h1>Wanderlust</h1>
      <Link to="/ExperienceProfile">ExperienceProfile</Link>
      <Link to="ProfilePage">ProfilePage</Link>
      
        <input type="text" placeholder="Search" onKeyDown={props.searchToursHandler}/>
        </div>
    )
}

export default SearchBar ;

