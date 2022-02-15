import {configureStore} from '@reduxjs/toolkit'
import stopWatchSlice from './stopwatchSlice'

const store = configureStore({
  reducer: {
    stopwatch: stopWatchSlice
  }
})
export default store
