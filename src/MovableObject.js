import React, { Component } from 'react';

export default class extends Component {
  state = {
    toggled: false,
    offset: {
      x: 0,
      y: 0
    }
  }

  handleMouseDown(event) {
    this.setState({
      toggled: true
    });
  }

  handleMouseUp(event) {
    this.setState({
      toggled: false
    });
  }

  handleMouseMove(event) {
    if (this.state.toggled) {
      this.setState({
        offset: {
          x: event.clientX - 50,
          y: event.clientY - 50
        }
      });
    }
  }

  render() {
    return (
      <div
      onMouseMove={::this.handleMouseMove}
      onMouseDown={::this.handleMouseDown}
      onMouseUp={::this.handleMouseUp}
      style={{
        height: 100,
        width: 100,
        position: 'absolute',
        left: this.state.offset.x,
        top: this.state.offset.y,
        backgroundColor: !this.state.toggled ?
          this.props.color :
          this.props.toggledColor
      }}></div>
    );
  }
}
