import React from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import { Scrollbars } from 'rc-scrollbars';

export default function Chat() {

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

    return (
        <div style={chatContainer}>
            
            <div style={chatMessage}>
            <Scrollbars style={ scrollBarStyle}>
                <ChatMessage />
            </Scrollbars>
            </div>
            <div style={chatInput}>
                <ChatInput />
            </div>
        </div>
    )
}
