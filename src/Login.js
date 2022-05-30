import React from "react";

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false,
    }

    inputChangeHandler = (event) => {
        const value = (event.target.type === "checkbox" ? event.target.checked : event.target.value);
        const name = event.target.name;

        this.setState({
            [name]: value
        })
    }

    onLogin = (event) => {
        event.preventDefault();
        console.log(this.state)

    }

    resetHandler = () => {
        this.setState(
            {
                username: "",
                password: "",
                remember: false,
            }
        )
    }

    render() {
        return (
            <form>
                <input name="username"
                    type="text"
                    value={this.state.username}
                    placeholder="username"
                    onChange={this.inputChangeHandler} />
                <input name="password"
                    type="password"
                    value={this.state.password}
                    placeholder="password"
                    onChange={this.inputChangeHandler} />
                <input name="remember"
                    type="checkbox"
                    checked={this.state.remember}
                    onChange={this.inputChangeHandler} />
                <button type="submit"
                    onClick={this.onLogin}
                    disabled={(this.state.password === "" || this.state.username === "" ? true : false)}
                >Login</button>
                <button onClick={this.resetHandler}>Reset</button>
            </form>
        )
    }
}
export default Login;