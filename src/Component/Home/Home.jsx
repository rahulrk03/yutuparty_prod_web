import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import GroupIcon from '@material-ui/icons/Group';
import { useHistory } from 'react-router-dom';
import { CustomDialog, Alert } from 'react-st-modal';
import { useSelector, useDispatch } from 'react-redux';
import { Creators } from './store';
import JoinRoomModal from '../UserModal/JoinRoomModal';


function Home(props) {

    const history = useHistory();
    const dispatch = useDispatch();
    const roomId = useSelector((store) => store.roomReducer.roomId);
    const error = useSelector((store) => store.roomReducer.error);
    const roomSuccess = useSelector((store) => store.roomReducer.roomSuccess);

    // console.log(useSelector((store) => store.roomReducer.error))
    function createHandleClick() {
        dispatch(Creators.createRoom())
    }

    const onClickJoinRoom= async ()=> {
       
        const result = await CustomDialog(<JoinRoomModal />, 
            {
                title: 'Join a room'
              });
        
        if (result) {
            const payload = {
                roomId: result
              };
            dispatch(Creators.joinRoom({payload}))
        }
        
}
    useEffect(() => {
        console.log(error)
        if (roomSuccess && roomId) {
            history.push({
                pathname: "/room",
                state: { roomId: roomId }
            });;
          }
        if (error){
            Alert(error, 'Please Try again');
        }
      
    }, [roomSuccess, roomId, error])

    const containerStyle={
        padding: "10px",
        marginTop:"4%",
        marginLeft: "15%",
        display: 'flex', 
        flexDirection: 'row'
    }
    
    const createButtonStyle={
        width:"30%",
        display: 'flex', 
        flexDirection: 'column',
        padding:"10px",
        textDecoration: 'none'
    }
    const joinButtonStyle ={
        width:"30%",
        display: 'flex', 
        flexDirection: 'column',
        padding:"10px",
        marginLeft:"90px",
        textDecoration: 'none'
    } 


    return (
        <div>
            <div style={containerStyle}>
                <div style= {createButtonStyle}  onClick={createHandleClick}>
                    <Button  variant="contained">
                        <PersonAddIcon style={{ fontSize: "50px" }}></PersonAddIcon>
                            Create a room
                    </Button>
                </div>
                <div style= {joinButtonStyle} onClick={onClickJoinRoom}>
                    <Button variant="contained">
                            <GroupIcon style={{ fontSize: "50px" }}></GroupIcon>
                                Join a room
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home
