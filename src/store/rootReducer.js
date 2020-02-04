import { combineReducers } from "redux";

// import reducers
import pinRudcer from "./pin/reducer";
import locationReducer from "./location/reducer"

const rootReducer = combineReducers({
    pin: pinRudcer,
    location: locationReducer
})

export default rootReducer