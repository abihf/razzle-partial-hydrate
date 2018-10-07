import React, { Component } from 'react'

export default class StaticHello extends Component {
  componentDidMount() {
    console.log('did mount');
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  componentDidUpdate() {
    console.log('did update');
  }

  render() {
    return (
      <div id="xxx">
        Hello
      </div>
    )
  }
}
