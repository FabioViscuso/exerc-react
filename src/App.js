import React from "react";
import Counter from "./Counter";
import Hello from "./Hello";
import Welcome from "./Welcome";

class App extends React.Component {
    render() {
        return (
            <div>
                <Counter initialValue={50} interval={2000} increment={2} />
                <Hello />
                {/* Within curly braces we can pass any valid JS/JSX expression */}
                <Welcome name={"John"} age={29} />
            </div>
        );
    }
}

export default App;
