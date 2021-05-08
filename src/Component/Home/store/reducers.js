import { createReducer } from 'reduxsauce';
import { Types } from './action';

const INITIAL_STATE = {
    error: null,
    loading: false,
    roomId: 0,
    roomSuccess: false
}

const createRoomStart = (state = INITIAL_STATE, action) => {
    return {
      ...state,
      loading: true,
      error: null
    };
  };

const createRoomSuccess = (state = INITIAL_STATE, action) => {
    const roomId  = action.payload;
    return {
        ...state,
        roomId,
        loading: false,
        roomSuccess: true,
        error: null
    };
};

const createRoomFailure = (state = INITIAL_STATE, action) => {
  console.log(action.payload.error)
  // const error  = action.payload.error;
  const { error } = action.payload;
    return {
      ...state,  
      loading: false,
      roomSuccess:false,
      error
    };
};

const joinRoomStart = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: true,
    error: null
  };
};

const joinRoomSuccess = (state = INITIAL_STATE, action) => {
  const roomId  = action.payload;
  return {
      ...state,
      roomId,
      loading: false,
      roomSuccess: true,
      error: null
  };
};

const joinRoomFailure = (state = INITIAL_STATE, action) => {
  const { error } = action.payload;
  return {
    ...state,  
    loading: false,
    roomSuccess:false,
    error
  };
};

const HANDLERS = {
[Types.CREATE_ROOM_START]: createRoomStart,
[Types.CREATE_ROOM_SUCCESS]: createRoomSuccess,
[Types.CREATE_ROOM_FAILURE]: createRoomFailure,
[Types.JOIN_ROOM_START]: joinRoomStart,
[Types.JOIN_ROOM_SUCCESS]: joinRoomSuccess,
[Types.JOIN_ROOM_FAILURE]: joinRoomFailure,
}

export const roomCreateReducer = createReducer(INITIAL_STATE, HANDLERS);
  