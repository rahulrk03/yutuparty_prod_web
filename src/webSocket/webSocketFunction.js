import {socket} from './websocket';

export function videoUrlReceive(){
    let videoUrl;
    socket.onmessage = (e) => {
        console.log("Hi there", JSON.parse(e.data))
        const message1 = JSON.parse(e.data);
        videoUrl = (message1.videoUrl)
    }
    return () => {}
}