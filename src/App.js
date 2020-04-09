import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/Header/Header.js"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
        currentPage: <Header />,
    }
    this.someFunction = this.someFunction.bind(this)

    this.buttonListenerAbout = this.buttonListenerAbout.bind(this)


  }

  buttonListenerAbout(event){

    document.getElementById("profile").classList.replace("btn-success", "btn-primary")
    document.getElementById("recycle").classList.replace("btn-success", "btn-primary")
    document.getElementById("verify").classList.replace("btn-success", "btn-primary")
    document.getElementById("about").classList.replace("btn-success", "btn-primary")
    document.getElementById("post").classList.replace("btn-success", "btn-primary")

    document.getElementById("about").classList.replace("btn-primary", "btn-success")
    // document.getElementById("recycle-page").style.zIndex = this.state.count+1 

    this.setState((prevState, props) => {
        return {currentPage: <Header />};
      })
  }

  someFunction(event){
    console.log(event)
    alert(event)
    // document.getElementById("profile").classList.replace("btn-success", "btn-primary")
    // document.getElementById("recycle").classList.replace("btn-success", "btn-primary")
    // document.getElementById("verify").classList.replace("btn-success", "btn-primary")
    // document.getElementById("about").classList.replace("btn-success", "btn-primary")
    // document.getElementById("post").classList.replace("btn-success", "btn-primary")

    // document.getElementById("about").classList.replace("btn-primary", "btn-success")
    // document.getElementById("recycle-page").style.zIndex = this.state.count+1 

    this.setState((prevState, props) => {
        return {currentPage: <Header />};
      })
  }



  render(){

    return (
      <div className="App">
          <Header />
      </div>
    );

  }
}

export default App;
