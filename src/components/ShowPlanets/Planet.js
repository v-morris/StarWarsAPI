import React from "react";

const Planet = ({ planet }) => {

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
            <div style={{ fontSize: '30px' }}>{planet.name}</div>
            <div style={{ paddingLeft: '30px' }}>  Climate: <span style={resultsStyle}>{planet.climate}</span></div>
            <div style={{ paddingLeft: '30px' }}> Terrain: <span style={resultsStyle}>{planet.terrain}</span></div>
        </div>
    )
}
export default Planet;