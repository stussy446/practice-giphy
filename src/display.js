import React from 'react';

const Display = ({giphyObject}) => {
  if(!giphyObject){
    return(<p>enter a search!</p>)
  }
  
  let giph = giphyObject['data']['data']['0']['images']['original']['url']
  return(
    <div>
      <p>YOUR GIPHY</p>
      <img src={giph}/>
    </div>
  )
}

export default Display;