import React, {useRef, useState, useEffect} from 'react'
import PauseIcon from '@material-ui/icons/Pause';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ReactPlayer from 'react-player';
import {
    Container,
    ControllsContainer,
    PlayButton,
    PlayerContainer,
    Controlls,
    VolumeButton,
  } from './VideoPlayerStyle';
import { useSelector, useDispatch } from 'react-redux';
import { Creators } from './store';
import {socket} from '../../webSocket/websocket';


function VideoPlayer(props) {
const playerRef = useRef(null);
const dispatch = useDispatch();
const playerContainerRef = useRef(null);
const [state, setState] = useState({
    playing: false,
    controls: false,
    muted: false,
    played: 0,
    duration: 0,
    playbackRate: 1.0,
    seeking: false,
    showControls: false
});

  const { playbackRate, muted, playing, showControls } = state;


  const handlePlayPause = () => {
    // setState({ ...state, playing: !state.playing });
    var playStatus;
    if (!state.playing){
      playStatus = "True"
    }
    else{
      playStatus = "False"
    }
    const payload = {
      playStatus: playStatus
    }
    dispatch(Creators.createVideo(payload))
  };

  const handleProgress = (changeState) => {
    setState({ ...state, ...changeState });
  };

  const handleEnded = () => {
    setState({ ...state, playing: false });
  };

  const handleDuration = (duration) => {
    setState({ ...state, duration });
  };


  const handleToggleMuted = () => {
    setState({ ...state, muted: !muted });
  };


  const handleShowControls = () => {
    setState({ ...state, showControls: !showControls });
  };

  useEffect(() => {
    socket.onmessage = (e) => {
      const message1 = JSON.parse(e.data);
      if (message1.playStatus){
        if (message1.playStatus = "True"){
          console.log(message1.playStatus)
          setState({ ...state, playing: true });
        }
        if (message1.playStatus = "False"){
          setState({ ...state, playing: false });
        }
      }
    }
    
  }, [state.playStatus])


    return (
        <div>
            <Container>
            <PlayerContainer onMouseOver={handleShowControls} ref={playerContainerRef}>
                <ReactPlayer
                ref={playerRef}
                width='890px'
                height='530px'
                url= {props.videoUrl}
                muted={muted}
                playing={playing}
                playbackRate={playbackRate}
                onProgress={handleProgress}
                onEnded={handleEnded}
                onDuration={handleDuration} />
            </PlayerContainer>

            {showControls ? (
                    <Controlls show={showControls} onMouseLeave={handleShowControls}>
                        <ControllsContainer className='controlls_container'>
                            <PlayButton onClick={handlePlayPause}>
                                {playing ? <PauseIcon fontSize="large" style={{fill: "white"}}/> : 
                                        <PlayArrowIcon fontSize="large" style={{fill: "white"}}/>}
                            </PlayButton>
                            <VolumeButton onClick={handleToggleMuted}>
                                {muted ? <VolumeOffIcon fontSize="large" style={{fill: "white"}}/> : 
                                        <VolumeUpIcon fontSize="large" style={{fill: "white"}}/>}
                            </VolumeButton>
                        </ControllsContainer>
                    </Controlls>
                ) : (
                    ''
                )}

      </Container>
        </div>
    )
}

export default VideoPlayer
