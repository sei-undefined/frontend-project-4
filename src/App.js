import React, { Component } from 'react'
import './App.scss'
//

//
import { Route , Redirect} from 'react-router-dom'
import Header from './header/Header'
import MapComp from './components/map/MapComp'
import UserPin from './components/pin/userPins'
import ButtonsContainer from './components/buttons/ButtonsContainer'
import OrgPinsContainer from './components/pin/orgPinsContainer'
import LocationDesc from './components/location/locationDesc'
import UserPins from './components/pin/userPins'
import Footer from './components/footer/Footer'
// import Description from './components/pin/Description'
//
import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'

class App extends Component {
  constructor () {
    super()

    this.state = {
      // redirect: null,
      user: null,
      alerts: [],
      hello: ""
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }
  hellobuttonhandler = () => this.setState({hello:10})

  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   })
  // }
  // renderRedirect = () => {
    
  // }
  render () {
    const { alerts, user } = this.state
    

    const content = this.state.redirect ? <Redirect to="/locations" /> : null

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}


        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          {/* AuthenticatedRoute  */}
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          {/* route for orgpin */} 
          <AuthenticatedRoute user={user} exact path='/locations/:id' render={() => (<div>Hello</div>)}></AuthenticatedRoute>
        </main>



        <div> {/*Routes*/}

            <AuthenticatedRoute user={user} path='/' render={() => { 
              return (
                <div>
                  {/* <Header/> */}
                  <MapComp user={user}/>
                  <Route path = '/' exact render = {()=> 
                  <div>
                  <ButtonsContainer></ButtonsContainer>
                  {/* <button onClick={this.setRedirect}>Hello {this.state.hello}</button> */}
                  {/* <div>{this.state.redirect? "true" : "false"}</div> */}
                  </div>
                  }/>
                </div>
             
            )}}/>


            
            


            <Route user={user} path="/Locations" exact render={() => {
            return (
              <div>
                  <OrgPinsContainer/> 
                  <UserPin/>
                  <LocationDesc/>
              </div>
              
            )
          }}/>
          {content}
            <div className="footer">
               <Footer/>
            </div>
        </div>

        




      </React.Fragment>
      
    )
  }
}

export default App
