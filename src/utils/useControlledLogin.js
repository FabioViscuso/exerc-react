import { useState } from "react";

export function useControlledLogin() {
    const [login, setLogin] = useState({
        username: "",
        password: "",
        remember: false,
    })

    function inputChangeHandler(event) {
        const value = (event.target.type === "checkbox" ? event.target.checked : event.target.value);
        const name = event.target.name;
        setLogin({
            ...login,
            [name]: value
        })
    }

    function loginHandler(event) {
        event.preventDefault();
        console.log(login)
        resetHandler();
    }

    function resetHandler() {
        setLogin(
            {
                username: "",
                password: "",
                remember: false,
            }
        )
    }

    return {
        login: login,
        onLogin: loginHandler,
        onReset: resetHandler,
        onInputChange: inputChangeHandler
    }

}


