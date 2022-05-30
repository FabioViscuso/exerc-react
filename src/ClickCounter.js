import React from "react";

class ClickCounter extends React.Component {

    state = {
        count: 0
    }
    clickAddHandler = () => {
        this.setState((state) => {return{count: state.count + 1}})
    }

    render() {
        return (<button onClick={this.clickAddHandler}>
                    Click to add 1. Current count is: {this.state.count}
                </button>)
    }
}
export default ClickCounter;