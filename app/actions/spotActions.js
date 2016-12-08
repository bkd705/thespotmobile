import axios from 'axios'
import { SET_DEFAULT_SPOTS, REMOVE_SPOT } from './types'
import config from '../config'

const host = `http://${config.ip}`

export function setDefaultSpots(spots) {
  console.log('Setting Spots')
  return {
    type: SET_DEFAULT_SPOTS,
    spots
  }
}

export function getSpots() {
  console.log('Getting Spots', host)
  return dispatch => {
    return axios.get(`${host}/spots/all`).then(res => {
      console.log('Spots Got')
      return dispatch(setDefaultSpots(res.data.spots))
    }).catch(err => {
      console.log(err)
    })
  }
}
