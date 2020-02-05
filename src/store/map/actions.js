// imports
import { MY_LOC } from "./actionTypes";
export const myLoc = (loc) => ({
    type:MY_LOC,
    center:loc
})

// export const getLoc = dispatch => {
//     navigator.geolocation.getCurrentPosition(location=>dispatch(myLoc([location.coords.latitude,location.coords.longitude])))
    
// }

// export const setLoc = (loc)=> dispatch => {
//     dispatch(myLoc(loc))
// }


export const getLoc = () => async dispatch => {
    try{
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
        const loc = await navigator.geolocation.getCurrentPosition(location => {
            return  [location.coords.longitude,location.coords.latitude]
          },console.error,options)
        console.log('this is from map action',loc)
        dispatch(myLoc(loc))
    } catch (error) {
        console.log(error)
    }
}
