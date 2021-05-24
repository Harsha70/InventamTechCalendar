export const addEvent = item => ({
    type: "ADD_EVENT",
    payload: item
})

export const removeEvent = item => ({
    type: "REMOVE_EVENT",
    payload: item
})

export const userLogout = () =>({
    type: "USER_LOGOUT"
})


