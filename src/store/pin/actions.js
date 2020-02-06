import { ADD_PIN ,DELETE_PIN, INDEX_PIN } from "./actionTypes";
import axios from 'axios'
import apiUrl from '../../apiConfig'
import {indexall,create} from '../../components/map/api'

export const indexPin = pins => ({
    type: INDEX_PIN,
    pins
})
export const addPin = pin => ({
    type: ADD_PIN,
    pin
})

export const deletePin = id => ({
    type: DELETE_PIN,
    id
})

// export const getPins = () => async dispatch => {
//     try{
        
//         const res = await axios.get(apiUrl+'/allpins')
//         const pins = res.data.pins
//         console.log('this is from actions', pins)

//         dispatch(indexPin(pins))
//     } catch (error) {
//         console.log(error)

//     }
// }

export const getPins = (user) => async dispatch => {
    try{
        const res = await indexall(user)
        // const res = await axios.get(apiUrl+'/allpins')
        const pins = res.data.pins
        console.log('this is the user', user)
        console.log('this is from actions', pins)

        dispatch(indexPin(pins))
    } catch (error) {
        console.log(error)

    }
}


export const createPin = (user, helpType, loc) => async dispatch => {
    try{
        // const options = {
        //     enableHighAccuracy: true,
        //     timeout: 5000,
        //     maximumAge: 0
        //   };
          console.log('this is the loc from action.js pin', loc)
        const pin ={
                "location":{
                    "type": "Point",
                    "coordinates": loc
                },
                "help":helpType,
                "desc":''
            }
        // {
        //     "pin":{
        //         "location":{
        //             "type": "Point",
        //             "coordinates":[16,63]
        //         },
        //         "help":helpType,
        //         "desc":null
        //     }
        // } 
        console.log('this is the created pin', pin)
        const res = await create(user, pin)
        const createdPin = res.data.pin
        const location = res.data.location
        console.log('this is the response location from BE', location)
        dispatch(addPin(createdPin))
    } catch (error) {
        console.log(error)

    }
}


