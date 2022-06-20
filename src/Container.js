import { Component } from 'react';

class Container extends Component {
    render() {
        const containerStyle = {
            backgroundColor: '#c2c2e5',
            border: '2px solid #333333',
            borderRadius: '5px',
            padding: '20px 15px'
        }
        return (<div style={containerStyle}>
            <>{this.props.title}</>
            <div>{this.props.children}</div>
        </div>
        )
    }
}

export default Container;