import React, { useState, useRef} from 'react';
import VideoUrlInput from './VideoUrlInput';
import RoomIdBox from './RoomIdBox';
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';



function Room(props) {
    const location = useLocation();
    const user = useSelector(state => state.userdetail.user);
    console.log(user)

    const mainContainer ={
        marginLeft:20,
        marginTop:10,
        marginRight:10
    }
    const leftContainerStyle ={
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
    }
    const inputBoxStyle = {
        display: 'flex',
        flexDirection: 'column',
        flex: 2,
    }
    const rightContainer = {
        display: 'flex', 
        flexDirection: 'column',
        flex: 1,
        float:'right'
    }

    const rightMainContainer ={
        display:'flex',
        flexDirection:'column',
        // borderLeft: '6px solid green',
        display: 'inline-flex',
        width:'100%',
        height: '100%',
        backgroundColor: '#202021',
    }
    const roomIdContainer ={
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    }

    const chatContainer ={
        display:'flex',
        flexDirection:'row',
    }

    return (
        <div style={mainContainer}>
            <div style={leftContainerStyle}>
                <div style={inputBoxStyle}>
                    <VideoUrlInput/>
                </div>
                <div style={rightContainer}>
                    <div style={rightMainContainer}>
                        <div style={roomIdContainer}>
                            <RoomIdBox roomId = {location.state.roomId}/>
                        </div>
                        <div style={chatContainer}>
                            <em style={{color: "white"}}>Hello</em>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Room

