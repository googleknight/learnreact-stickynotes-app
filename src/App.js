import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';
import CheckBox from './CheckBox';
class App extends Component {
  render() {
    return (
      <div>
        <Comment>Hi this is just a sample text</Comment>
        <Comment>Hello</Comment>
        <Comment>World!!</Comment>
        <CheckBox/>
        </div>
    );
  }
}

export default App;
