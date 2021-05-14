import { put } from 'redux-saga/effects';
// import {socket} from '../../../webSocket/websocket';
import { Creators } from './action';

export function* videoCreateSaga({ payload }) {

  const {sendData , socket} = payload
    try {
        yield put(Creators.createVideoStart());
        socket.send(JSON.stringify(sendData))
        yield put(Creators.createVideoSuccess());
      } 
    catch (error) {
        console.log(error)
        yield put(Creators.createVideoFailure(error));
    }
}


export function* videoUpdateSaga({ payload }) {
    try {
      // console.log(payload)
      yield put(Creators.playVideoSuccess(payload));
      } 
    catch (error) {
      console.log(error)
      yield put(Creators.playVideoFailure(error));
    }
}

export function* chatUpdateSaga({ payload }) {
  try {
    console.log(payload)
    yield put(Creators.chatUpdateSuccess(payload));
    } 
  catch (error) {
    console.log(error)
    yield put(Creators.chatUpdateFailure(error));
  }
}