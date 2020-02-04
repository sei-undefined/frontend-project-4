// container of all locations pins and its count 
// container of count of pins + (all pins + its comments) of that specific location
import './location.css'
import Comment from '../comment/Comment'
import React, {Component} from 'react'
// import {NavLink} from 'react-router-dom'
class LocationDesc extends Component {
    render (){
        return (

            <div className="loc-desc">
                {/* all pins with comments only of that specific location */}
                {/* on the top it shows number of white and number of gold pins */}
            <Comment></Comment>

            </div>

        ) 
    } 
}
export default LocationDesc