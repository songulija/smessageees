//reducer is just a function that catches all actions related to userReducer
//we define what state should look like, and second is action that it will catch
export const userReducer = (state = { currentUser: {} }, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {//return what already was in user & set user to dispatched action data
                ...state,//send as payload
                currentUser: action.payload
            }
        case 'LOGOUT_USER':
            return {
                currentUser: {}
            }
        default:
            return state
    }
}