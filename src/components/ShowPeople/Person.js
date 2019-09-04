import React from "react";

const Person = ({ person }) => {

  var cardStyle = {
    backgroundColor: "#6495ED",
    border: '5px solid black',
    color: '#191970',
    fontFamily: 'Impact',
    boxShadow: '3px 3px 20px #000000',
    width: '400px',
    margin: '10px',
    padding: '20px',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column'

  }

  var resultsStyle = {
    color: '#003366'
  }

  return (
    <div style={cardStyle}>
      <div style={{ fontSize: '30px' }}>{person.name}</div>
      <div style={{ paddingLeft: '30px' }}> Birth Year: <span style={resultsStyle}> {person.birth_year}</span></div>
      <div style={{ paddingLeft: '30px' }}> Gender: <span style={resultsStyle}>{person.gender}</span></div>
      <div style={{ paddingLeft: '30px' }}> Eye Color:<span style={resultsStyle}>{person.eye_color}</span></div>

      <div style={{ paddingLeft: '30px' }}>
        Films: <br />
        {person.films.map((film, index) => {
          return <div key={index} style={{ paddingLeft: '50px' }}>{film.title}</div>
  
        })}
      </div>
    </div>
      )
    }
export default Person;