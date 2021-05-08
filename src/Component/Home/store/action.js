import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    createRoom: ['payload'],
    createRoomStart: ['payload'],
    createRoomSuccess: ['payload'],
    createRoomFailure: ['payload'],

    joinRoom: ['payload'],
    joinRoomStart: ['payload'],
    joinRoomSuccess: ['payload'],
    joinRoomFailure: ['payload'],
})

export { Types, Creators };