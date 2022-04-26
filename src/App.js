import React, {Component} from 'react'
import Main from './Components/Main'
import "./App.css"
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from "react-redux";
import {ConfigureStore} from "./Redux/configureStore"



const store = ConfigureStore();
class App extends Component {
  
  render(){
    return (
      <Provider store = {store}>
      <Router>
        <div>
          <Main />
        </div>
      </Router>
      </Provider>
    );
    }
}

export default App