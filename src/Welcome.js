import React from "react";

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.currName === "" ? "INSERTNAME" : this.props.currName}!</h1>
    }
}
export default Welcome;