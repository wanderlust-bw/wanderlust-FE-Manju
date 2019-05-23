import React from "react"



const SearchBar = props => {
    return(
        <div>
      <h1>Wanderlust</h1>
        <input type="text" placeholder="Search" onKeyDown={props.searchToursHandler}/>
        </div>
    )
}

export default SearchBar ;

