import React from "react";

class Welcome extends React.Component {
    render() {
        return (
            <>
                <p>Welcome, {this.props.name}!</p>
                <p>Your age is {this.props.age}</p>
            </>
        );
    }
}

/* If no props.name is passed, there would be an empty space.
   So we use defaultProps to give some props' a default value */

Welcome.defaultProps = {
    name: "Default Name",
};

export default Welcome;
