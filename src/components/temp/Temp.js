import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

export class Temp extends Component {
  render() {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}


Temp = withRouter(Temp)
export default connect(mapStateToProps, mapDispatchToProps)(Temp)
