import React, {Component} from 'react'
import {render} from 'react-dom'
import {fetchRepos} from './github'

class App extends Component {

  state = {
    name:'Michael',
    repos: []
  }

  handleSubmit = (username) => {
    fetchRepos(username)
    .then(repos => {
      const repoNames = repos.map(repo => repo.name)
      this.setState({repos: repoNames})
    })
  }

  renderList = () => {
    return this.state.repos.map(repo => {
      return <li>{repo}</li>
    })
  }

  render() {
    return (
      <div className='app'>
      <h1>Repo Lister</h1>
      <SearchForm onSubmit={this.handleSubmit}/>
      <ul>{this.renderList()}</ul>
      </div>
    )
  }
}

class SearchForm extends Component {
  
  state = {
    searchText: ''
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.searchText)
  }

  handleChange = (e) => {
    const value = e.target.value

    this.setState({
      searchText: value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={this.state.searchText} 
          placeholder={'enter a username'}
          onChange= {this.handleChange}
        />
        <button>Click me!</button>
      </form>
    )
  }
}


render(<App/>, document.querySelector('#root'))