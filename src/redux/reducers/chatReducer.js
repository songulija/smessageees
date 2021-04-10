const initialState ={
    chatId: null,
    chatName: null
}
//reducer is just a function that catches all actions related to chatReducer
//we define what state should look like, and second is action that it will catch
export const chatReducer = (state = {currentChat: null}, action)=>{
    switch(action.type){
        case 'SET_CHAT'://if dispatched action type is this then
            return {//set chatId to dispatched action sent data
                ...state,//what was already in state
                currentChat: action.payload
            }
        default:
            return state;
    }

}