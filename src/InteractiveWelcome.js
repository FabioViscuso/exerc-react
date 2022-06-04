import React from "react";
import Welcome from "./Welcome";

class InteractiveWelcome extends React.Component {
    state = {
        currName: ""
    }

    inputChangeHandler = (event) => {
        this.setState(
            { currName: event.target.value }
        )
    }

    render() {
        return (
            <div className="welcome">
                <Welcome currName={this.state.currName} />
                <input type="text" placeholder="Type here" onChange={this.inputChangeHandler} />
            </div>
        )
    }
}
export default InteractiveWelcome;