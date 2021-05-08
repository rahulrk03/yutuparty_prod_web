import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { CustomDialog } from 'react-st-modal';
import UserNameModal from '../UserModal/UserNameModal';
import { useSelector, useDispatch } from 'react-redux';
import {getUsersAction, setUsersAction } from './store/action'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(10)
  },
}));

function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const [userName, setUserName] = useState('')
    const user = useSelector(state => state.userdetail.user);
    
    const handleChange= async ()=> {
      const result = await CustomDialog(<UserNameModal userName={userName}/>, 
        {
            title: 'Hello!'
          });
        if (result){
         dispatch(setUsersAction(result));
        }
    }

    const homeHandle = () =>{
      history.push('/')
    }

    useEffect(() => {
      dispatch(getUsersAction());
      setUserName(user)
    },[user])

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                  {/* <IconButton onClick={() => history.goBack()}
                  edge="start" 
                  className={classes.menuButton} 
                  color="inherit" 
                  aria-label="menu"
                  >
                    <HomeIcon/>
                  </IconButton> */}
                <Typography variant="h6"  className={classes.title} onClick={homeHandle}>
                  <div>
                  <span>Home</span>
                  </div>
                </Typography>
                <form>
                <Typography variant="h6" className={classes.title} onClick={handleChange}>
                    {userName}
                </Typography>
                </form>
                {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
