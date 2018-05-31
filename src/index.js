import React, {Component} from 'react'
import {render} from 'react-dom'
import './style.css'

class App extends Component {

  state = {
    name:'Michael'
  }
  render() {
    return (
      <div className='app'>
      {this.state.name}
      </div>
    )
  }
}

render(<App/>, document.querySelector('#root'))