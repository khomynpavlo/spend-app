import React, { Component } from 'react';
import './App.css';
import SpendingSelector from './Components/Dropdown/Dropdown.jsx';
import axios from 'axios';

const logo = 'https://images.unsplash.com/photo-1519377345644-937ef9754740?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31a244fbe0532b092889aa568fa9e2c0&auto=format&fit=crop&w=1429&q=80';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('props > ', props);
        this.state = {
            spendItem: ''
        }
  }

    processChange = event => {
        this.setState({ 
          spendItem: event.target.value
        });
        console.log('SpendingSelector value > ', event.target.value)
}

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <SpendingSelector triggerParentUpdate={this.processChange.bind(this)}/>
                    <img src={logo} alt="logo" />
                </header>
            </div>
    );
  }
}

export default App;
