import * as actions from './actionTypes'

export const timerIncreased = () => ({
  type: actions.TIMER_INCREASED
})
export const timerDecreased = () => ({
  type: actions.TIMER_DECREASED
})
export const timerStarted = () => ({
  type: actions.TIMER_STARTED
})
export const timerStopped = () => ({
  type: actions.TIMER_STOPPED
})
export const timerReset = () => ({
  type: actions.TIMER_RESET,
  payload: {
    time: '00:00:00'
  }
})
export const lapCreated = (lapTime) => ({
  type: actions.LAP_CREATED,
  payload: {
    lapTime: lapTime
  }
})
