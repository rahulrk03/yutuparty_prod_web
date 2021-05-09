import { combineReducers } from 'redux';
import userdetail from '../Component/Header/store/reducers'
import { roomCreateReducer } from '../Component/Home/store/reducers'
import { videoCreateReducer } from '../Component/Room/store/reducers'

const rootReducer = combineReducers({
    userdetail: userdetail,
    roomReducer: roomCreateReducer,
    videoDetail: videoCreateReducer
})
 
export default rootReducer; 