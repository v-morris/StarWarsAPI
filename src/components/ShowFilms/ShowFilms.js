import React from "react";
import Film from './Film';

const ShowFilms = ({ films }) => {

  var listStyle = {
    backgroundColor: "#000080",
    border: '2px solid black',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'

  }

  const filmList =
    <div style={listStyle}>
      {films.map((film, index) => {
        
        return <Film key={index} film ={film} />
        
      })}
    </div>

  return (
    <div>
      <h3>List of Films:</h3>
      {filmList}
    </div>
  )
}

export default ShowFilms;