import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome"


class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name={"John"} />
            </div>
        );
    }
}

export default App;
