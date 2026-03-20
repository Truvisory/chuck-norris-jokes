import React, { Component } from 'react';
import './App.css';
import Card from './components/card'
import chuck from './components/chuck-norris.png'

const API_URL = 'https://chuck-norris-api.tony-4ed.workers.dev';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      jokes: [],
      wisdom: ''
    }
  }

  getRandomIntInclusive = (max) => {
    const min = 0
    max = Math.floor(max)
    return this.setState({wisdom: Math.floor(Math.random() * (max - min + 1)) + min})
  }

  generateQuote = () => {
    this.getRandomIntInclusive(this.state.jokes.length - 1)
  }

  flagJoke = (id) => {
    fetch(`${API_URL}/jokes/${id}/flag`, { method: 'POST' })
    this.setState(
      prevState => ({
        jokes: prevState.jokes.filter(j => j.id !== id),
        wisdom: ''
      }),
      () => { if (this.state.jokes.length > 0) this.generateQuote() }
    )
  }

  componentDidMount() {
    fetch(`${API_URL}/jokes`)
      .then(data => data.json())
        .then(JSONdata => {
          this.setState({jokes: JSONdata.data.jokes})
        })
  }

  render() {
    const currentJoke = (this.state.wisdom || this.state.wisdom === 0) && this.state.jokes[this.state.wisdom]
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 text-center">
          <img src={chuck} alt="chuck" style={{height: "200px"}}/>
            <h1 className="">Hello Chuck!</h1>
            <p className="">An app for randomly generating Chuck Norris jokes.</p>
            <div className="row justify-content-center">
              {currentJoke
                ? <Card
                  quote={currentJoke.joke}
                  tags={currentJoke.categories}
                  jokeId={currentJoke.id}
                  onFlag={this.flagJoke}/>
                : <div></div>}
            </div>
            <button className="btn btn-danger btn-lg" onClick={this.generateQuote}><i className="fas fa-fist-raised" style={{fontSize: "50px"}}></i><br></br>Karate Chop!</button>
            <p className="disclaimer">
              Jokes sourced from a third-party database and reviewed for inappropriate content.
              If you encounter something offensive, please flag it using the <i className="fas fa-flag"></i> button
              to help keep this experience enjoyable for everyone.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
