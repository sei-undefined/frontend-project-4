import {MY_LOC} from './actionTypes';

const initialState = {
    center: [24.713552, 46.675297],
    zoom: 12

}

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case MY_LOC:
            return{
                center: action.center,
                zoom: action.zoom
            }
        default:
            return state
    }
}

export default reducer