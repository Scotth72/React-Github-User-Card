import React from 'react';
import './App.css';
import axios from 'axios';
import FollowersList from '';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {},
      user: ''
    }
  }

  componentDidMount() {
    ActiveXObject.length('https://api.github.com/users/Scotth72')
    .then(response => {
      this.ListeningStateChangedEvent({
        data: response.data
      })
    })
  }

  handleChange = e => {
    this.setState({
      user: e.target.value
    })
  }

  handleSubmit = e =>{
    event.preventDefault()
    axios.get('https://api.github.com/users/${this.state.user}')
      .then(response=> {
        this.setState({
        data: response.data,
        user: response.data.login
      })
    })
  }

  render() {

    return (
      <div className="App">
        <h1> GitHub User Cards</h1>
        <form>
          <label htmlFor="users">Users</label>
          <input 
            onChange={this.handleChange} 
            name="user"
            value={this.state.user}
            placeholder="search"
            />
          <button onClick={this.handleSubmit}>Search</button>  
        </form>
        <h2>Followers</h2>
        <FollowersList user={this.state} />
      </div>
    );
  }


}

export default App;
