import React, {Component} from 'react'
// import {NavLink} from 'react-router-dom'
import locationData from '../../data/locationData'
import './pin.css'
const orgPins = (
    // <h3>There is org pin</h3>
    <div>
    <p className="conf-by"> Confirmed by</p> 
    <img className="org-img" src="https://pbs.twimg.com/profile_images/881809373995171844/h3lJRsq_.jpg" width="35%" height="35%"/>  
    </div>

)  

const noOrgPins = (
    //hide this div
    <div>No org Pin</div>
) 

const OrgPinsContainer = () => (
    <div className='org-pins-container'> 
        {/* { Pin.orgConfirm == true} */}
        { locationData.orgConfirm ? orgPins : noOrgPins }
    </div>
)

export default OrgPinsContainer

// class orgPins extends Component {
//     render (){
//         return (

//             <div className="orgPnis-div">
//                 {/* showed if the location have pins from org */}
//                 {/* If an org user confirmed it shows here with details
//                 if there is no org confirmation this will not show */}
//                 <h1>this is org pins</h1>
                
// )


//             </div>

//         )
//     }

// export default orgPins