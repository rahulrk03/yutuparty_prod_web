// import {createActions} from 'reduxsauce';


export const GET_USER = 'GET_USERS';
export const SET_USER = 'SET_USERS';

export function getUsersAction(user){
    return{
        type:"GET_USER"
    }
}

export function setUsersAction(user){
    return{
        type:"SET_USER",
        payload: user,
    }
}