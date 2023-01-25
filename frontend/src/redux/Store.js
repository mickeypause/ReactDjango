import { configureStore } from '@reduxjs/toolkit'
import DiscussionSlice from './DiscussionSlice'

export default configureStore({
    reducer: {
        discussion: DiscussionSlice,
    },
})
