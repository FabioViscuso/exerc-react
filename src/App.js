/* import InteractiveWelcome from "./InteractiveWelcome"; */
import Welcome from "./Welcome";
import ConfigurableList from "./ConfigurableList";
/* import Sum from "./Sum"; */
import Counter from "./Counter";
import Login from "./Login";
/* import Container from "./Container"; */
/* import UncontrolledLogin from "./UncontrolledLogin"; */

function App() {
    function onCounterChange(value){
        console.log(value)
    }
    return (
        <div>
            {/* <InteractiveWelcome /> */}
            <Login />
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
            <Counter onCounterChange={onCounterChange} />

        </div>
    );
}

export default App;
