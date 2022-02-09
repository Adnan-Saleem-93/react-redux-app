import * as actions from './actionTypes'

const initialState = {
  timer: {hours: '00', minutes: '00', seconds: '00'},
  laps: []
}

export const reducer = (state = initialState, {type, payload}) => {
  if (type === actions.TIMER_INCREASED) {
    console.log(type)
    return state
  } else if (type === actions.TIMER_DECREASED) {
    console.log(type)
    return state
  } else if (type === actions.TIMER_STARTED) {
    console.log(type)
    return state
  } else if (type === actions.TIMER_STOPPED) {
    console.log(type)
    return state
  } else if (type === actions.TIMER_RESET) {
    console.log(type)
    return state
  } else if (type === actions.LAP_CREATED) {
    console.log(type)
    return state
  } else {
    return state
  }
}
