// imports
import { MY_LOC } from "./actionTypes";
export const myLoc = (loc) => ({
    type:MY_LOC,
    center:loc
})

export const getLoc = dispatch => {
    navigator.geolocation.getCurrentPosition(location=>dispatch(myLoc([location.coords.latitude,location.coords.longitude])))
    
}

// export const getLoc = () => async dispatch => {
//     try{
//         let loc = await navigator.geolocation.getCurrentPosition()
//         loc = [loc.coords.longitude, loc.coords.latitude]
       
//         dispatch(myLoc(loc))
//     } catch (error) {

//     }
// }
