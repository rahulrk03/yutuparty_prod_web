import { createReducer } from 'reduxsauce';
import { Types } from './action';

const INITIAL_STATE = {
    error: null,
    loading: false,
    videoUrl: '',
    success: false,
    playStatus: false,
    message:[]
}

const createVideoStart = (state = INITIAL_STATE, action) => {
    return {
      ...state,
      loading: true,
      error: null
    };
  };

const createVideoSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        loading: false,
        success: true,
        error: null
    };
};

const createVideoFailure = (state = INITIAL_STATE, action) => {
  // console.log(action.payload.error)
  // const error  = action.payload.error;
  const { error } = action.payload;
    return {
      ...state,  
      loading: false,
      success:false,
      error
    };
};

const playVideoStart = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: true,
    error: null
  };
};

const playVideoSuccess = (state = INITIAL_STATE, action) => {
  const playStatus  = action.payload;
  // console.log(playStatus)
  return {
      ...state,
      loading: false,
      success: true,
      playStatus,
      error: null
  };
};

const playVideoFailure = (state = INITIAL_STATE, action) => {
// console.log(action.payload.error)
// const error  = action.payload.error;
const { error } = action.payload;
  return {
    ...state,  
    loading: false,
    success:false,
    error
  };
};

const chatUpdateStart = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: true,
    error: null
  };
};

const chatUpdateSuccess = (state = INITIAL_STATE, action) => {
  // const   = action.payload;
  // setMessages(messages => [...messages, message1.message]);
  // console.log(action)
  state.message = [...state.message, action.payload]
  // console.log(state.message)
  const messsage = state.message
  return {
      ...state,
      loading: false,
      success: true,
      message: messsage,
      error: null
  };
};

const chatUpdateFailure = (state = INITIAL_STATE, action) => {
// console.log(action.payload.error)
// const error  = action.payload.error;
const { error } = action.payload;
  return {
    ...state,  
    loading: false,
    success:false,
    error
  };
};

const HANDLERS = {
  [Types.CREATE_VIDEO_START]: createVideoStart,
  [Types.CREATE_VIDEO_SUCCESS]: createVideoSuccess,
  [Types.CREATE_VIDEO_FAILURE]: createVideoFailure,
  [Types.PLAY_VIDEO_START]: playVideoStart,
  [Types.PLAY_VIDEO_SUCCESS]: playVideoSuccess,
  [Types.PLAY_VIDEO_FAILURE]: playVideoFailure,

  [Types.CHAT_UPDATE_START]: chatUpdateStart,
  [Types.CHAT_UPDATE_SUCCESS]: chatUpdateSuccess,
  [Types.CHAT_UPDATE_FAILURE]: chatUpdateFailure,
  }

    
export const videoCreateReducer = createReducer(INITIAL_STATE, HANDLERS);