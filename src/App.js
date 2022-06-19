/* import InteractiveWelcome from "./InteractiveWelcome"; */
/* import ConfigurableList from "./ConfigurableList"; */
import LanguageContext from "./LanguageContext"
import DisplayLanguage from "./DisplayLanguage";
/* import Login from "./Login"; */
/* import Container from "./Container"; */
/* import UncontrolledLogin from "./UncontrolledLogin"; */
import { useState } from "react";

function App() {
    const [lang, setLang] = useState('en')
    function setLangHandler(event) {
        setLang(event.target.value)
    }
    return (
        <div>
            {/* <InteractiveWelcome /> */}
            {/* <Login /> */}
            {/* <UncontrolledLogin /> */}
            <select onChange={setLangHandler}>
                <option value="it">Italiano</option>
                <option value="en">English</option>
            </select>
            <LanguageContext.Provider value={lang}>
                <DisplayLanguage />
            </LanguageContext.Provider>
            {/* <ConfigurableList subject={"groceries"} render={(state, deleteFromListHandler) => (
                <ul>
                    {state.map((item, index) => {
                        if (item) {
                            return (
                                <li listnumber={index} key={"listItem" + index}>{item}&nbsp;
                                    <button key={"button" + index} onClick={deleteFromListHandler}>Delete</button>
                                </li>
                            );
                        } else { return null }
                    })}
                </ul>
            )} /> */}
            {/* <Container title={<h1>Hello world!</h1>}>
            <p>Lorem ipsum blablabla</p>
        </Container > */}
        </div>
    );
}

export default App;
