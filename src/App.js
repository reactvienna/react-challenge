import React, { Component } from 'react';
import ColorPicker from './ColorPicker';
import MovableObject from './MovableObject';

export class App extends Component {

    state = {
        color: 'green'
    }

    handleChange = event => {
        this.setState({
            color: event.target.value
        })
    }

    render() {
        return (
            <div>
                <ColorPicker onColorChange={this.handleChange} />
                <MovableObject color={this.state.color} toggledColor="red" />
            </div>
        );
    }
}
