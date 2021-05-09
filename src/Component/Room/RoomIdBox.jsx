import React from 'react'

function RoomIdBox(props) {

    const idBoxStyle ={
        // borderBottom: '1px solid black',
        width: '100%',
        height:'20px',
        padding: '10px',
        // color: 'white',
        // fontFamily:"Arial",
        fontFamily: 'Arial, Helvetica, sans-serif',
    }
    return (
        <div style={idBoxStyle}>
           <p>
                <strong>Room Id: {props.roomId}</strong>
            </p>
        </div>
    )
}

export default RoomIdBox
