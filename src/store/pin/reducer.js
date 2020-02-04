import {ADD_PIN , DELETE_PIN} from './actionTypes';

const initialState = {
    pins: []
}

const reducer = (state=initialState, action)=>{
    switch (action.type) {
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