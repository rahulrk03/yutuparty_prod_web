import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    createChat: ['payload'],
    createChatStart: ['payload'],
    createChatSuccess: ['payload'],
    createChatFailure: ['payload'],
})

export { Types, Creators };