//action is just function that we dispatch. it should have type/name 
//have to provide chat object when 
export const setChat = (chat) =>{
    return {//it just returns object. adding type/name to action
        type: 'SET_CHAT',
        payload: chat,//setting payload equal to user that was passed here
    }
}
