import UserContext from './UserContext'
import React, { useReducer } from 'react'
import { SET_USER_INFORMATION } from './actions'

const initialState = {}
const userReducer = (state, { type, data }) => {
    if (type === SET_USER_INFORMATION) {
        return data
    }

    return state
}

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState)

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
