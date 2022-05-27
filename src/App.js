import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";

class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                {/* Within curly braces we can pass any valid JS/JSX expression */}
                <Welcome name={<strong>John</strong>} age={29} />
            </div>
        );
    }
}

export default App;
