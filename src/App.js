/* import InteractiveWelcome from "./InteractiveWelcome"; */
import Welcome from "./Welcome";
import ConfigurableList from "./ConfigurableList";
import Sum from "./Sum";
import Counter from "./Counter";
/* import Login from "./Login"; */
/* import Container from "./Container"; */
/* import UncontrolledLogin from "./UncontrolledLogin"; */

function App() {
    const catStyle = {
        width: '200px',
        borderRadius: '10px'
    }
    return (
        <div>
            {/* <InteractiveWelcome /> */}
            {/* <Login /> */}
            {/* <UncontrolledLogin /> */}
            <Welcome currName={'Fabio'} />
            <ConfigurableList subject={"groceries"} render={(state, deleteFromListHandler) => (
                <ul>
                    {state.map((item, index) => {
                        if (item) {
                            return (
                                <li listnumber={index} key={"listItem" + index}>{item}&nbsp;
                                    <button key={"button" + index} onClick={deleteFromListHandler}>Delete</button>
                                </li>
                            );
                        } else {return null}
                    })}
                </ul>
            )}/>
            <Counter increment={4} initialValue={10} />
            <Sum /* numbers={[2, 4, 5, 0, 1]} */ />
            {/* <Container title={<h1>Hello world!</h1>}>
            <p>Lorem ipsum blablabla</p>
        </Container > */}
        </div>
    );
}

export default App;
