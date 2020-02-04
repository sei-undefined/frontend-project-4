import {ADD_PIN , DELETE_PIN, INDEX_PIN} from './actionTypes';
import axios from 'axios'
import apiUrl from '../../apiConfig'

const initialState = {
    pins: []
}
// this comment is testting 2


const reducer = (state=initialState, action)=>{
    switch (action.type) { 
        case INDEX_PIN:
            return{
                pins: action.pins
            }
        case ADD_PIN:
            return{
                pins: state.pins.concat(action.pin)
            }
        case DELETE_PIN:
            return{
                pins: state.pins.filter(pin => pin.id !== action.id)
            }
        default:
            return state
    }
}

export default reducer