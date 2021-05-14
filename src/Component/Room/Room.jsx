import React from 'react';
import VideoUrlInput from './VideoUrlInput';
import RoomIdBox from './RoomIdBox';
import { useLocation } from "react-router-dom";
// import { useSelector } from 'react-redux';
import Chat from '../Chat/Chat'
import {webSocketEndpoint} from '../../webSocket/websocket'



function Room(props) {
    const location = useLocation();
    // const webSocketUrl = webSocketEndpoint
    const roomSocket = webSocketEndpoint + location.state.roomId + "/"
    const socket = new WebSocket(roomSocket)
    // const user = useSelector(state => state.userdetail.user);

    const mainContainer ={
        marginLeft:20,
        marginTop:10,
        // marginRight:10
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
        width:'100%',
        float:'right'
    }

    const rightMainContainer ={
        display:'flex',
        flexDirection:'column',
        // borderLeft: '6px solid green',
        // display: 'inline-flex',
        width:'95%',
        height: '100%',
        marginLeft: 15
        // backgroundColor: '#202021',
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
                    <VideoUrlInput socket={socket}/>
                </div>
                <div style={rightContainer}>
                    <div style={rightMainContainer}>
                        <div style={roomIdContainer}>
                            <RoomIdBox roomId = {location.state.roomId}/>
                        </div>
                        <div style={chatContainer}>
                            <Chat socket = {socket}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Room

