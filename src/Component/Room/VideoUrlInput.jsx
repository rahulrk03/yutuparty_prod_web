import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ForwardSharpIcon from '@material-ui/icons/ForwardSharp';
import VideoPlayer from './VideoPlayer';
import { useDispatch } from 'react-redux';
import { Creators } from './store';
// import {socket} from '../../webSocket/websocket';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function VideoUrlInput(props) {
  const socket = props.socket
  const [value, setValue] = useState('https://www.youtube.com/watch?v=WKbwopSXLWU');
  const [url, setUrl] = useState('');
  const classes = useStyles();
  const videoPlayerStyle ={
      padding:1,
      marginTop: 10
  }

  const dispatch = useDispatch();
  // const videoUrl = useSelector((store) => store.videoDetail.videoUrl);
  // const error = useSelector((store) => store.videoDetail.error);
  // const roomSuccess = useSelector((store) => store.videoDetail.success);
  // console.log(videoUrl)

  const onSubmitUrl = (event) =>{
    event.preventDefault()
    const payload = {
      sendData: {videoUrl: value},
      socket: props.socket
    }
    dispatch(Creators.createVideo(payload))
    setValue('')
  }



  useEffect(() => {
    socket.onmessage = (e) => {
      const message1 = JSON.parse(e.data);
      console.log(message1)
      if (message1.videoUrl){
        setUrl(message1.videoUrl)
      }
      if (message1.playStatus && message1.playStatus === "Resume"){
        dispatch(Creators.playVideo(true))
      }
      if (message1.playStatus && message1.playStatus === "Stop"){
        dispatch(Creators.playVideo(false))
      }
      if (message1.message){
        dispatch(Creators.chatUpdate(message1.message))
      }
    }
  })


  return (
    <>
        <div>
            <Paper component="form" className={classes.root}> 
                <InputBase
                    className={classes.input}
                    placeholder="Enter Video Url"
                    inputProps={{ 'aria-label': 'enter video url' }}
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                      }}
                />
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton type="submit" onClick={onSubmitUrl} 
                  className={classes.iconButton} aria-label="submit">
                    <ForwardSharpIcon color="primary" />
                </IconButton>  
            </Paper>
        </div>
        <div style={videoPlayerStyle}>
            <VideoPlayer videoUrl={url} socket={socket}/>
        </div>
    </>
  );
}
