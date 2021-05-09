import { put } from 'redux-saga/effects';
import {socket} from '../../../webSocket/websocket';
import { Creators } from './action';

export function* videoCreateSaga({ payload }) {
    console.log(payload)
    try {
        yield put(Creators.createVideoStart());
        const message = { videoUrl: payload }
        console.log("Hello")
        socket.send(JSON.stringify(message))
        yield put(Creators.createVideoSuccess(payload));
      } 
    catch (error) {
        console.log(error)
        yield put(Creators.createVideoFailure(error));
    }
}