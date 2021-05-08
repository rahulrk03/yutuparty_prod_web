import React from 'react'

function RoomIdBox(props) {

    const idBoxStyle ={
        // borderBottom: '1px solid black',
        width: '100%',
        height:'20px',
        padding: '10px',
        color: 'white',
        fontFamily:"Arial"
    }
    return (
        <div style={idBoxStyle}>
           <em>Room Id: {props.roomId}</em> 
        </div>
    )
}

export default RoomIdBox
