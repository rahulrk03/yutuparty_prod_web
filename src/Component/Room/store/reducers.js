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
    const videoUrl  = action.payload;
    return {
        ...state,
        loading: false,
        roomSuccess: true,
        videoUrl,
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
      roomSuccess:false,
      error
    };
};

const HANDLERS = {
    [Types.CREATE_VIDEO_START]: createVideoStart,
    [Types.CREATE_VIDEO_SUCCESS]: createVideoSuccess,
    [Types.CREATE_VIDEO_FAILURE]: createVideoFailure,
    }
    
export const videoCreateReducer = createReducer(INITIAL_STATE, HANDLERS);