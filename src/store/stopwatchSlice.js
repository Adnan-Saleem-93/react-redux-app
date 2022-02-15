import {createSlice} from '@reduxjs/toolkit'

export const stopWatchSlice = createSlice({
  name: 'stopwatch',
  initialState: {
    timer: {
      hours: 1,
      minutes: 0,
      seconds: 0
    }
  },
  reducers: {
    increase: (state) => {
      // if minutes are 59, increase hour by 1 and set minutes to 0
      if (state.timer.minutes === 59) {
        state.timer.hours += 1
        state.timer.minutes = 0
      }
      // else, increase minutes
      else {
        state.timer.minutes += 1
      }
    },
    decrease: (state) => {
      // if hours and minutes are 0, don't decrease anything
      if (state.timer.hours === 0 && state.timer.minutes === 0) {
        state.timer.minutes = 0
      }
      // else if, hours are 1 or greater and minute is 0, decrease hours by 1 and set minutes to 59
      else if (state.timer.hours >= 1 && state.timer.minutes === 0) {
        state.timer.hours -= 1
        state.timer.minutes = 59
      }
      // else, decrease minutes
      else {
        state.timer.minutes -= 1
      }
    },
    start: (state) => {
      console.log(state)
    },
    stop: (state) => {
      console.log(state)
    },
    reset: (state) => {
      console.log(state)
    },
    createLap: (state) => {
      console.log(state)
    }
  }
})

export const {increase, decrease, start, stop, reset, createLap} = stopWatchSlice.actions
export default stopWatchSlice.reducer
