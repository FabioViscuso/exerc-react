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
        <Container title={<h1>Hello world!</h1>}>
            <p>Lorem ipsum blablabla</p>
        </Container >
    </div>)
}

export default App;
