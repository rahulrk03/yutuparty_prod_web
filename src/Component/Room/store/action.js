import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({

    socketOn:['payload'],

    createChat: ['payload'],
    createChatStart: ['payload'],
    createChatSuccess: ['payload'],
    createChatFailure: ['payload'],

    createVideo: ['payload'],
    createVideoStart: ['payload'],
    createVideoSuccess: ['payload'],
    createVideoFailure: ['payload'],

    updateVideo: ['payload'],
    updateVideoStart: ['payload'],
    updateVideoSuccess: ['payload'],
    updateVideoFailure: ['payload'],

    playVideo: ['payload'],
    playVideoStart: ['payload'],
    playVideoSuccess: ['payload'],
    playVideoFailure: ['payload'],

    chatUpdate: ['payload'],
    chatUpdateStart: ['payload'],
    chatUpdateSuccess: ['payload'],
    chatUpdateFailure: ['payload'],

})

export { Types, Creators };