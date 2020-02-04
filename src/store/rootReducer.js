import { combineReducers } from "redux";

// import reducers
import pinRudcer from "./pin/reducer";
import locationReducer from "./location/reducer"
import mapReducer from "./map/reducer"

const rootReducer = combineReducers({
    pin: pinRudcer,
    location: locationReducer,
    map: mapReducer
})

export default rootReducer