import { put, call, take } from 'redux-saga/effects';
import {socket} from '../../../webSocket/websocket';
import { Creators } from './action';

export function* videoCreateSaga({ payload }) {
    try {
        yield put(Creators.createVideoStart());
        socket.send(JSON.stringify(payload))
        yield put(Creators.createVideoSuccess());
      } 
    catch (error) {
        console.log(error)
        yield put(Creators.createVideoFailure(error));
    }
}


export function* videoUpdateSaga({ payload }) {
    try {
      } 
    catch (error) {
    }
}