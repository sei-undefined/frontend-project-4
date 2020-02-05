//btns container on the '/'
import {Redirect, withRouter} from 'react-router-dom'
import React, {Component} from 'react'
// import {NavLink} from 'react-router-dom'
import './buttons.css'
class ButtonsContainer extends Component {
 
    // state = {
    //     redirect: false
    //   }
    //   setRedirect = () => {
    //     this.setState({
    //       redirect: true
    //     })
    //   }
    //   renderRedirect = () => {
    //     if (this.state.redirect) {
    //       return <Redirect to='/target' />
    //     }
    //   } 

    handleClick= () => {
        this.props.history.push(`/locations`)
      }
    render (){

        return ( 

            <div className="btn-div">
                <button 
                onClick={this.handleClick}
                className="white-btn btn">Locate <hr/> <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-location-pin-thin.png" width="26%" height="20%"/></button>
                <button className="golden-btn btn" onClick={this.handleClick} >Helped <hr/> <img src="https://www.myspire.com/MySPIRE/media/Icons/location_gold.png" width="26%" height="20%"/> </button>
            </div>

        )
    }
}
export default withRouter(ButtonsContainer)