import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Comment extends Component {
  edit(){
      alert('Editing');
  }
  remove(){
      alert('Removing');
  }
    render() {
    return (
      <div className='commentContainer'>
        <div className='commentText'>{this.props.children}</div>
        <button onClick={this.edit} className='button-primary'>Edit</button>
        <button onClick={this.remove} className='button-danger'>Remove</button>
        </div>
    );
  }
}

export default Comment;
