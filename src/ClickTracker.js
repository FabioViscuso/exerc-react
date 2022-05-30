import React from "react";

class ClickTracker extends React.Component {
    state = {
        lastTrigger: ''
    }
    buttonTrackHandler = (event) => {
        this.setState(() => {return{lastTrigger: event.target.innerText}})
    }

    render() {
        return(
        <div>
            <h1>Latest button clicked is: {this.state.lastTrigger}</h1>
            <button onClick={this.buttonTrackHandler}>First button!</button>
            <button onClick={this.buttonTrackHandler}>Second button!</button>
            <button onClick={this.buttonTrackHandler}>Third button!</button>
        </div>
        )
    }
}
export default ClickTracker;