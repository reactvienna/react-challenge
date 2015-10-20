import React, { Component } from 'react';

export default class extends Component {

    static propTypes = {
        onColorChanged: React.PropTypes.func.isRequired
    }

    render() {
        return (
            <input type="text" onChange={this.props.onColorChange} />
        );
    }
}
