import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ForwardSharpIcon from '@material-ui/icons/ForwardSharp';
import VideoPlayer from './VideoPlayer';
import { useSelector, useDispatch } from 'react-redux';
import { Creators } from './store';
import {socket} from '../../webSocket/websocket';


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

export default function VideoUrlInput() {
  const [value, setValue] = useState('');
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
      videoUrl: value
    }
    dispatch(Creators.createVideo(payload))
    setValue('')
  }

  useEffect(() => {
    dispatch(Creators.updateVideo());
  }, [dispatch]);


  useEffect(() => {
    socket.onmessage = (e) => {
      const message1 = JSON.parse(e.data);
      if (message1.videoUrl){
        setUrl(message1.videoUrl)
      }
    }
  }, [url])


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
            <VideoPlayer videoUrl={url}/>
        </div>
    </>
  );
}
