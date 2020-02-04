import './MapComp.css'
import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon, popup } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";
import positions from '../../data/positions'
import {Link} from 'react-router-dom'


 



class MapComp extends Component {

  toLocation = () => {
    // <Link to={`/Locations/:id`}></Link>
    
  }



    render (){

        return ( 

            <Map className="map" center={[24.713552, 46.675297]} zoom={12}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker onClick= {this.toLocation} position={[24.713552, 46.675297]}>
                <Popup>Nora is here</Popup>
              </Marker>
              <Marker position={[24.813552, 46.675297]}>
                <Popup>Nora is here</Popup>
              </Marker>

              {positions.map(position=>(
                <Marker position={[position.lat, position.lng]}>
                  <Popup>{position.popup}</Popup>
                </Marker>
              ))}
            </Map>  



        )
    }
}
export default MapComp
