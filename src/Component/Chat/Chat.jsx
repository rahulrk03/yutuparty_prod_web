import React from 'react'
// import {socket} from '../../webSocket/websocket';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import { Scrollbars } from 'rc-scrollbars';

export default function Chat(props) {
    // const [messages, setMessages] = useState([])

    const chatContainer = {
        display: 'flex', 
        flexDirection: 'column',
        width:'100%',
        height: '100%',
    }

    const chatMessage = {
        display: 'flex',
        flexDirection: 'row',
        // flex:3,
        width: '90%',
        height: 490,
        padding:10,
        wordWrap: 'break-word',
        marginRight:10
    }
    const chatInput = {
        display: 'flex',
        flexDirection: 'row',
        padding:5,
        // borderTop: '4px solid blue'
        // flex:1
    }
    const scrollBarStyle ={
        padding: '11',
        width: '100%', 
        marginLeft: 5
        // height: 450,
    }

    // useEffect(() => {
    //         socket.onmessage = (e) => {
    //           console.log("Received message")
    //             const message1 = JSON.parse(e.data);
    //             if (message1.message){
    //                 setMessages(messages => [...messages, message1.message]);
    //             }
    // }},[]);

    return (
        <div style={chatContainer}>
            
            <div style={chatMessage}>
            <Scrollbars style={ scrollBarStyle}>
                <ChatMessage socket={props.socket}/>
            </Scrollbars>
            </div>
            <div style={chatInput}>
                <ChatInput socket={props.socket}/>
            </div>
        </div>
    )
}
