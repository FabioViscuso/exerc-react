import InteractiveWelcome from "./InteractiveWelcome";
import TodoList from "./TodoList";
/* import Login from "./Login"; */
import UncontrolledLogin from "./UncontrolledLogin";

function App() {
    return (<div>
        <InteractiveWelcome />
        {/* <Login /> */}
        <UncontrolledLogin />
        <TodoList />
    </div>)
}

export default App;
