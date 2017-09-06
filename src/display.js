import React from 'react';

const Display = ({giphyObject}) => {
  if(!giphyObject){
    return(<p>Loading...</p>)
  }
  
  let giph = giphyObject['data']['data']['0']['images']['original']['url']
  return(
    <div>
      <p>Display component</p>
      <img src={giph}/>
    </div>
  )
}

export default Display;