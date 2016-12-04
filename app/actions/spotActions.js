import axios from 'axios'
import { SET_DEFAULT_SPOTS, REMOVE_SPOT } from './types'

export function setDefaultSpots(spots) {
  return {
    type: SET_DEFAULT_SPOTS,
    spots
  }
}

export function getSpots() {
  return dispatch => {
    return axios.get('http://localhost:3000/spots/all').then(res => {
      dispatch(setDefaultSpots(res.data.spots))
    })
  }
}
