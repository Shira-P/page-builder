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
          keypages: [
            {
              id: 101001, // I dun sure if I need kp ID ?
              title: "Librarian",
              pages: [
                {
                  id: 1000001, // this ID gonna be use as img path
                  name: 'Test1',
                  rarity: 'Common',
                  type: 'P',
                  cost: 0,
                  dice: 1, // effect to action
                  action: [
                    {
                      actionImg: 'toimgpath',
                      behavior: '1~4'
                    }
                  ]
                },
                {
                  id: 1000001, // this ID gonna be use as img path
                  name: 'Test1',
                  rarity: 'Common',
                  type: 'P',
                  cost: 0,
                  dice: 1, // effect to action
                  action: [
                    {
                      actionImg: 'toimgpath',
                      behavior: '1~4'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 102,
          title: "Historical of suffering",
          author: "Shira-P",
          keypages: [
            {
              id: 102001, // I dun sure if I need kp ID ?
              title: "Librarian2",
              pages: [
                {
                  id: 1000001, // this ID gonna be use as img path
                  name: 'Test1',
                  rarity: 'Common',
                  type: 'P',
                  cost: 0,
                  dice: 1, // effect to action
                  action: [
                    {
                      actionImg: 'toimgpath',
                      behavior: '1~4'
                    }
                  ]
                }
              ]
            }
          ]
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
