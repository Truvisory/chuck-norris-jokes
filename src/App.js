import React, { Component } from 'react';
import './App.css';
// import data from './data'
import Card from './components/card'
import chuck from './components/chuck-norris.png'

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
    return this.setState({wisdom: Math.floor(Math.random() * (max - min + 1)) + min}) //The maximum is inclusive and the minimum is inclusive 
  }

  generateQuote = () => {
    this.getRandomIntInclusive(this.state.jokes.length - 1)
  }

  componentDidMount() {
    fetch('https://chuck-norris-quote-generator.herokuapp.com/jokes')
      .then(data => data.json())
        .then(JSONdata => {
          this.setState({jokes: JSONdata.data.jokes})
        })
  }

  render() {    
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 text-center">
          <img src={chuck} alt="chuck" style={{height: "200px"}}/>
            <h1 className="">Hello Chuck!</h1>
            <p className="">An app for randomly generating Chuck Norris jokes.</p>
            <div className="row justify-content-center">
              {this.state.wisdom || this.state.wisdom === 0
                ? <Card
                  quote={this.state.jokes[this.state.wisdom].joke}
                  tags={this.state.jokes[this.state.wisdom].categories}/>
                : <div></div>}
            </div>
            <button className="btn btn-danger btn-lg" onClick={this.generateQuote}><i className="fas fa-fist-raised" style={{fontSize: "50px"}}></i><br></br>Karate Chop!</button>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;