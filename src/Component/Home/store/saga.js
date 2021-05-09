import { put } from 'redux-saga/effects';
import {apiEndPoints} from '../../../axios/endPoints';
import {WebService} from '../../../axios/webServices';
import { Creators } from './action';


export function* roomCreateSaga({ payload }) {
    try {
      yield put(Creators.createRoomStart());
      const response = yield WebService.post(apiEndPoints.createRoom);
      if (response.status >= 200 && response.status < 300) {
        // const {roomId} = response.data.data;
        // console.log(response.data.data)
        yield put(Creators.createRoomSuccess(response.data.data));

      } else {
        throw response;
      }
    } catch (error) {
      console.log({ error });
      let payload;
      if (error && error.response && error.response.status) {
        // add toast notification sysytem here
        switch (error.response.status) {
          case 400:
            payload = {
              error: error.response.data.message
            };
            yield put(Creators.createRoomFailure(payload));
            break;
          case 500:
            payload = {
              error: 'Somthing went wrong try later'
            };
            yield put(Creators.createRoomFailure(payload));
            break;
          default:
            payload = {
              error: 'Unable to update. Try again later'
            };
            yield put(Creators.createRoomFailure(payload));
        }
      } else {
        // for custom error
        payload = {
          error: error.message
        };
  
        yield put(Creators.createRoomFailure(payload));
      }
    }
  }

export function* roomJoinSaga({ payload }) {
  console.log('payload is:', payload.payload.roomId)
  try{
    yield put(Creators.joinRoomStart());
    const roomId = payload.payload.roomId;

    const joinRoomData = {
      room_name: roomId
    };

    const response = yield WebService.post(apiEndPoints.joinRoom, joinRoomData);
    if (response.status >= 200 && response.status < 300) {
      yield put(Creators.joinRoomSuccess(roomId));

    } else {
      throw response;
    }

  } catch (error){
    console.log({ error });
      let payload;
      if (error && error.response && error.response.status) {
        switch (error.response.status) {
          case 400:
            payload = {
              error: error.response.data.message
            };
            yield put(Creators.joinRoomFailure(payload));
            break;
          case 500:
            payload = {
              error: 'Somthing went wrong try later'
            };
            yield put(Creators.joinRoomFailure(payload));
            break;
          default:
            payload = {
              error: 'Unable to update. Try again later'
            };
            yield put(Creators.joinRoomFailure(payload));
        }
      } else {
        // for custom error
        payload = {
          error: error.message
        };
    }
  }
}