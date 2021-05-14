import React, {useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch } from 'react-redux';
import { Creators } from '../Room/store';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//   }));


function ChatInput() {

    const [message, setMessage] = useState('');
    const dispatch = useDispatch()
    const onSubmitMessage = (event) =>{
        event.preventDefault()
        const payload = {
            message: message
          }
        dispatch(Creators.createVideo(payload))
        setMessage('')
    }

    const inputContainer = {
        display: 'flex',
        width: '100%',
        // marginBottom: '15px',
        fontFamily: 'Arial, Helvetica, sans-serif',
    }

    const inputBoxStyle ={
        width: '270px'
    }

    const sendIconStyle = {
        marginTop:2, 
        marginLeft: 5
    }

    return (
        <div>
            <form
                action="."
                onSubmit={onSubmitMessage}>
                <div style={inputContainer}>
                    <Input
                        style={inputBoxStyle} 
                        placeholder='Enter message...' 
                        inputProps={{ 'aria-label': 'description' }}
                        value={message}
                        onChange={e => setMessage(e.target.value)}>
                    </Input>
                    <SendIcon onClick={onSubmitMessage} style={sendIconStyle}color="primary"/>
                </div>
            </form>
        </div>
    )
}

export default ChatInput
