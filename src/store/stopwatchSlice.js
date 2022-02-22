import {createSlice} from '@reduxjs/toolkit'

export const stopWatchSlice = createSlice({
  name: 'stopwatch',
  initialState: {
    timer: {
      hours: 0,
      minutes: 0,
      seconds: 0
    },
    isTimerStarted: false,
    laps: []
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

      state.isTimerStarted = true
      // check if seconds are 0 then only decrease seconds if hours or minutes are not 0
      if (seconds === 0 && (hours !== 0 || minutes !== 0)) {
        // if seconds are 0, we need to set to 59, because a stopwatch only has 60 seconds
        state.timer.seconds = 59

        // if minutes are 0 but hours are not 0,
        // then set minutes to 59 and decrease value of hours
        if (minutes === 0 && hours !== 0) {
          state.timer.minutes = 59
          state.timer.hours--
        }
        //if minutes are not 0, only decrease minutes then.
        if (minutes !== 0) {
          state.timer.minutes--
        }
      }
      // if seconds are not 0, decrease them
      if (seconds !== 0) {
        state.timer.seconds--
      }
    },
    stop: (state) => {
      state.isTimerStarted = false
    },
    reset: (state) => {
      state.timer.hours = state.timer.minutes = state.timer.seconds = 0
      state.isTimerStarted = false
      state.laps = []
    },
    createLap: (state) => {
      let {hours, minutes, seconds} = state.timer
      let formattedHours = hours < 10 ? `0${hours}` : hours
      let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
      let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds

      let formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`

      state.laps.push(formattedTime)
    },
    clearLaps: (state) => {
      state.laps = []
    }
  }
})

export const {increase, decrease, start, stop, reset, createLap, clearLaps} = stopWatchSlice.actions
export default stopWatchSlice.reducer
