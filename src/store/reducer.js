import * as actions from './actionTypes'

const initialState = {
  timer: '00:00:00',
  laps: []
}

export const reducer = (state = initialState, {type, payload}) => {
  if (type === actions.TIMER_INCREASED) {
  } else if (type === actions.TIMER_DECREASED) {
  } else if (type === actions.TIMER_STARTED) {
  } else if (type === actions.TIMER_STOPPED) {
  } else if (type === actions.TIMER_RESET) {
  } else if (type === actions.LAP_CREATED) {
  } else {
    return state
  }
}
