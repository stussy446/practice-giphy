import React from 'react'

const SearchBar = ({term, handleInput}) => {
  return(
    <div>
      <input type="text" placeholder="search giphy" onChange={handleInput}></input>
    </div>
  )

}

export default SearchBar;