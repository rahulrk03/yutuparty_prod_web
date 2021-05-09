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

    playVideo: ['payload'],
    playVideoStart: ['payload'],
    playVideoSuccess: ['payload'],
    playVideoFailure: ['payload'],
})

export { Types, Creators };