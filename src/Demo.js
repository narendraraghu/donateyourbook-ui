import React, { Component} from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component
{
  render()
  {
    return <h2>Hello  {this.props.name} </h2>
  }

}

export default Demo;