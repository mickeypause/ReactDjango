import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        modalStatus: 'login',
    },
    reducers: {
        login(state) {
            state.modalStatus = 'login'
        },
        register(state) {
            state.modalStatus = 'register'
        },
        resetPassword(state) {
            state.modalStatus = 'reset'
        },
    },
})

export const { register, resetPassword, login } = authSlice.actions

export default authSlice.reducer
