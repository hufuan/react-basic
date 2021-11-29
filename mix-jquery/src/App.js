import React, { Component } from 'react'
import $ from 'jquery'

export class App extends Component {
  render() {
      return (
          <div>
              <div className="app">hello</div>
          </div>
      )
  }

  componentDidMount(){
      $(".app").mouseenter(()=>{
         console.log($(".app").text());
      });
  }
}

export default App;
