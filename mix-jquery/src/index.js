import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery'
function Button(){
  return <button id="btn" > Say Hello </button>
}

//test1
ReactDOM.render(
  <Button />,
  document.getElementById('container'),
  function(){
      $('#btn').click(function(){
          alert('Hello!')
      })
  }
)

//test2
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
