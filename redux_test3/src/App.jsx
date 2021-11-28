import React, { Component } from 'react'
import ProfilePage  from './components/ProfilePage'
import Counter from './components/counter'
export default class App extends Component {
  render() {
    return (
      <div>
        <div>Hello!</div>
        <div><Counter /></div>
      </div>
      
    )
  }
}