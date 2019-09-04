import React from "react";
import Planet from "./Planet";

const ShowPlanets = ({ planets }) => {

    var listStyle = {
        backgroundColor: "#000080",
        border: '2px solid black',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'

    }

    const planetList =
        <div style={listStyle}>
            {planets.map((planet, index) => {
                return <Planet key={index} planet={planet} />
            })}
        </div>

    return (
        <div>
            <h3>List of Planets:</h3>
            {planetList}
        </div>
    )
}

export default ShowPlanets;