import { Component } from 'react';

class Container extends Component {
    render() {
        const containerStyle = {
            backgroundColor: '#9974a5',
            border: '2px solid #222222'
        }
        return (<div style={containerStyle}>
            <>{this.props.title}</>
            <div>{this.props.children}</div>
        </div>
        )
    }
}

export default Container;