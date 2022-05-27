import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
    render() {
        return (
            <>
                <p>Welcome, {this.props.name}!</p>
                {(this.props.age > 18 && this.props.age < 65) && <Age age={this.props.age} />}
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
