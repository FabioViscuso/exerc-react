/* import Counter from "./Counter"; */
/* import Container from "./Container"; */
/* import ConfigurableList from "./ConfigurableList"; */
/* import GithubUserList from './GithubUserList'; */
/* import InteractiveWelcome from "./InteractiveWelcome"; */
/* import Login from "./Login"; */
/* import Sum from "./Sum"; */
/* import UncontrolledLogin from "./UncontrolledLogin"; */
import Welcome from "./Welcome";
/* import { CarDetails } from "./CarDetails"; */
/* import { LanguageContext } from "./LanguageContext"
import { DisplayLanguage } from "./DisplayLanguage"; */
/* import { useState } from "react"; */
/* import { FilteredList } from "./FilteredList"; */
import { Routes, Route, Link } from "react-router-dom";

function App() {
    /* const [shouldCounterMount, setCounterMount] = useState(true);
    function unmountCounter() {
        setCounterMount(shouldCounterMount => !shouldCounterMount)
    } */
    /* const [lang, setLang] = useState('English')
    function setLangHandler(event) {
        setLang(event.target.value)
    } */
    /* const list = [
        { id: 1, name: 'John', age: 12 },
        { id: 2, name: 'Jimmy', age: 27 },
        { id: 3, name: 'Jimbo', age: 16 },
        { id: 4, name: 'Jeremy', age: 18 },
        { id: 5, name: 'Jane', age: 30 },
        { id: 6, name: 'Jack', age: 32 },
    ] */
    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome currName={'Fabio'} />} />
            </Routes>
            {/*  */}
            {/* <Login /> */}
            {/* {shouldCounterMount && <Counter />}
            <button onClick={unmountCounter}>Toggle Counter</button> */}
            {/* <FilteredList adultPeople={list} /> */}
            {/* <UncontrolledLogin /> */}
            {/* <CarDetails initialData={{ model: 'tesla model s', year: 2022, color: '#eeeeee' }} /> */}
            {/* <Welcome currName={'Fabio'} /> */}
            {/* <GithubUserList /> */}
            {/* <select onChange={setLangHandler}>
                <option value="Italiano">Italiano</option>
                <option value="English">English</option>
            </select>
            <LanguageContext.Provider value={lang}>
                <DisplayLanguage />
            </LanguageContext.Provider> */}
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
            )}/> */}
            {/* <Container title={<h1>Hello world!</h1>}>
                <p>Lorem ipsum blablabla</p>
            </Container > */}
        </div>
    );
}

export default App;
