import React, { useContext, createContext, useState } from "react"

export const UserContext = createContext({})

export const useUserContext = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error(
            'Theme Context not provided'
        )
    }

    return context
}

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([])

    const value = {
        users,
        addUser
    }

    function addUser(newUser) {
        setUsers([...users, newUser])
    }

    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
}