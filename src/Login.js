import { useState } from 'react';

function Login() {
    const [state, setState] = useState({
        username: "",
        password: "",
        remember: false,
    })


    function inputChangeHandler(event) {
        const value = (event.target.type === "checkbox" ? event.target.checked : event.target.value);
        const name = event.target.name;

        setState({
            ...state,
            [name]: value
        })
    }

    function onLogin(event) {
        event.preventDefault();
        console.log(state)
        resetHandler();
    }

    function resetHandler() {
        setState(
            {
                username: "",
                password: "",
                remember: false,
            }
        )
    }

    const buttonStyle = {
        backgroundColor: (state.password.length <= 8) ? 'red' : 'green'
    }

    return (
        <form onSubmit={onLogin}>
            <input name="username"
                type="text"
                value={state.username}
                placeholder="username"
                onChange={inputChangeHandler} />
            <input name="password"
                type="password"
                value={state.password}
                placeholder="password"
                onChange={inputChangeHandler} />
            <input name="remember"
                type="checkbox"
                checked={state.remember}
                onChange={inputChangeHandler} />
            <button type="submit"
                style={buttonStyle}
                disabled={(state.username === "" || state.password > 8 ? true : false)}
            >Login</button>
            <button type='button' onClick={resetHandler}>Reset</button>
        </form>
    )
}
export default Login;