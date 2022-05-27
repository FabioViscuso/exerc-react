import React from "react";

class CounterDisplay extends React.Component {
    render() {
        return <h1>{this.props.count}</h1>
    }
}
export default CounterDisplay;