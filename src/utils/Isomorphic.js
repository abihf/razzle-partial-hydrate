import React, { Component } from 'react'

export default class Isomorphic extends Component {
  
  render() {
    const { component, name, props } = this.props
    const Comp = component.default || component;
    return (
      <div id={name}>
        <Comp {...props} />
      </div>
    )
  }
}
