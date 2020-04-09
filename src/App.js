import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component{
  state={
    advice: "There's something to be said about free advice...Want some?"
  }

  // componentDidMount(){
  //   this.fetchAdvice();
  // }
 fetchAdvice = () =>{
   axios.get('https://api.adviceslip.com/advice')
   .then((response) =>{
     const {advice} = response.data.slip;
      this.setState({advice: advice});
   })
   .catch((error) =>{
    console.log(error)
   })
 }

  render(){
    const { advice } = this.state;
    return(
      <div className="container">
        <h1>Unsolicited Advice App</h1>
        <div className="advice-box">
          <h2 className="advice"> {advice}</h2>
        </div>
        <button className="button" onClick={this.fetchAdvice}>
          <span>Gimme!</span>
        </button>
      </div>
      
      
    )
  }
}

export default App;
