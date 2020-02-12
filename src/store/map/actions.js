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

//  function getPosition() {
//             // Simple wrapper
//             return new Promise((res, rej) => {
//                 navigator.geolocation.getCurrentPosition(res, rej);
//             });
//         }

export const getLoc = () => async dispatch => {
    try{
       
        
        // const loc = getGPS()
        // console.log('this is the getGPS',loc)
        
        // const loc = navigator.geolocation.getCurrentPosition(location => {
        //     return  [location.coords.longitude,location.coords.latitude]
        //   })
        // console.log('this is from map action',loc)
        // dispatch(myLoc(loc))
    } catch (error) {
        console.log(error)
    }
}
