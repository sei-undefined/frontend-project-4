// container of all locations pins and its count 
// container of count of pins + (all pins + its comments) of that specific location
import './location.css'
import Comment from '../comment/Comment'
import '../comment/Comment.css'
import React, {Component} from 'react'
// import {NavLink} from 'react-router-dom'
class LocationDesc extends Component {
    render (){
        return (

            <div className="loc-desc">
                {/* <script>
                    // When the user scrolls down 20px from the top of the document, slide down the navbar
                    window.onscroll = function() {scrollFunction()};

                    function scrollFunction() {
                    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                        document.getElementById("navbar").style.top = "0";
                    } else {
                        document.getElementById("navbar").style.top = "-50px";
                    }
                    }
                </script> */}
                {/* all pins with comments only of that specific location */}
                {/* on the top it shows number of white and number of gold pins */}
                {/* <br/> */}
                 <Comment></Comment>

            </div>

        ) 
    } 
}
export default LocationDesc