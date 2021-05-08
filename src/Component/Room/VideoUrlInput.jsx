import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ForwardSharpIcon from '@material-ui/icons/ForwardSharp';
import VideoPlayer from './VideoPlayer';

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
  const classes = useStyles();
  const videoPlayerStyle ={
      padding:1,
      marginTop: 10
  }


  return (
    <>
        <div>
            <Paper component="form" className={classes.root}> 
                <InputBase
                    className={classes.input}
                    placeholder="Enter Video Url"
                    inputProps={{ 'aria-label': 'enter video url' }}
                />
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton type="submit" className={classes.iconButton} aria-label="submit">
                    <ForwardSharpIcon color="primary"/>
                </IconButton>
            </Paper>
        </div>
        <div style={videoPlayerStyle}>
            <VideoPlayer/>
        </div>
    </>
  );
}
