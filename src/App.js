/* import InteractiveWelcome from "./InteractiveWelcome"; */
/* import Welcome from "./Welcome"; */
/* import ConfigurableList from "./ConfigurableList"; */
/* import Sum from "./Sum"; */
/* import Counter from "./Counter"; */
/* import Login from "./Login"; */
/* import Container from "./Container"; */
/* import UncontrolledLogin from "./UncontrolledLogin"; */
import GithubUserList from './GithubUserList';

/* import { useState } from 'react' */

function App() {
/*     const [shouldCounterMount, setCounterMount] = useState(true);
    function unmountCounter() {
        setCounterMount(shouldCounterMount => !shouldCounterMount)
    } */
    return (
        <div>
            <GithubUserList />
            {/* <InteractiveWelcome /> */}
            {/* <Login /> */}
            {/* <UncontrolledLogin /> */}
            {/* <Welcome currName={'Fabio'} /> */}
            {/* <ConfigurableList subject={"groceries"} render={(state, deleteFromListHandler) => (
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
            )}/> */}
            {/* {shouldCounterMount && <Counter />}
            <button onClick={unmountCounter}>Toggle Counter</button> */}
        </div>
    );
}

export default App;
