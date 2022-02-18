import {createSlice} from '@reduxjs/toolkit'

export const stopWatchSlice = createSlice({
  name: 'stopwatch',
  initialState: {
    timer: {
      hours: 2,
      minutes: 0,
      seconds: 0
    }
  },
  reducers: {
    increase: (state) => {
      let {minutes} = state.timer
      // if minutes are 59, increase hour by 1 and set minutes to 0
      if (minutes === 59) {
        state.timer.hours += 1
        state.timer.minutes = 0
      }
      // else, increase minutes
      else {
        state.timer.minutes += 1
      }
    },
    decrease: (state) => {
      let {hours, minutes} = state.timer
      // if hours and minutes are 0, don't decrease anything
      if (hours === 0 && minutes === 0) {
        state.timer.minutes = 0
      }
      // else if, hours are 1 or greater and minute is 0, decrease hours by 1 and set minutes to 59
      else if (hours >= 1 && minutes === 0) {
        state.timer.hours -= 1
        state.timer.minutes = 59
      }
      // else, decrease minutes
      else {
        state.timer.minutes -= 1
      }
    },
    start: (state) => {
      let {hours, minutes, seconds} = state.timer

      if (hours !== 0 || minutes !== 0 || seconds !== 0) {
        state.timer.seconds--

        if (seconds === 0) {
          state.timer.seconds = 59

          if (minutes !== 0) {
            state.timer.minutes--
          }
          if (hours !== 0) {
            state.timer.hours--

            if (minutes === 0) {
              state.timer.minutes = 59
            }
          }
        }
      }
      // if (seconds === 0) {
      //   state.timer.seconds = 59
      // }
      // if (hours !== 0 && seconds === 0) {
      //   state.timer.hours--
      // }
      // if (minutes === 0) {
      //   state.timer.minutes = 59
      // }
      // if (minutes !== 0 && seconds === 0) {
      //   state.timer.minutes--
      // }
    },
    stop: (state) => {
      console.log(state)
    },
    reset: (state) => {
      state.timer.hours = state.timer.minutes = state.timer.seconds = 0
    },
    createLap: (state) => {
      console.log(state)
    }
  }
})

export const {increase, decrease, start, stop, reset, createLap} = stopWatchSlice.actions
export default stopWatchSlice.reducer