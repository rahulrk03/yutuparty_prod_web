const initialState = {
    user:'Enter Your name',
}

export default function userdetail(state=initialState, action){
    switch(action.type){
        case "GET_USER":
            return {
                ...state,
                name: state.user
            }
        case "SET_USER":
            state.user = action.payload
            return{
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}
