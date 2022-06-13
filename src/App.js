import InteractiveWelcome from "./InteractiveWelcome";
import TodoList from "./TodoList";
import Login from "./Login";
import Container from "./Container";
/* import UncontrolledLogin from "./UncontrolledLogin"; */

function App() {
    return (<div>
        <InteractiveWelcome />
        <Login />
        {/* <UncontrolledLogin /> */}
        <TodoList />
        <Container>
            <h1>Hello!</h1>
            <h2>World</h2>
        </Container >
    </div>)
}

export default App;
