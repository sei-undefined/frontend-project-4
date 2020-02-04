import { ADD_PIN ,DELETE_PIN, INDEX_PIN } from "./actionTypes";
import axios from 'axios'
import apiUrl from '../../apiConfig'

export const indexPin = pins => ({
    type: INDEX_PIN
})
export const addPin = pin => ({
    type: ADD_PIN,
    pin
})

export const deletePin = id => ({
    type: DELETE_PIN,
    id
})

export const getPin = () => async dispatch => {
    try{
        const res = await axios.get(apiUrl+'/pins')
        const name = res.data.link
        const author = res.data.image
        const id = 3
        const pin = {
            name, author, id
        }
        dispatch(addPin(pin))
    } catch (error) {

    }
}