import React, {useState, useEffect} from 'react'
// import {socket} from '../../webSocket/websocket';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function ChatMessage(props) {
    // const socket = props.socket
    const [messages, setMessages] = useState([])
    const messageList = useSelector(state => state.videoDetail.message);
    // console.log(messageList)

    // useEffect(() => {
    //     socket.onmessage = (e) => {
    //       console.log("Received message")
    //         const message1 = JSON.parse(e.data);
    //         if (message1.message){
    //             setMessages(messages => [...messages, message1.message]);
    //         }
    // }},[]);
    useEffect(() => {
        setMessages(messageList);
    }, [messageList])

    return (
        
        <div>
            {messages.map((message)=>(
                    <p key={uuidv4()}>{message}</p>
                ))}
            {/* <p>
                <strong>Rahul: </strong> <em>{messages}</em>
            </p> */}
        </div>
    )
}

export default ChatMessage
