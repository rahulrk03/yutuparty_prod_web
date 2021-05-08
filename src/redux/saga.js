// import {all} from 'redux-saga/effects';
// import {getUsersAction, setUsersAction } from '../Component/Header/store/action'
// import {createRoomAction, joinRoomAction} from '../Component/Home/store/action'
import { takeLatest } from 'redux-saga/effects';
import { Types } from './action';
import { roomCreateSaga, roomJoinSaga } from '../Component/Home/store/saga'

export default function* rootSaga(){
    yield takeLatest(Types.CREATE_ROOM, roomCreateSaga);
    yield takeLatest(Types.JOIN_ROOM, roomJoinSaga)
}

