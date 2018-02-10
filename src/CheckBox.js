import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class CheckBox extends Component {
  constructor(props){
      super(props);
      this.state={checked:true};
  }
  handledChecked(){
      this.setState({
          checked:!this.state.checked
      });
  }
    render() {
        let msg;
        if(this.state.checked){
            msg='Checked';
        }
        else{
            msg='UnChecked';
        }
    return (
        <div>
            <input type='checkbox' onChange={()=>this.handledChecked} defaultChecked={this.state.checked}/>
            <h1>CheckBox is {msg}</h1>
        </div>
    );
  }
}

export default CheckBox;
