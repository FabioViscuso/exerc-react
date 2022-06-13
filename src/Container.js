import { Component } from 'react';

class Container extends Component {
    render() {
        const containerStyle = {
            backgroundColor: '#9974a5',
            border: '2px solid #222222'
        }
        return (<div style={containerStyle}>{this.props.children}</div>)
    }
}

export default Container;