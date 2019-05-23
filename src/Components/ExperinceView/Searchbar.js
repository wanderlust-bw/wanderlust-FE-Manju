const SearchBar = props => {
    return(
        <input type="text" placeholder="Search" onKeyDown={props.search}/>
    )
}