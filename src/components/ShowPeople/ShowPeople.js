import React from "react";
import Person from './Person';

const ShowPeople = ({ characters }) => {

  var listStyle = {
    backgroundColor: "#000080",
    border: '2px solid black',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'

  }

  const characterList =
    <div style={listStyle}>
      {characters.map((person, index) => {
        
        return <Person key={index} person ={person} />
        
      })}
    </div>

  return (
    <div>
      <h3>List of Characters:</h3>
      {characterList}
    </div>
  )
}

export default ShowPeople;