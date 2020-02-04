import { ADD_PIN ,DELETE_PIN, INDEX_PIN } from "./actionTypes";
import axios from 'axios'
import apiUrl from '../../apiConfig'

export const indexPin = pins => ({
    type: INDEX_PIN,
    pins
})
export const addPin = pin => ({
    type: ADD_PIN,
    pin
})

export const deletePin = id => ({
    type: DELETE_PIN,
    id
})

export const getPins = () => async dispatch => {
    try{
        const res = await axios.get(apiUrl+'/allpins')
        const pins = res.data.pins
        console.log('this is from actions', pins)

        dispatch(indexPin(pins))
    } catch (error) {

    }
}