//btns container on the '/'
import {Redirect, withRouter} from 'react-router-dom'
import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {NavLink} from 'react-router-dom'
import './buttons.css'
import {createPin} from '../../store/pin/actions'
import {geolocated} from 'react-geolocated'
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
    
    // getPosition()=>{
    //     // Simple wrapper
    //     return new Promise((res, rej) => {
    //         navigator.geolocation.getCurrentPosition(res, rej);
    //     });
    // };
    // async getGPS() => {
    //     const loc = await getPosition();  // wait for getPosition to complete
    //     return loc
    // }
    

    handleClick= (helpType) => {
        const loc = [this.props.coords.latitude, this.props.coords.longitude]
        console.log('this is loc from geo located',loc)
        const user = this.props.user
        this.props.createPin(user, helpType, loc)
        // this.props.history.push(`/locations`)
      }
    render (){
        return ( 

            <div className="btn-div">
                <button 
                onClick={()=>this.handleClick(false)}
                className="white-btn btn">Locate <hr/> <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-location-pin-thin.png" width="26%" height="20%"/></button>
                <button className="golden-btn btn" onClick={()=>this.handleClick(true)} >Helped <hr/> <img src="https://www.myspire.com/MySPIRE/media/Icons/location_gold.png" width="26%" height="20%"/> </button>
                {/* <button>current</button> */}
            </div>

        )
    }
}
// const mapStateToProps = (state) => ({
    
// })

const mapDispatchToProps =  dispatch => ({
    createPin: (user, helpType, loc) => dispatch(createPin(user, helpType, loc)),

  
  })
  
  ButtonsContainer = geolocated({
      positionOptions: {
          enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
  })(ButtonsContainer);

ButtonsContainer = withRouter(ButtonsContainer)
ButtonsContainer = connect(null,mapDispatchToProps)(ButtonsContainer)
export default ButtonsContainer