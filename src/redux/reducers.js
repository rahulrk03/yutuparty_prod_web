import { combineReducers } from 'redux';
import userdetail from '../Component/Header/store/reducers'
import { roomCreateReducer } from '../Component/Home/store/reducers'

const rootReducer = combineReducers({
    userdetail: userdetail,
    roomReducer: roomCreateReducer,
})
 
export default rootReducer; 