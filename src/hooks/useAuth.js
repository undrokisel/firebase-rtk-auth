import React from 'react'
import { useSelector } from 'react-redux'

export const useAuth = () => {

    const { email, token, id } = useSelector(state => state.userSlice)
    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}
