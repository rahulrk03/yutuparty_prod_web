import { createReducer } from 'reduxsauce';
import { Types } from './action';

const INITIAL_STATE = {
    error: null,
    loading: false,
    videoUrl: '',
    success: false
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

const updateVideoStart = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: true,
    error: null
  };
};

const updateVideoSuccess = (state = INITIAL_STATE, action) => {
  const videoUrl  = action.payload;
  console.log(action)
  return {
      ...state,
      loading: false,
      success: true,
      videoUrl,
      error: null
  };
};

const updateVideoFailure = (state = INITIAL_STATE, action) => {
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
  [Types.UPDATE_VIDEO_START]: updateVideoStart,
  [Types.UPDATE_VIDEO_SUCCESS]: updateVideoSuccess,
  [Types.UPDATE_VIDEO_FAILURE]: updateVideoFailure,
  }

    
export const videoCreateReducer = createReducer(INITIAL_STATE, HANDLERS);