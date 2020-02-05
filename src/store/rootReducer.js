import { combineReducers } from "redux";

// import reducers
import pinRudcer from "./pin/reducer";
import locationReducer from "./location/reducer"
import mapReducer from "./map/reducer"
import tempReducer from "./temp/reducer"

const rootReducer = combineReducers({
    pin: pinRudcer,
    location: locationReducer,
    map: mapReducer,
    temp:tempReducer
})

export default rootReducer