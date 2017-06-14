import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch(action.type){
    case FETCH_WEATHER:
    return [action.payload.data, ...state]
    //console.log('action.payload.data', action.payload.data)
  }
  console.log('this is action', action)
  return state
}
