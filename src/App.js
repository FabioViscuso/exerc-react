/* import InteractiveWelcome from "./InteractiveWelcome"; */
import Welcome from "./Welcome";
import ConfigurableList from "./ConfigurableList";
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
            <ConfigurableList subject={"todos"} render={(state, deleteFromListHandler) => (
                <ol>
                    {state.map((item, index) => {
                        if (item) {
                            return (
                                <li listnumber={index} key={"listItem" + index}>{item}&nbsp;
                                    <button key={"button" + index} onClick={deleteFromListHandler}>Delete</button>
                                </li>
                            );
                        } else {return null}
                    })}
                </ol>
            )}/>
            <ConfigurableList subject={"cats"} render={(state, deleteFromListHandler) => (
                <div>
                    {state.map((item, index) => {
                        if (item) {
                            return (
                                <div listnumber={index} key={'cat' + index}>
                                    <img style={catStyle} src={item} key={"listItem" + index} alt={'image number '+index}/>
                                    <button key={"button" + index} onClick={deleteFromListHandler}>Delete</button>
                                </div>
                            );
                        } else {return null}
                    })}
                </div>
            )}/>
            {/* <Container title={<h1>Hello world!</h1>}>
            <p>Lorem ipsum blablabla</p>
        </Container > */}
        </div>
    );
}

export default App;
