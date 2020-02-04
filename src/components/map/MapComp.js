// import {geolocated} from 'react-geolocated';
import './MapComp.css'
import React, { Component, Fragment } from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon, popup } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";
import positions from '../../data/positions'
import {Link, withRouter} from 'react-router-dom'

// import api
import {index} from './api'

// import redux
import {connect} from 'react-redux'
import {addPin} from '../../store/pin/actions'
import {myLoc,getLoc} from '../../store/map/actions'


 



class MapComp extends Component {
    state={
      pins:[]

    }

    toLocation = () => {
      // <Link to={`/Locations/:id`}></Link>
      
    }


    componentDidMount(){
      const user = this.props.user
        index(user)
        .then(response => {
            const allPins = response.data.pins;
            this.setState({
                pins:allPins
            })
        })
        .catch((error) => console.log(error))
    }
    locationHandle = () => {
      navigator.geolocation.getCurrentPosition((location)=>{
        console.log(location)
      })
    }
    handleClick= (id) => {
      console.log(id)
      this.props.history.push(`/locations/${id}`)
    }
    render (){
      const pins = this.state.pins


        return ( 
            <Fragment>
              <button onClick={this.locationHandle}>Get location</button>
            <Map className="map" center={this.props.center} zoom={this.props.zoom}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
              {/* <Marker onClick= {this.toLocation} position={[24.713552, 46.675297]}>
                <Popup>Nora is here</Popup>
                </Marker>
                <Marker position={[24.813552, 46.675297]}>
                <Popup>Nora is here</Popup>
              </Marker> */}

              {pins.map(pin=>(
                <Marker onClick={()=>this.handleClick(pin._id)} key={pin._id} position={pin.location.coordinates}>
                  {/* <Popup>{position.popup}</Popup> */}
                </Marker>
              ))}
            </Map> 
            <button onClick={this.props.getLoc}>test redux</button> 
            </Fragment>
            



        )
    }
}
const mapStateToProps = state => ({
  // pins: state.pin.pins,
  zoom: state.map.zoom,
  center: state.map.center
})

const mapDispatchToProps =  dispatch => ({
  addPin: id => dispatch(addPin(id)),
  getLoc: () => dispatch(getLoc)


})

MapComp = withRouter(MapComp)
MapComp = connect(mapStateToProps, mapDispatchToProps)(MapComp)
export default MapComp;
