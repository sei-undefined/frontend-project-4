import React, {Component} from 'react'
// import {NavLink} from 'react-router-dom'
import './userPins.css'
class userPins extends Component {
    render (){
        return (

            <div className="user-pins-div">
                {/* if the user has a pin it will show here.
                the user can edit the pin help:T/F
                also description or comments we can edit them here
                user can also delete pin from here if it was by mistake */}
                <div className="cmnt">
                    <div className="tgl">
                        <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider"></span>
                        </label>
                    </div>    
                        <textarea rows="4" cols="50" name="comment" form="usrform">
                            Write your comment...</textarea>   <input className="sbmt"type="submit"/>
                            
                    </div>
                    <button>delete</button>

            </div>

        ) 
    }
}
export default  userPins