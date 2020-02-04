// imports
import { MY_LOC } from "./actionTypes";
export const myLoc = (loc) => ({
    type:MY_LOC,
    center:loc
})

export const getloc = () => {
    const loc = navigator.geolocation.getCurrentPosition(position=>{
        return position
    })
}