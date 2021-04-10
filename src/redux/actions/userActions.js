//action is just function that we dispatch. it should have type/name 
//have to provide user when 
export const loginUser = (user) =>{
    return {//it just returns object. adding type/name to action
        type: 'USER_LOGIN',
        payload: user,//setting payload equal to user that was passed here
    }
}

export const logoutUser = () =>{
    return {//it just returns object. adding type/name to action
        type: 'USER_LOGOUT'
    }
}