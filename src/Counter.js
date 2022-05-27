import React from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: this.props.initialValue
        }
        setInterval(() => {
            this.setState((state) => {return{count: state.count + this.props.increment}} )
        }, this.props.interval)
    }
    render () {
        return <CounterDisplay count={this.state.count} />
    }
}

Counter.defaultProps = {
    initialValue: 0,
    interval: 1000,
    increment: 1
}

export default Counter