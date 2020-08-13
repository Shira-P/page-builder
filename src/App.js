import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Sandbox from "./components/Sandbox"
import Menu from "./components/Menu"

import './App.css';

class App extends Component {
  state = {
      books: [
        {
          id: 101,
          title: "Librarian manual",
          author: "Shira-P",
          pages: []
        },
        {
          id: 102,
          title: "Historical of suffering",
          author: "Shira-P",
          pages: []
        }
      ]
  }

  render() {
    return ( 
      <div className="App">
        <Menu />
        <Sandbox books={this.state.books}/>
      </div>
    );
  }
}

export default App;
