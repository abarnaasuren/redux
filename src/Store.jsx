import { configureStore } from '@reduxjs/toolkit'
import TotalSlice from './TotalSlice'

export default configureStore({
    reducer:{
        Total: TotalSlice
    },
});