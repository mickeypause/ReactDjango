import { createSlice } from '@reduxjs/toolkit'

const discussionSlice = createSlice({
    name: 'discussion',
    initialState: {
        status: 'reading',
    },
    reducers: {
        editing(state) {
            state.status = 'editing'
        },
        reading(state) {
            state.status = 'reading'
        },
    },
})

// export actions you want to use
export const { editing, reading } = discussionSlice.actions

export default discussionSlice.reducer
