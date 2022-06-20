import { Component } from 'react';

class Container extends Component {
    render() {
        const containerStyle = {
            backgroundColor: '#a0c4c6',
            border: '2px solid #b4bcc4',
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